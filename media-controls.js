/* Minimal client-side media view toggles (no build step). */
(function () {
  function setMediaMode(mode, opts) {
    const selectedView = document.getElementById("media-recent");
    const allView = document.getElementById("media-all");
    if (!selectedView || !allView) return;

    const buttons = Array.from(document.querySelectorAll(".media-toggle"));
    for (const btn of buttons) {
      const isActive = btn.dataset.mode === mode;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    if (mode === "all") {
      selectedView.hidden = true;
      allView.hidden = false;
    } else {
      allView.hidden = true;
      selectedView.hidden = false;
    }

    if (opts && opts.updateHash) {
      const next = mode === "all" ? "#media-all" : "#media-recent";
      if (typeof history !== "undefined" && history.replaceState) {
        history.replaceState(null, "", next);
      } else {
        location.hash = next;
      }
    }
  }

  document.addEventListener("click", (e) => {
    const btn = e.target && e.target.closest ? e.target.closest(".media-toggle") : null;
    if (!btn) return;
    e.preventDefault();
    setMediaMode(btn.dataset.mode || "selected", { updateHash: true });
  });

  // Initial mode from hash.
  const initial =
    typeof location !== "undefined" && location.hash === "#media-all" ? "all" : "selected";
  setMediaMode(initial, { updateHash: false });
})();

