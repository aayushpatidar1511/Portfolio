/**
 * AAYUSH PATIDAR — PORTFOLIO MAIN APPLICATION CONTROLLER
 */

(function () {
  'use strict';

  // --- 1. SKILLS DATA ---
  const SKILLS_DATA = [
    // Languages
    { name: 'TypeScript', category: 'languages', level: 92, icon: 'code-2', desc: 'Type-safe scalable systems' },
    { name: 'JavaScript (ES6+)', category: 'languages', level: 95, icon: 'file-code', desc: 'Modern async & event loop' },
    { name: 'Python', category: 'languages', level: 90, icon: 'terminal', desc: 'Django REST, ML & Scripting' },
    { name: 'Java (Java 17)', category: 'languages', level: 88, icon: 'coffee', desc: 'Spring Boot 3.3, OOPs, Streams' },
    { name: 'C++', category: 'languages', level: 85, icon: 'cpu', desc: 'DSA & Performance Optimization' },
    { name: 'SQL', category: 'languages', level: 90, icon: 'database', desc: 'Complex Joins, 3NF, Indexing' },
    { name: 'HTML5 & CSS3', category: 'languages', level: 95, icon: 'layout', desc: 'Modern responsive & accessible UI' },

    // Frameworks & Libraries
    { name: 'Next.js 15', category: 'frameworks', level: 92, icon: 'layers', desc: 'App Router, SSR, Turbopack' },
    { name: 'React 19', category: 'frameworks', level: 94, icon: 'atom', desc: 'Hooks, Server Actions, Context' },
    { name: 'Django REST', category: 'frameworks', level: 90, icon: 'server', desc: 'Stateless JWT, Serializers, RBAC' },
    { name: 'Spring Boot 3.3', category: 'frameworks', level: 88, icon: 'box', desc: 'Spring Security, REST, Hibernate' },
    { name: 'Spring Security', category: 'frameworks', level: 86, icon: 'shield-check', desc: 'JJWT Auth, Filter Chains' },
    { name: 'Celery & Redis', category: 'frameworks', level: 88, icon: 'clock', desc: 'Async workers & message broker' },
    { name: 'Scikit-Learn', category: 'frameworks', level: 82, icon: 'sparkles', desc: 'NLP, ML Triage & Classification' },

    // Databases & Storage
    { name: 'PostgreSQL & PostGIS', category: 'databases', level: 92, icon: 'map-pin', desc: 'Spatial queries, Radius detection' },
    { name: 'MySQL 8.0 (3NF/ACID)', category: 'databases', level: 90, icon: 'database', desc: 'Stored procedures & triggers' },
    { name: 'Redis', category: 'databases', level: 88, icon: 'zap', desc: 'In-memory caching & queues' },
    { name: 'Supabase', category: 'databases', level: 88, icon: 'cloud', desc: 'Managed Postgres & Auth' },
    { name: 'Aiven Cloud', category: 'databases', level: 85, icon: 'hard-drive', desc: 'Cloud database clusters' },

    // Tools & DevOps & Cloud
    { name: 'Docker & Compose', category: 'devops', level: 90, icon: 'container', desc: 'Containerization & Multi-stage' },
    { name: 'Git & GitHub', category: 'devops', level: 95, icon: 'git-branch', desc: 'CI/CD, Workflows & Versioning' },
    { name: 'Postman', category: 'devops', level: 92, icon: 'send', desc: 'API testing & automated suites' },
    { name: 'Vercel & Render', category: 'devops', level: 90, icon: 'cloud-lightning', desc: 'Edge frontend & cloud backend' },
    { name: 'Leaflet GIS', category: 'devops', level: 88, icon: 'map', desc: 'Interactive coordinate mapping' },
    { name: 'Linux / Bash', category: 'devops', level: 88, icon: 'terminal', desc: 'Shell scripting & server ops' },

    // Core Competencies
    { name: 'Data Structures & Algorithms', category: 'competencies', level: 92, icon: 'git-merge', desc: 'Problem solving & optimization' },
    { name: 'OOPs Architecture', category: 'competencies', level: 94, icon: 'component', desc: 'SOLID principles & design patterns' },
    { name: 'RESTful API Engineering', category: 'competencies', level: 95, icon: 'network', desc: 'Scalable endpoints & JWT auth' },
    { name: 'Database Indexing & 3NF', category: 'competencies', level: 90, icon: 'table', desc: 'B-Tree indexing & ACID compliance' },
    { name: 'Geospatial Querying', category: 'competencies', level: 90, icon: 'compass', desc: 'Haversine & PostGIS spatial analytics' },
    { name: 'ML Automated Triage', category: 'competencies', level: 85, icon: 'bot', desc: 'NLP priority classification' }
  ];

  // --- 2. PROJECTS DATA ---
  const PROJECTS_DATA = {
    civifix: {
      id: 'civifix',
      title: 'CiviFix — Smart Municipal Civic Grievance & AI Operations Platform',
      tagline: 'Enterprise Full-Stack Platform with Geospatial Intelligence & ML Triage',
      badge: 'Full Stack + Geospatial + AI',
      image: 'assets/images/civifix.jpg',
      githubUrl: 'https://github.com/aayushpatidar1511',
      liveUrl: 'https://github.com/aayushpatidar1511',
      summary: 'An enterprise-grade civic grievance platform engineering a seamless bridge between citizens and municipal authorities, featuring automated AI priority assignment and real-time GIS mapping.',
      tags: ['Next.js 15', 'React 19', 'TypeScript', 'Django REST', 'PostgreSQL', 'PostGIS', 'Celery', 'Redis', 'Docker', 'Vercel', 'Supabase'],
      highlights: [
        'Role-Based Architecture: 4 role-based portals (Citizen, Field Worker, Department Officer, City Admin) secured with stateless JWT auth & granular RBAC permissions.',
        'Geospatial Intelligence & PostGIS: Integrated PostgreSQL/PostGIS with Leaflet GIS maps for coordinate-based issue plotting, radius duplicate detection, and live city ward heatmaps.',
        'AI Triage & Async Pipelines: Developed an ML triage pipeline using Scikit-Learn/NLP for automated priority classification, paired with Celery & Redis background workers for SLA breach monitoring and triggers.',
        'Cloud Deployment: Containerized with Docker, deployed Next.js frontend on Vercel, RESTful backend on Render (Gunicorn/WhiteNoise), and spatial database on Supabase.'
      ],
      metrics: [
        { label: 'Role Portals', val: '4 Dedicated' },
        { label: 'Map Engine', val: 'Leaflet + PostGIS' },
        { label: 'AI Pipeline', val: 'NLP Triage' },
        { label: 'Worker Queue', val: 'Celery + Redis' }
      ]
    },

    fixmate: {
      id: 'fixmate',
      title: 'FixMate — Local Service Booking & Management Platform',
      tagline: 'High-Performance Production-Ready Marketplace with Smart Geo-Search',
      badge: 'Java Spring Boot + MySQL + Cloud',
      image: 'assets/images/fixmate.jpg',
      githubUrl: 'https://github.com/aayushpatidar1511',
      liveUrl: 'https://github.com/aayushpatidar1511',
      summary: 'A high-throughput local service marketplace engineered with robust Spring Boot backend, optimized 3NF relational schema, and mathematical geo-distance algorithms for booking services across multiple cities.',
      tags: ['Java 17', 'Spring Boot 3.3', 'Spring Security', 'JJWT', 'MySQL 8.0', 'Vanilla JS', 'Docker', 'Render', 'Glassmorphism UI'],
      highlights: [
        'Multi-Role Marketplace Architecture: Built a production-ready marketplace platform featuring role-based dashboards (Customer, Service Pro, Admin) with stateless JWT authentication & BCrypt password encryption.',
        'Smart Geo-Search & Scheduling: Implemented location-based service discovery using the Haversine formula across cities (Ujjain, Indore, Bhopal) with dynamic, collision-free slot booking.',
        'High-Performance Relational Schema: Architected 17 normalized (3NF) relational tables in MySQL with composite B-Tree indexing, ACID stored procedures for dispute handling, and audit triggers.',
        'Job Lifecycle & Cloud Deployment: Built a 5-step checkout workflow with transparent pricing, live job tracking (PENDING → COMPLETED), and wallet ledger; containerized with Docker and deployed on Render.'
      ],
      metrics: [
        { label: 'DB Schema', val: '17 3NF Tables' },
        { label: 'Geo Search', val: 'Haversine Calc' },
        { label: 'Checkout', val: '5-Step Lifecycle' },
        { label: 'Security', val: 'JJWT & BCrypt' }
      ]
    }
  };

  // --- 3. DYNAMIC TYPEWRITER ---
  const TYPEWRITER_ROLES = [
    'Full Stack Developer',
    'Next.js 15 & React 19 Engineer',
    'Python (Django REST) Architect',
    'Java (Spring Boot 3.3) Specialist',
    'PostgreSQL / PostGIS & Redis Builder',
    'Docker & Cloud Deployment Engineer'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typewriterElement = document.getElementById('typewriter-target');

  function typeRole() {
    if (!typewriterElement) return;

    const currentRole = TYPEWRITER_ROLES[roleIdx];

    if (isDeleting) {
      charIdx--;
      typewriterElement.textContent = currentRole.substring(0, charIdx);
    } else {
      charIdx++;
      typewriterElement.textContent = currentRole.substring(0, charIdx);
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentRole.length) {
      typeSpeed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % TYPEWRITER_ROLES.length;
      typeSpeed = 400;
    }

    setTimeout(typeRole, typeSpeed);
  }

  // --- 4. RENDER SKILLS GRID ---
  function renderSkills(category = 'all') {
    const grid = document.getElementById('skills-grid-target');
    if (!grid) return;

    const filtered = category === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === category);

    grid.innerHTML = filtered.map((skill) => `
      <div class="skill-card reveal active" data-category="${skill.category}">
        <div class="skill-header">
          <div class="skill-icon-wrap">
            <i data-lucide="${skill.icon}"></i>
          </div>
          <span class="skill-category-tag">${formatCategory(skill.category)}</span>
        </div>
        <div>
          <h4 class="skill-name">${skill.name}</h4>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px;">${skill.desc}</p>
        </div>
        <div class="skill-level-bar">
          <div class="skill-progress" style="width: ${skill.level}%"></div>
        </div>
        <div class="skill-footer-tags">
          <span>Proficiency</span>
          <strong style="color: var(--accent-cyan-bright); font-family: var(--font-mono);">${skill.level}%</strong>
        </div>
      </div>
    `).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function formatCategory(cat) {
    switch (cat) {
      case 'languages': return 'Language';
      case 'frameworks': return 'Framework';
      case 'databases': return 'Database';
      case 'devops': return 'Cloud & DevOps';
      case 'competencies': return 'Core Concept';
      default: return 'Skill';
    }
  }

  function setupSkillFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filterCategory = btn.getAttribute('data-filter');
        renderSkills(filterCategory);
        if (window.SoundFX && window.SoundFX.isEnabled()) {
          window.SoundFX.click();
        }
      });
    });
  }

  // --- 5. PROJECT DETAIL MODALS ---
  function setupProjectModals() {
    const modalOverlay = document.getElementById('project-detail-modal');
    const modalBody = document.getElementById('project-modal-body');
    const modalCloseBtn = document.getElementById('project-modal-close-btn');

    window.openProjectModal = function (projectId) {
      const project = PROJECTS_DATA[projectId];
      if (!project || !modalBody || !modalOverlay) return;

      modalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
            <span class="greeting-pill">${project.badge}</span>
            <div style="display: flex; gap: 10px;">
              <a href="${project.githubUrl}" target="_blank" class="btn btn-outline" style="padding: 6px 14px; font-size: 0.85rem;">
                <i data-lucide="github"></i> View Repository
              </a>
            </div>
          </div>

          <h2 style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; line-height: 1.2;">
            ${project.title}
          </h2>

          <div style="border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-glass);">
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 320px; object-fit: cover;" />
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px;">
            ${project.metrics.map(m => `
              <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-glass); padding: 12px; border-radius: var(--radius-md); text-align: center;">
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">${m.label}</div>
                <div style="font-size: 1.05rem; font-weight: 700; color: var(--accent-cyan-bright); font-family: var(--font-mono); margin-top: 4px;">${m.val}</div>
              </div>
            `).join('')}
          </div>

          <div>
            <h4 style="font-family: var(--font-heading); font-size: 1.15rem; margin-bottom: 12px; color: var(--text-primary);">
              Architectural Highlights & Engineering Impact
            </h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${project.highlights.map(h => `
                <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.92rem; color: var(--text-secondary);">
                  <i data-lucide="check-circle-2" style="color: var(--accent-cyan-bright); flex-shrink: 0; margin-top: 3px;"></i>
                  <span>${h}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-bottom: 10px; color: var(--text-primary);">
              Technology Stack
            </h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${project.tags.map(t => `<span class="tech-tag" style="background: rgba(6, 182, 212, 0.08); border-color: rgba(6, 182, 212, 0.25); color: var(--accent-cyan-bright);">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;

      modalOverlay.classList.add('active');
      if (window.lucide) window.lucide.createIcons();
      if (window.SoundFX && window.SoundFX.isEnabled()) window.SoundFX.click();
    };

    function closeModal() {
      if (modalOverlay) modalOverlay.classList.remove('active');
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
      });
    }
  }

  // --- 6. TOAST NOTIFICATIONS & CLIPBOARD ---
  window.showToast = function (message, iconName = 'check') {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="${iconName}"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);

    if (window.lucide) window.lucide.createIcons();
    if (window.SoundFX && window.SoundFX.isEnabled()) window.SoundFX.success();

    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  window.copyToClipboard = function (text, label) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        window.showToast(`Copied ${label} to clipboard!`, 'copy');
      }).catch(() => {
        window.showToast(`Failed to copy ${label}`, 'alert-circle');
      });
    } else {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      window.showToast(`Copied ${label} to clipboard!`, 'copy');
    }
  };

  // --- 7. INTERACTIVE CONTACT FORM WITH CONFETTI ---
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        window.showToast('Please fill all fields.', 'alert-circle');
        return;
      }

      // Trigger Confetti Celebration if library loaded
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.7 }
        });
      }

      window.showToast(`Thank you, ${name}! Your message was dispatched directly.`, 'check-circle');

      // Prepare mailto link trigger as backup
      const mailtoUrl = `mailto:aayushmahendrapatidar@gmail.com?subject=Contact from Portfolio - ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      form.reset();

      // Offer opening default email client
      setTimeout(() => {
        if (confirm('Would you also like to open your default email app to send directly?')) {
          window.location.href = mailtoUrl;
        }
      }, 600);
    });
  }

  // --- 8. SMOOTH SCROLLSPY & HEADER BACKGROUND ---
  function setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (header) {
        if (scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      // ScrollSpy
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { passive: true });
  }

  // --- 9. MOBILE DRAWER NAVIGATION ---
  function setupMobileDrawer() {
    const toggleBtn = document.getElementById('mobile-toggle-btn');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-drawer-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    function openDrawer() {
      if (drawer) drawer.classList.add('open');
      if (overlay) overlay.classList.add('open');
    }

    function closeDrawer() {
      if (drawer) drawer.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);
    mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));
  }

  // --- 10. SCROLL REVEAL OBSERVER ---
  function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // --- 11. CURSOR GLOW PARALLAX ---
  function setupCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow || window.innerWidth < 1024) return;

    window.addEventListener('pointermove', (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    }, { passive: true });
  }

  // --- 12. INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    typeRole();
    renderSkills('all');
    setupSkillFilters();
    setupProjectModals();
    setupContactForm();
    setupHeaderScroll();
    setupMobileDrawer();
    setupScrollReveal();
    setupCursorGlow();

    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

})();
