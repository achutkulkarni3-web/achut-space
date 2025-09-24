// Content model - replace with your data
const profile = {
  name: "Achut Kulkarni",
  title: "B.Tech Computer Science Student",
  email: "achutkulkarni3@gmail.com",
  phone: "+916360603175",
  location: "Kalaburagi, Karnataka",
  graduationYear: "2026",
  projectsCompleted: "2+",
  internships: "1+",
  about:
    "B.Tech Computer Science student building interactive, theme-aware web and mobile apps. Passionate about React, Vite, Tailwind CSS, AI-assisted features, and clean, accessible UX.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Java",
    "C",
    "SQL/SQLite",
    "React",
    "React Native",
    "Expo",
    "Zustand",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Docker",
    "Git",
    "GitHub",
    "VS Code",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Streamlit",
    "Mermaid.js",
    "Google GenAI",
  ],
  journey: [
    {
      title: "Pre-University",
      subtitle: "Shree Guru Ind PU College of Science",
      detail: "Completed Pre-University program.",
      year: "2022",
    },
    {
      title: "Bachelor of Technology in CSE",
      subtitle: "Sharnbasva University",
      detail: "Focused on software development, data structures, and modern web.",
      year: "2022–2026",
    },
    {
      title: "Web Development Intern",
      subtitle: "OctaNet Services Pvt Ltd, Bhubaneswar, Odisha",
      detail: "SEO optimization, landing page development with HTML/CSS/JS; collaborated on product descriptions and visuals; improved retention by 30% via a captivating hero section.",
      year: "May 2024 – Jun 2024",
    },
  ],
  projects: [
    {
      title: "Reflexa — AI Powered Mental Health Journal App",
      description:
        "Cross-platform React Native + Expo app with advanced AI features: emotion detection, weekly trend analysis, and multi-factor auth. Improved app stability by 40% and engagement across Android and iOS.",
      tech: ["Expo", "React Native", "Zustand", "React", "Lucide React"],
      highlights: [
        "Increased app stability by ~40% across platforms.",
        "Enhanced user engagement via seamless cross-platform experience.",
        "NLP-based emotion detection and weekly emotional trend analysis.",
        "Multi-factor authentication: biometric, face recognition, and PIN.",
      ],
      demo: "#",
      repo: "#",
    },
    {
      title: "ThinkFlow AI — Intelligent Diagram Generator",
      description:
        "Web app that converts natural language to interactive flow diagrams using Mermaid.js and Google Gemini API; reduced diagram creation time by ~40% for diverse users.",
      tech: ["React", "Vite", "Tailwind CSS", "Mermaid.js", "Google GenAI"],
      highlights: [
        "Natural language to diagram generation with Mermaid.js.",
        "Integrated Google Gemini API for AI-assisted parsing.",
        "~40% reduction in time to create clear flow diagrams.",
      ],
      demo: "#",
      repo: "#",
    },
  ],
};

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function renderProfile() {
  document.title = `${profile.name} | Portfolio`;
  setText("year", new Date().getFullYear());
  document.querySelector(".firstname").textContent = profile.name;
  setText("about-text", profile.about);
  setText("grad-year", profile.graduationYear);
  setText("project-count", profile.projectsCompleted);
  setText("internship-count", profile.internships);
  setText("location", profile.location);
  setText("contact-location", profile.location);
  const email = document.getElementById("email");
  const contactEmail = document.getElementById("contact-email");
  const phone = document.getElementById("phone");
  const contactPhone = document.getElementById("contact-phone");
  if (email) { email.textContent = profile.email; email.href = `mailto:${profile.email}`; }
  if (contactEmail) { contactEmail.textContent = profile.email; contactEmail.href = `mailto:${profile.email}`; }
  if (phone) { phone.textContent = profile.phone; phone.href = `tel:${profile.phone}`; }
  if (contactPhone) { contactPhone.textContent = profile.phone; contactPhone.href = `tel:${profile.phone}`; }
}

function renderJourney() {
  const wrap = document.getElementById("timeline");
  if (!wrap) return;
  wrap.innerHTML = "";
  profile.journey.forEach((item) => {
    const block = document.createElement("div");
    block.className = "timeline-item";
    block.innerHTML = `
      <span class="timeline-bullet"></span>
      <h3 class="timeline-title">${item.year} · ${item.title}</h3>
      <p class="timeline-sub">${item.subtitle}</p>
      <p class="subtitle">${item.detail}</p>
    `;
    wrap.appendChild(block);
  });
}

function renderSkills() {
  const grid = document.getElementById("skill-grid");
  if (!grid) return;
  grid.innerHTML = "";
  profile.skills.forEach((s) => {
    const li = document.createElement("li");
    li.className = "skill";
    li.innerHTML = `<strong>${s}</strong>`;
    grid.appendChild(li);
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = "";
  profile.projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";
    const techBadges = p.tech.map((t) => `<span class="badge">${t}</span>`).join("");
    const highlights = Array.isArray(p.highlights) && p.highlights.length
      ? `<ul class="project-highlights">${p.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>`
      : "";
    card.innerHTML = `
      <div class="project-thumb"></div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        ${highlights}
        <div class="badge-row">${techBadges}</div>
        <div class="card-actions">
          <a class="btn" href="${p.demo}" target="_blank" rel="noreferrer noopener">Live Demo</a>
          <a class="btn ghost" href="${p.repo}" target="_blank" rel="noreferrer noopener">GitHub</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function navSetup() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("primary-menu");
  toggle?.addEventListener("click", () => {
    const open = menu?.classList.toggle("open");
    if (toggle) toggle.setAttribute("aria-expanded", String(Boolean(open)));
  });
  document.querySelectorAll('.nav a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("href");
      const target = id ? document.querySelector(id) : null;
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      menu?.classList.remove("open");
    });
  });
}

function toTopSetup() {
  const btn = document.getElementById("to-top");
  const handler = () => {
    if (!btn) return;
    btn.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", handler, { passive: true });
  btn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function contactFormSetup() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form || !status) return;
    const data = Object.fromEntries(new FormData(form));
    if (!data.name || !data.email) {
      status.textContent = "Please fill in name and email.";
      status.style.color = "var(--danger)";
      return;
    }
    status.textContent = "Message queued (demo).";
    status.style.color = "var(--success)";
    form.reset();
  });
}

// Space Assistant + Easter eggs
const EASTER = {
  rocket: "Ignition sequence start. Lifting off to your goals! 🚀",
  star: "Shooting star spotted! Keep wishing, keep building. ✨",
  alien: "👽 Friendly visitor detected. They love clean code, too!",
  moon: "Aim for the moon. Even if you miss, refactor among stars.",
  galaxy: "Your skills form a beautiful galaxy of possibilities.",
};

function assistantSetup() {
  const toggle = document.getElementById("assistant-toggle");
  const panel = document.getElementById("assistant-panel");
  const form = document.getElementById("assistant-form");
  const input = document.getElementById("assistant-query");
  const log = document.getElementById("assistant-messages");

  function post(role, text) {
    if (!log) return;
    const div = document.createElement("div");
    div.className = `msg ${role}`;
    div.textContent = text;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  }

  toggle?.addEventListener("click", () => {
    const isHidden = panel?.hasAttribute("hidden");
    if (!panel) return;
    if (isHidden) {
      panel.removeAttribute("hidden");
      toggle?.setAttribute("aria-expanded", "true");
      if (log && !log.dataset.boot) {
        post("bot", "Hello! I'm your space assistant. Ask about skills, projects, or contact info!");
        log.dataset.boot = "1";
      }
    } else {
      panel.setAttribute("hidden", "");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });

  function answer(q) {
    const s = q.toLowerCase();
    if (EASTER[s]) return EASTER[s];
    if (s.includes("skill")) return `Top skills: ${profile.skills.slice(0, 6).join(", ")}, and more.`;
    if (s.includes("project")) return `I have ${profile.projects.length} highlighted projects. Check the Projects section.`;
    if (s.includes("email") || s.includes("contact")) return `Email: ${profile.email}, Phone: ${profile.phone}`;
    if (s.includes("journey") || s.includes("timeline") || s.includes("education")) return `Recent milestone: ${profile.journey[0]?.year} - ${profile.journey[0]?.title}.`;
    return "I can tell you about skills, projects, contact info, and more. Try 'rocket' 🚀";
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input?.value?.trim();
    if (!q) return;
    post("user", q);
    setTimeout(() => post("bot", answer(q)), 300);
    if (input) input.value = "";
  });

  // Global easter egg via typing anywhere
  let buffer = "";
  window.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const ch = e.key.length === 1 ? e.key.toLowerCase() : "";
    if (!ch) return;
    buffer = (buffer + ch).slice(-10);
    for (const key of Object.keys(EASTER)) {
      if (buffer.endsWith(key)) {
        toggle?.click();
        post("bot", EASTER[key]);
        buffer = "";
        break;
      }
    }
  });
}

function downloadCVSetup() {
  const a = document.getElementById("download-cv");
  if (!a) return;
  const blob = new Blob([
    `Achut Kulkarni\nResume Snapshot\n\nEmail: achutkulkarni3@gmail.com\nPhone: +916360603175\nLocation: Kalaburagi, Karnataka\n\nSummary: B.Tech CSE student building interactive, theme-aware apps with React, Vite, Tailwind, and AI-assisted features.\n`,
  ], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = "Achut-Kulkarni-Resume.txt";
}

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderJourney();
  renderSkills();
  renderProjects();
  navSetup();
  toTopSetup();
  contactFormSetup();
  assistantSetup();
  downloadCVSetup();
});


