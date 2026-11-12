(function () {
  "use strict";

  const body = document.body;
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const themeToggle = document.querySelector(".theme-toggle");
  const projectGrid = document.getElementById("project-grid");
  const modalBackdrop = document.getElementById("project-modal");
  const modal = modalBackdrop.querySelector(".project-modal");
  const modalClose = modalBackdrop.querySelector(".modal-close");
  const modalBack = modalBackdrop.querySelector(".modal-back-button");
  const modalTitle = document.getElementById("modal-title");
  const modalCategory = document.getElementById("modal-category");
  const modalTags = document.getElementById("modal-tags");
  const modalDescription = document.getElementById("modal-description");
  const modalFeatures = document.getElementById("modal-features");
  const modalFeatureLabel = document.getElementById("modal-feature-label");
  const modalProjectLink = document.getElementById("modal-project-link");
  let lastFocusedElement = null;

  // Current year is kept automatic so the footer does not need annual edits.
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // Mobile navigation.
  function closeNav() {
    navToggle.classList.remove("is-open");
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  }

  navToggle.addEventListener("click", function () {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navToggle.classList.toggle("is-open", !isOpen);
    navMenu.classList.toggle("is-open", !isOpen);
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) closeNav();
  });

  // Optional light theme. The dark field-inspired theme remains the default.
  themeToggle.addEventListener("click", function () {
    const isLight = body.classList.toggle("theme-light");
    themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    themeToggle.setAttribute("title", isLight ? "Switch to dark theme" : "Switch to light theme");
  });

  // Project cards are rendered from data.js to keep content easy to maintain.
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char];
    });
  }

  function projectCard(project) {
    return `
      <article class="work-card">
        <button class="work-card-button" type="button" data-project-id="${escapeHTML(project.id)}" aria-label="Open details for ${escapeHTML(project.title)}">
          <div class="work-card-visual ${escapeHTML(project.visual)}" aria-hidden="true">
            ${project.visual === "visual-flare" ? '<span class="flare-orbit"></span><span class="flare-sun"></span><span class="flare-rig"></span><span class="visual-caption">FIELD / ENERGY SYSTEMS</span>' : ""}
            ${project.visual === "visual-reservoir" ? '<span class="contour contour-one"></span><span class="contour contour-two"></span><span class="contour contour-three"></span><span class="visual-caption">SUBSURFACE / RESERVOIR</span>' : ""}
            ${project.visual === "visual-logs" ? '<span class="log-track log-a"></span><span class="log-track log-b"></span><span class="log-track log-c"></span><span class="visual-caption">FORMATION / LOG RESPONSE</span>' : ""}
            ${project.visual === "visual-community" ? '<span class="community-orbit orbit-a"></span><span class="community-orbit orbit-b"></span><span class="community-center">OSKM</span><span class="visual-caption">STUDENT INITIATIVE</span>' : ""}
            ${project.visual === "visual-leadership" ? '<span class="leadership-lines"></span><span class="leadership-monogram">KM</span><span class="visual-caption">LEADERSHIP / COMMUNITY</span>' : ""}
            ${project.visual === "visual-parking" ? '<span class="parking-floor"></span><span class="parking-bay bay-one"></span><span class="parking-bay bay-two"></span><span class="parking-bay bay-three"></span><span class="parking-vehicle vehicle-one"></span><span class="parking-vehicle vehicle-two"></span><span class="visual-caption">PARKING / MANAGEMENT</span>' : ""}
            ${project.visual === "visual-mining" ? '<span class="mine-strata strata-one"></span><span class="mine-strata strata-two"></span><span class="mine-tunnel"></span><span class="mine-light"></span><span class="visual-caption">MINING / SAFETY SYSTEMS</span>' : ""}
            ${project.visual === "visual-pvt" ? '<span class="pvt-grid"></span><svg class="pvt-visual-plot" viewBox="0 0 520 190" xmlns="http://www.w3.org/2000/svg"><path d="M28 150 H494 M28 24 V150" fill="none" stroke="rgba(212,226,237,.28)" stroke-width="1"/><path d="M28 132 C95 126 130 113 180 82 S270 31 330 42 S425 55 494 22" fill="none" stroke="#dba643" stroke-width="3"/><path d="M28 36 C100 50 145 72 205 92 S330 122 494 136" fill="none" stroke="#9dbed7" stroke-width="2.5"/><path d="M300 24 V150" fill="none" stroke="rgba(251,113,133,.8)" stroke-width="1.5" stroke-dasharray="5 5"/></svg><span class="visual-caption">RESERVOIR / PVT ANALYSIS</span>' : ""}
            <span class="work-card-number">${escapeHTML(project.number)}</span>
          </div>
          <div class="work-card-content">
            <div class="work-card-meta"><span>${escapeHTML(project.type)}</span><span class="work-card-status">${escapeHTML(project.status)}</span></div>
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.short)}</p>
            <span class="work-card-action">View details <b aria-hidden="true">↗</b></span>
          </div>
        </button>
      </article>`;
  }

  const projects = window.portfolioData && Array.isArray(window.portfolioData.projects)
    ? window.portfolioData.projects
    : [];
  projectGrid.innerHTML = projects.map(projectCard).join("");

  // Detail modal: Escape, backdrop click, close button, and focus restoration are supported.
  function openProject(projectId, trigger) {
    const project = projects.find(function (item) { return item.id === projectId; });
    if (!project) return;

    lastFocusedElement = trigger || document.activeElement;
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.type;
    modalDescription.textContent = project.description;
    modalFeatureLabel.textContent = project.featureLabel || "KEY INSIGHTS";
    modalTags.innerHTML = (project.tags || []).map(function (tag) {
      return `<span class="modal-tag">${escapeHTML(tag)}</span>`;
    }).join("");
    modalFeatures.innerHTML = (project.features || []).map(function (feature) {
      return `<li><span class="feature-arrow" aria-hidden="true">→</span><span>${escapeHTML(feature)}</span></li>`;
    }).join("");

    if (project.url) {
      modalProjectLink.href = project.url;
      modalProjectLink.target = "_blank";
      modalProjectLink.rel = "noopener noreferrer";
      modalProjectLink.innerHTML = `${escapeHTML(project.linkLabel || "Explore project")} <span aria-hidden="true">↗</span>`;
      modalProjectLink.classList.remove("is-disabled");
      modalProjectLink.removeAttribute("aria-disabled");
    } else {
      const subject = encodeURIComponent("Project inquiry — " + project.title);
      modalProjectLink.href = `mailto:cpfarhannugraha@gmail.com?subject=${subject}`;
      modalProjectLink.target = "_self";
      modalProjectLink.rel = "";
      modalProjectLink.innerHTML = `${escapeHTML(project.linkLabel || "Discuss this project")} <span aria-hidden="true">↗</span>`;
      modalProjectLink.classList.remove("is-disabled");
      modalProjectLink.removeAttribute("aria-disabled");
    }

    modalBackdrop.classList.add("is-open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
    window.setTimeout(function () { modalClose.focus(); }, 30);
  }

  function closeProject() {
    if (!modalBackdrop.classList.contains("is-open")) return;
    modalBackdrop.classList.remove("is-open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
  }

  projectGrid.addEventListener("click", function (event) {
    const trigger = event.target.closest("[data-project-id]");
    if (trigger) openProject(trigger.dataset.projectId, trigger);
  });
  modalClose.addEventListener("click", closeProject);
  modalBack.addEventListener("click", closeProject);
  modalBackdrop.addEventListener("click", function (event) {
    if (event.target === modalBackdrop) closeProject();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeProject();
      closeNav();
    }
    if (event.key === "Tab" && modalBackdrop.classList.contains("is-open")) {
      const focusable = [...modal.querySelectorAll('a[href], button:not([disabled])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
  });

  // Active section highlighting and reveal-on-scroll.
  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const active = navLinks.find(function (link) { return link.getAttribute("href") === "#" + entry.target.id; });
          if (active) {
            navLinks.forEach(function (link) { link.classList.toggle("is-active", link === active); });
          }
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    sections.forEach(function (section) { sectionObserver.observe(section); });

    const revealItems = document.querySelectorAll(".section-heading, .focus-card, .timeline-item, .toolkit-row, .about-photo-wrap, .about-content, .work-card");
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) {
      item.classList.add("reveal-ready");
      revealObserver.observe(item);
    });
  }
})();

lucide.createIcons();
