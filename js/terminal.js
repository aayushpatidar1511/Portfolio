/**
 * AAYUSH PATIDAR — DEVELOPER CLI TERMINAL CONTROLLER
 */

(function () {
  'use strict';

  const terminalOverlay = document.getElementById('terminal-modal');
  const terminalInput = document.getElementById('terminal-cmd-input');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalCloseBtn = document.getElementById('terminal-close-btn');
  const terminalTriggerBtn = document.getElementById('terminal-trigger-btn');
  const heroTerminalBtn = document.getElementById('hero-terminal-btn');

  let commandHistory = [];
  let historyIndex = -1;

  const COMMANDS = {
    help: () => `
Available Commands:
  <span class="cmd-badge">about</span>       - Print professional summary & background
  <span class="cmd-badge">skills</span>      - List technical stack & proficiencies
  <span class="cmd-badge">projects</span>    - Summary of production projects
  <span class="cmd-badge">civifix</span>     - Deep dive into CiviFix platform architecture
  <span class="cmd-badge">fixmate</span>     - Deep dive into FixMate marketplace architecture
  <span class="cmd-badge">education</span>   - University, degree, & school milestones
  <span class="cmd-badge">contact</span>     - Display direct email, phone, and socials
  <span class="cmd-badge">sudo hire</span>   - Fast-track interview & hiring channel
  <span class="cmd-badge">matrix</span>      - Toggle cyber visual effect
  <span class="cmd-badge">clear</span>       - Clear console output
  <span class="cmd-badge">exit</span>        - Close terminal
`,

    about: () => `
<span class="response-highlight">AAYUSH PATIDAR — Full Stack Developer</span>
Indore, Madhya Pradesh, India

Results-oriented Full Stack Developer with strong expertise in engineering scalable
web platforms using Next.js 15, React 19, TypeScript, Python (Django REST), and Java (Spring Boot 3.3).
Proven track record in designing spatial & normalized relational databases (PostgreSQL/PostGIS, MySQL, Redis),
architecting secure REST APIs with JWT & RBAC, and deploying containerized applications with Docker.
`,

    whoami: () => COMMANDS.about(),

    skills: () => `
<span class="response-highlight">=== TECHNICAL SKILLS MATRIX ===</span>

• <span class="response-success">Languages:</span> TypeScript, JavaScript (ES6+), Python, Java (Java 17), C++, SQL, HTML5, CSS3
• <span class="response-success">Frameworks:</span> Next.js 15, React 19, Django REST Framework, Spring Boot 3.3, Spring Security, Celery, Scikit-Learn
• <span class="response-success">Databases:</span> PostgreSQL, PostGIS, MySQL 8.0 (3NF/ACID), Redis (In-Memory / Queue), Supabase, Aiven Cloud
• <span class="response-success">DevOps & Cloud:</span> Docker, Docker Compose, Git, GitHub, Postman, Vercel, Render, Leaflet GIS, Linux / Bash
• <span class="response-success">Competencies:</span> DSA, OOPs, RESTful APIs, Database Design & Indexing, Geospatial Querying, ML Triage
`,

    projects: () => `
<span class="response-highlight">=== FEATURED PRODUCTION PROJECTS ===</span>

1. <span class="response-highlight">CiviFix</span> (Next.js 15 + Django REST + PostGIS + Celery + Docker)
   Smart Municipal Civic Grievance & AI Operations Platform with 4 role-based portals,
   spatial heatmaps, ML triage pipeline, and SLA breach monitors.
   Type '<span class="cmd-badge">civifix</span>' for architectural breakdown.

2. <span class="response-highlight">FixMate</span> (Java 17 + Spring Boot 3.3 + MySQL + Docker + Render)
   Local Service Booking Platform featuring Haversine geo-search across Indore/Ujjain/Bhopal,
   17 normalized 3NF tables, and 5-step checkout tracking.
   Type '<span class="cmd-badge">fixmate</span>' for architectural breakdown.
`,

    civifix: () => `
<span class="response-highlight">=== PROJECT: CiviFix Architecture ===</span>
• Role-Based Architecture: 4 portals (Citizen, Field Worker, Department Officer, City Admin) with stateless JWT & RBAC.
• Geospatial Intelligence: PostGIS + Leaflet GIS coordinate plotting, duplicate radius detection, live city ward heatmaps.
• AI Triage & Async Pipelines: Scikit-Learn NLP automated priority classification + Celery & Redis background workers.
• Cloud Deployment: Next.js on Vercel, RESTful backend on Render (Gunicorn/WhiteNoise), spatial DB on Supabase.
`,

    fixmate: () => `
<span class="response-highlight">=== PROJECT: FixMate Architecture ===</span>
• Marketplace System: Role-based dashboards (Customer, Service Pro, Admin) with stateless JWT & BCrypt password encryption.
• Smart Geo-Search: Haversine formula location discovery across Ujjain, Indore, Bhopal with collision-free slot booking.
• Relational Schema: 17 3NF tables in MySQL with composite B-Tree indexing, ACID dispute stored procedures, audit triggers.
• Checkout & Deployment: 5-step checkout workflow with wallet ledger, containerized with Docker, deployed on Render.
`,

    education: () => `
<span class="response-highlight">=== EDUCATION & MILESTONES ===</span>

• <span class="response-success">B.Tech in Computer Science & Engineering (2022 - 2026)</span>
  Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore | CGPA: 6.93 / 10.0

• <span class="response-success">Class XII (Senior Secondary) – Science PCM (2022)</span>
  Maharishi Ved Vyas Public H.S. School | Score: 70.8%

• <span class="response-success">Class X (Secondary School) (2020)</span>
  Maharishi Ved Vyas Public H.S. School | Score: 60%
`,

    contact: () => `
<span class="response-highlight">=== CONNECT WITH AAYUSH PATIDAR ===</span>

📧 Email:    <a href="mailto:aayushmahendrapatidar@gmail.com" class="response-highlight">aayushmahendrapatidar@gmail.com</a>
📱 Phone:    <a href="tel:+919174405591" class="response-highlight">+91 9174405591</a>
🔗 LinkedIn: <a href="https://linkedin.com/in/aayush-patidar-a13368244" target="_blank" class="response-highlight">linkedin.com/in/aayush-patidar-a13368244</a>
💻 GitHub:   <a href="https://github.com/aayushpatidar1511" target="_blank" class="response-highlight">github.com/aayushpatidar1511</a>
🌐 Portfolio: <span class="response-success">portfolio.aayushpatidar.dev</span>
`,

    'sudo hire': () => `
<span class="response-success">========================================================</span>
🎉 <span class="response-highlight">ACCESS GRANTED: HIRING FAST-TRACK INITIATED!</span>
Thank you for considering Aayush Patidar for your engineering team!
Direct dispatching priority communication:
👉 Email: <a href="mailto:aayushmahendrapatidar@gmail.com" class="response-highlight">aayushmahendrapatidar@gmail.com</a>
👉 Phone / WhatsApp: <a href="tel:+919174405591" class="response-highlight">+91 9174405591</a>
<span class="response-success">========================================================</span>
`,

    matrix: () => {
      document.body.classList.toggle('matrix-mode');
      return `<span class="response-success">Matrix mode ${document.body.classList.contains('matrix-mode') ? 'ACTIVATED' : 'DEACTIVATED'}</span>`;
    },

    clear: () => {
      if (terminalOutput) terminalOutput.innerHTML = '';
      return '';
    },

    exit: () => {
      closeTerminal();
      return 'Terminal session suspended.';
    }
  };

  function openTerminal() {
    if (!terminalOverlay) return;
    terminalOverlay.classList.add('active');
    if (terminalInput) {
      setTimeout(() => terminalInput.focus(), 100);
    }
    if (window.SoundFX && window.SoundFX.isEnabled()) {
      window.SoundFX.terminal();
    }
  }

  function closeTerminal() {
    if (!terminalOverlay) return;
    terminalOverlay.classList.remove('active');
  }

  function executeCommand(inputStr) {
    const rawCmd = inputStr.trim().toLowerCase();
    if (!rawCmd) return;

    commandHistory.push(rawCmd);
    historyIndex = commandHistory.length;

    // Create line entry
    const lineDiv = document.createElement('div');
    lineDiv.className = 'terminal-line';

    const echoDiv = document.createElement('div');
    echoDiv.className = 'command-echo';
    echoDiv.innerHTML = `<span>aayush@portfolio:~$</span> <span>${escapeHtml(inputStr)}</span>`;
    lineDiv.appendChild(echoDiv);

    let outputHtml = '';
    if (COMMANDS[rawCmd]) {
      outputHtml = typeof COMMANDS[rawCmd] === 'function' ? COMMANDS[rawCmd]() : COMMANDS[rawCmd];
    } else {
      outputHtml = `<span class="response-error">Command not found: '${escapeHtml(rawCmd)}'. Type '<span class="cmd-badge">help</span>' for available commands.</span>`;
    }

    if (rawCmd !== 'clear' && outputHtml) {
      const respDiv = document.createElement('div');
      respDiv.className = 'command-response';
      respDiv.innerHTML = outputHtml;
      lineDiv.appendChild(respDiv);
      terminalOutput.appendChild(lineDiv);
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    terminalInput.value = '';

    if (window.SoundFX && window.SoundFX.isEnabled()) {
      window.SoundFX.terminal();
    }
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Keyboard shortcut Ctrl+K or Cmd+K or Backquote
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (terminalOverlay && terminalOverlay.classList.contains('active')) {
        closeTerminal();
      } else {
        openTerminal();
      }
    } else if (e.key === 'Escape' && terminalOverlay && terminalOverlay.classList.contains('active')) {
      closeTerminal();
    }
  });

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeCommand(terminalInput.value);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          terminalInput.value = commandHistory[historyIndex] || '';
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          terminalInput.value = commandHistory[historyIndex] || '';
        } else {
          historyIndex = commandHistory.length;
          terminalInput.value = '';
        }
      }
    });
  }

  if (terminalTriggerBtn) {
    terminalTriggerBtn.addEventListener('click', openTerminal);
  }
  if (heroTerminalBtn) {
    heroTerminalBtn.addEventListener('click', openTerminal);
  }
  if (terminalCloseBtn) {
    terminalCloseBtn.addEventListener('click', closeTerminal);
  }
  if (terminalOverlay) {
    terminalOverlay.addEventListener('click', (e) => {
      if (e.target === terminalOverlay) {
        closeTerminal();
      }
    });
  }

  window.openTerminal = openTerminal;
})();
