/* Minimal client-side media preview renderer (no build step). */
(function () {
  const mediaLinks = [
    // Only the first 3 are shown.
    "https://engineering.uci.edu/news/2024/5/uci-led-team-selected-department-defense-multi-university-initiative-investigating",
    "https://youtu.be/GLsC6FM6viY",
    "https://youtu.be/7VOwF5kTlh4",
    "https://engineering.uci.edu/news/2023/6/egerstedt-presents-2023-faculty-awards",
    "https://www.linkedin.com/posts/university-of-california-irvine_speakup4science-activity-7377008499609944064-d8aX/",
  ];

  const gridEl = document.getElementById("media-grid");
  const listEl = document.getElementById("media-list");
  if (!gridEl || !listEl) return;

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function domainFromUrl(url) {
    try {
      return new URL(url).hostname.replace(/^www\\./, "");
    } catch {
      return url;
    }
  }

  function faviconUrl(url) {
    const domain = domainFromUrl(url);
    return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;
  }

  function renderFallbackCard(url) {
    const domain = domainFromUrl(url);
    return `
      <a class="media-card" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
        <div class="media-card-body">
          <div class="media-card-kicker">
            <img class="media-favicon" src="${escapeHtml(faviconUrl(url))}" alt="" aria-hidden="true" />
            <span>${escapeHtml(domain)}</span>
          </div>
          <div class="media-card-title">${escapeHtml(url)}</div>
        </div>
      </a>
    `;
  }

  function renderCard(meta) {
    const url = meta.url;
    const domain = domainFromUrl(url);
    const title = meta.title || url;
    const description = meta.description || "";
    const image = meta.image || "";

    const img = image
      ? `<div class="media-card-image"><img src="${escapeHtml(image)}" alt="" loading="lazy" /></div>`
      : `<div class="media-card-image is-empty" aria-hidden="true"></div>`;

    const desc = description ? `<div class="media-card-desc">${escapeHtml(description)}</div>` : "";

    return `
      <a class="media-card" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
        ${img}
        <div class="media-card-body">
          <div class="media-card-kicker">
            <img class="media-favicon" src="${escapeHtml(faviconUrl(url))}" alt="" aria-hidden="true" />
            <span>${escapeHtml(meta.siteName || domain)}</span>
          </div>
          <div class="media-card-title">${escapeHtml(title)}</div>
          ${desc}
        </div>
      </a>
    `;
  }

  async function fetchOgMeta(url) {
    // Browsers block cross-origin HTML fetches for many sites (CORS).
    // Use a CORS-friendly text proxy. If it fails, we fall back gracefully.
    const proxyUrl = `https://r.jina.ai/http://${url.replace(/^https?:\\/\\//, "")}`;

    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 4500);
    try {
      const res = await fetch(proxyUrl, { signal: ctrl.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const doc = new DOMParser().parseFromString(text, "text/html");

      const pick = (sel) => doc.querySelector(sel)?.getAttribute("content")?.trim() || "";
      const title =
        pick('meta[property=\"og:title\"]') ||
        pick('meta[name=\"twitter:title\"]') ||
        (doc.querySelector("title")?.textContent || "").trim();
      const description =
        pick('meta[property=\"og:description\"]') ||
        pick('meta[name=\"description\"]') ||
        pick('meta[name=\"twitter:description\"]');
      const image = pick('meta[property=\"og:image\"]') || pick('meta[name=\"twitter:image\"]');
      const siteName = pick('meta[property=\"og:site_name\"]');

      let imageAbs = "";
      if (image) {
        try {
          imageAbs = new URL(image, url).toString();
        } catch {
          imageAbs = "";
        }
      }

      return {
        url,
        title: title || "",
        description: description || "",
        image: imageAbs,
        siteName: siteName || "",
      };
    } finally {
      clearTimeout(timeout);
    }
  }

  async function render() {
    const allLinks = mediaLinks.filter(Boolean);
    const links = allLinks.slice(0, 3);

    listEl.innerHTML = allLinks
      .map((url) => {
        const domain = domainFromUrl(url);
        return `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(domain)}</a><span class="media-url">${escapeHtml(url)}</span></li>`;
      })
      .join("");

    if (links.length === 0) {
      gridEl.innerHTML =
        '<p class=\"pub-empty\">Add up to 3 links in <code>media.js</code> to show previews here.</p>';
      return;
    }

    gridEl.innerHTML = links.map(renderFallbackCard).join("");

    // Upgrade cards with OG metadata when possible.
    const metas = await Promise.all(
      links.map(async (url) => {
        try {
          return await fetchOgMeta(url);
        } catch {
          return { url };
        }
      })
    );

    gridEl.innerHTML = metas
      .map((m) => (m.title || m.description || m.image ? renderCard(m) : renderFallbackCard(m.url)))
      .join("");
  }

  render();
})();
