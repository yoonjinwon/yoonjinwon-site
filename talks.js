/* Minimal client-side talks renderer (no build step). */
(function () {
  try {
    /** @type {Array<{
     *  id: string,
     *  date: string, // MM/YYYY
     *  text: string,
     *  type?: string
     * }>}
     */
    const talks = [
    {
      id: "talk-2025-09-uci-tau",
      date: "09/2025",
      text:
        '"Fundamentals of Machine Learning for Phase Change Heat Transfer," 2025 UCI-TAU Conference, 2025, Invited speaker',
    },
    {
      id: "talk-2025-08-exhft",
      date: "08/2025",
      text:
        '"Fundamentals of Machine Learning for Phase Change Heat Transfer," The 11th World Conference on Experimental Heat Transfer, Fluid Mechanics and Thermodynamics (ExHFT-11), Virtual, August 15-18, 2025, Invited keynote speaker',
    },
    {
      id: "talk-2025-08-cau-miniworkshop",
      date: "08/2025",
      text:
        '"Fundamentals of Machine Learning for Phase Change Heat Transfer," Mini-Workshop, Choong-Ang University, Aug 2025. Hosted by Prof. Hyoungsoon Lee.',
    },
    {
      id: "talk-2025-08-data-centers-seoul",
      date: "08/2025",
      text:
        '"Machine Learning Applications in Two-Phase Heat Transfer for Advanced Thermal Management," International Seminar on Thermal Management in High-Density Data Centers, Seoul, South Korea, August 11-12 2025, Invited speaker',
    },
    {
      id: "talk-2025-06-tptpr",
      date: "06/2025",
      text:
        '"Fundamentals of Machine Learning for Phase Change Heat Transfer," IIR Conference on Thermophysical Properties and Transport Processes of Refrigerants (TPTPR), the University of Maryland, June 15-18, 2025, Invited panel speaker',
    },
    {
      id: "talk-2025-06-ufip",
      date: "06/2025",
      text:
        '"Learning from Complexity: Machine Learning for Two-Phase Heat Transfer," Micro Flow and Interfacial Phenomena (µFIP), June 2025, Santa Babara, CA, Invited keynote speaker',
    },
    {
      id: "talk-2025-02-ashrae-winter",
      date: "02/2025",
      text:
        '"Applications of Machine Learning for Phase Change Heat Transfer," ASME SHTC 2024, Feb. 2025, American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE) Winter Conference, Feb 4-8, Orlando, Florida, Invited panel speaker',
    },
    {
      id: "talk-2024-11-emerging-tech",
      date: "11/2024",
      text:
        '"Emerging Technology Conference," Invited panel speaker, Organized by Prof. and Dean A.-H. “Alissa” Park of UCLA.',
    },
    {
      id: "talk-2024-10-ieee-sipho",
      date: "10/2024",
      text:
        "2024 IEEE Symposium on Reliability for Electronics and Photonics Packaging Reliability, Failure Modes and Testing for Integration of Electronics and Photonics (SiPho), Theme: Reliability for Advanced Semiconductor Packaging, Invited keynote speaker",
    },
    {
      id: "talk-2024-10-interpack-ml-cooling",
      date: "10/2024",
      text:
        '"Applications of Machine Learning for Heat Transfer in Electronics Cooling," ASME InterPACK 2024, Oct 2025, San Jose, California, Invited panel speaker',
    },
    {
      id: "talk-2024-07-shtc",
      date: "07/2024",
      text:
        '"Fundamentals of Machine Learning for Phase Change Heat Transfer," ASME SHTC 2024, July 2024, Anaheim, California, Invited panel speaker',
    },
    {
      id: "talk-2024-05-itherm-ai",
      date: "05/2024",
      text:
        '"Artificial Intelligence: Industry use cases and investment trends" IEEE ITHERM 2024, May 2024, Denver, Colorado, Invited panel speaker',
    },
    {
      id: "talk-2023-10-interpack-panel",
      date: "10/2023",
      text:
        '"Thermal Science, Engineering, and Management: AI and Machine Learning Perspectives," ASME InterPACK 2023, Oct 2023, San Diego, California, Panel moderator',
    },
    {
      id: "talk-2023-07-us-japan-seminar",
      date: "07/2023",
      text:
        '"Accelerating Thermal Science with AI," 10th US-Japan Joint Seminar on Nanoscale Transport Phenomena, July 2023, San Diego, California, USA, Invited speaker',
    },
    {
      id: "talk-2023-06-itherm-ai",
      date: "06/2023",
      text:
        '"Artificial Intelligence: Industry use cases and investment trends" IEEE ITHERM 2023, June 2023, Orlando, Florida, Panel speaker',
    },
    {
      id: "talk-2023-03-astfe",
      date: "03/2023",
      text:
        '"Artificial Intelligence for Two Phase Heat Transfer," 8TH American Society of Thermal Fluids Engineering Conference, March 2023, College Park, Maryland, TEC talk, Invited talk speaker',
    },
    {
      id: "talk-2023-01-grc",
      date: "01/2023",
      text:
        '"Learning Thermal Energy Science via Artificial Intelligent Techniques," Gordon Research Conference, Jan 2023, Italy, Invited speaker',
    },
    {
      id: "talk-2022-08-nise",
      date: "08/2022",
      text:
        '"Advancing Thermal Energy Science on Bio-inspired Nanostructures via Artificial Intelligent Technologies," Nature Inspired Surface Engineering (NISE 2022), Aug 2022, Invited keynote speaker',
    },
    {
      id: "talk-2022-04-snu-alumni",
      date: "04/2022",
      text:
        '"The convergence of phase change phenomena, data, and art," April 2022. Seoul National University Alumni Forum, Hosted by Prof. Thomas Han.',
    },
    {
      id: "talk-2021-12-mrs-fall",
      date: "12/2021",
      text:
        '"The design of porous materials through machine learning algorithms," MRS Fall meeting, Dec 2021, Keynote speaker',
    },
    {
      id: "talk-2021-10-interpack-nanomaterials",
      date: "10/2021",
      text:
        '"Issues, challenges, and future opportunities for nanomaterials integration into large systems," ASME InterPACK 2021, Oct 2021, Panel Moderator',
    },
    {
      id: "talk-2021-10-mtas-ai-innovations",
      date: "10/2021",
      text:
        '"AI innovations, data-centric thinking, and opportunities in thermofluidic topics," mTAS, Oct 2021, Workshop Speaker',
    },
    {
      id: "talk-2021-06-k16-ai-innovations",
      date: "06/2021",
      text:
        '"AI innovations, data-centric thinking, and opportunities in thermofluidic topics," K-16 Hotspot placeholder, June 2021, Invited speaker',
    },
    {
      id: "talk-2021-06-mfip-ai-innovations",
      date: "06/2021",
      text:
        '"AI innovations, data-centric thinking, and opportunities in thermofluidic topics," Micro Flow and Interfacial Phenomena, Virtual Version, June 2021, Keynote speaker',
    },
  ];

    const contentEl = document.getElementById("talk-content");
    const navEl = document.querySelector(".talk-nav");
    const modeEl = document.getElementById("talk-mode");
    if (!contentEl || !modeEl) {
      const missing = [!contentEl ? "#talk-content" : null, !modeEl ? "#talk-mode" : null]
        .filter(Boolean)
        .join(", ");
      if (contentEl) contentEl.textContent = `Talks failed to load (missing: ${missing}).`;
      return;
    }

    function escapeHtml(text) {
      return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

  function parseYear(date) {
    const m = /^\\s*\\d{2}\\/(\\d{4})\\s*$/.exec(String(date || ""));
    return m ? Number(m[1]) : 0;
  }

  function parseMonth(date) {
    const m = /^\\s*(\\d{2})\\/\\d{4}\\s*$/.exec(String(date || ""));
    return m ? Number(m[1]) : 0;
  }

  function normalizeType(type) {
    return String(type || "").trim();
  }

  function extractTitleAndDetails(text) {
    const raw = String(text || "").trim();
    const q = /^[“"]([^”"]+)[”"]\s*,?\s*(.*)$/.exec(raw);
    if (q) return { title: q[1].trim(), details: q[2].trim() };

    const firstComma = raw.indexOf(",");
    if (firstComma === -1) return { title: raw, details: "" };
    return { title: raw.slice(0, firstComma).trim(), details: raw.slice(firstComma + 1).trim() };
  }

  function inferType(text) {
    const t = String(text || "").toLowerCase();
    if (t.includes("keynote")) return "Keynote";
    if (t.includes("panel moderator") || t.includes("moderator")) return "Moderator";
    if (t.includes("panel")) return "Panel";
    if (t.includes("invited")) return "Invited";
    return "Talk";
  }

  function sortByDateDescThenText(a, b) {
    const ay = parseYear(a.date);
    const by = parseYear(b.date);
    if (ay !== by) return by - ay;
    const am = parseMonth(a.date);
    const bm = parseMonth(b.date);
    if (am !== bm) return bm - am;
    return a.text.localeCompare(b.text);
  }

  function sortByDateAscThenText(a, b) {
    const ay = parseYear(a.date);
    const by = parseYear(b.date);
    if (ay !== by) return ay - by;
    const am = parseMonth(a.date);
    const bm = parseMonth(b.date);
    if (am !== bm) return am - bm;
    return a.text.localeCompare(b.text);
  }

  function renderTalkItem(t) {
    const type = normalizeType(t.type) || inferType(t.text);
    const td = extractTitleAndDetails(t.text);
    const details = td.details ? `<div class="talk-details">${escapeHtml(td.details)}</div>` : "";
    return `
      <li id="${escapeHtml(t.id)}">
        <span class="talk-date">${escapeHtml(t.date)}</span>
        <span class="talk-text">
          <div class="talk-title">${escapeHtml(td.title)} <span class="chip">${escapeHtml(type)}</span></div>
          ${details}
        </span>
      </li>
    `;
  }

  function renderSelected() {
    if (navEl) navEl.innerHTML = "";
    const items = talks.slice().sort(sortByDateDescThenText);
    const selected = items.slice(0, 5); // default view = 5 most recent talks
    contentEl.innerHTML = `<ul class="talks">${selected.map(renderTalkItem).join("")}</ul>`;
  }

  function renderAll() {
    if (navEl) navEl.innerHTML = "";
    const items = talks.slice().sort(sortByDateDescThenText);
    contentEl.innerHTML = `<ul class="talks">${items.map(renderTalkItem).join("")}</ul>`;
  }

  function setMode(mode) {
    if (mode === "all") renderAll();
    else renderSelected();

    try {
      const url = new URL(window.location.href);
      url.searchParams.set("talks", mode);
      window.history.replaceState({}, "", url.toString());
    } catch {
      // ignore
    }
  }

  function initialMode() {
    try {
      const url = new URL(window.location.href);
      const mode = url.searchParams.get("talks");
      if (mode === "recent" || mode === "all") return mode;
    } catch {
      // ignore
    }
    return "recent";
  }

    modeEl.addEventListener("change", () => setMode(modeEl.value || "recent"));

    const mode0 = initialMode();
    modeEl.value = mode0;
    setMode(mode0);
  } catch (err) {
    const el = document.getElementById("talk-content");
    if (el) {
      el.textContent =
        "Talks failed to load. Open DevTools Console to see the error.";
    }
    // eslint-disable-next-line no-console
    console.error("Talks failed to load:", err);
  }
})();
