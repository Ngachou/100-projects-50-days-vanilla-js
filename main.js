const projects = [
    { id: 1, name: "Password strenght meter", tag: "RegExp", done: true, url: "./02-password-strength-meter" },
    { id: 2, name: "Countdown Timer", tag: "setInterval", done: true, url: "./01-countdown-timer" },
    { id: 3, name: "To-Do List", tag: "LocalStorage", done: true, url: "./03-todo-app" },
    { id: 4, name: "Calculator", tag: "Math", done: true, url: "./04-Calculator" },
    { id: 5, name: "Color Generator", tag: "CSS vars", done: true, url: "./05-color-palette-generator" },
    { id: 6, name: "Quiz App", tag: "Array / JSON", done: true, url: "./06-quiz-game" },
    { id: 7, name: "Weather App", tag: "Fetch API", done: false, url: null },
    { id: 8, name: "Border Radius Generator", tag: "DOM", done: true, url: "./08-border-radius-previewer" },
    { id: 9, name: "Password Generator", tag: "RegExp / Function", done: true, url: "./09-password-generator" },
    { id: 10, name: "Pomodoro Timer", tag: "Timer / Audio", done: false, url: null },
    { id: 11, name: "Drag & Drop", tag: "DnD API", done: true, url: "./11-drag-and-drop" },
    { id: 12, name: "Image Slider", tag: "CSS Transitions", done: false, url: null },
    { id: 13, name: "Star Rating", tag: "Object", done: true, url: "./13-star-rating" },
    { id: 14, name: "Infinite Scroll", tag: "IntersectionObserver", done: false, url: null },
    { id: 15, name: "Dark / Light Mode", tag: "localStorage", done: true, url: "./15-dark-mode-toggle" },
    { id: 16, name: "Typewriter Effect", tag: "Strings / setInterval", done: true, url: "./16-character-counter" },
    { id: 17, name: "Random Meal ", tag: "API", done: true, url: "./17-random-meal-generator" },
    { id: 18, name: "Notification Bell", tag: "", done: false, url: null },
    { id: 19, name: "Form Validation", tag: "Regex", done: false, url: null },
    { id: 20, name: "Expense Tracker", tag: "CRUD + Chart", done: true, url: "./20-expense-tracker" },
    { id: 21, name: "Movie Search", tag: "OMDB API", done: false, url: null },
    { id: 22, name: "GitHub Profile", tag: "GitHub API", done: true, url: "./22-github-finder" },
    { id: 23, name: "Drawing Canvas", tag: "Canvas API", done: false, url: null },
    { id: 24, name: "Typing Speed Test", tag: "Performance API", done: false, url: null },
    { id: 25, name: "Memory Card Game", tag: "DOM / Logic", done: false, url: null },
    { id: 26, name: "Recipe Finder", tag: "API + Filters", done: false, url: null },
    { id: 27, name: "Currency Converter", tag: "Exchange API", done: false, url: null },
    { id: 28, name: "Country Lookup", tag: "Fetch / Display", done: true, url: "./28-country-lookup" },
    { id: 29, name: "Breakout Game", tag: "Canvas / Physics", done: false, url: null },
    { id: 30, name: "Snake Game", tag: "Canvas / Loop", done: false, url: null },
    { id: 31, name: "OTP Control", tag: "RegExp / Form", done: true, url: "./31-otp-input-ui" },
    { id: 32, name: "Flappy Bird Clone", tag: "Canvas / RAF", done: false, url: null },
    { id: 33, name: "CSS Art — Logo", tag: "Pure CSS", done: false, url: null },
    { id: 34, name: "Particle System", tag: "Canvas / Math", done: false, url: null },
    { id: 35, name: "3D CSS Cube", tag: "CSS 3D", done: false, url: null },
    { id: 36, name: "Kaleidoscope", tag: "Canvas / Trig", done: false, url: null },
    { id: 37, name: "Audio Visualizer", tag: "Web Audio API", done: false, url: null },
    { id: 38, name: "Webcam Filter", tag: "MediaDevices", done: false, url: null },
    { id: 39, name: "Confetti", tag: "Animation / Confetti", done: true, url: "./39-confetti" },
    { id: 40, name: "Text to Speech", tag: "SpeechSynthesis", done: false, url: null },
    { id: 41, name: "Clipboard Manager", tag: "Clipboard API", done: false, url: null },
    { id: 42, name: "PWA Starter", tag: "Service Worker", done: false, url: null },
    { id: 43, name: "Geolocation Map", tag: "Geolocation API", done: false, url: null },
    { id: 44, name: "QR Code Generator", tag: "Canvas / Algo", done: true, url: "./44-qr-code-generator" },
    { id: 45, name: "Barcode Scanner", tag: "BarcodeDetector", done: false, url: null },
    { id: 46, name: "Pokemon Viewer", tag: "API", done: true, url: "./46-pokemon-viewer" },
    { id: 47, name: "Virtual Keyboard", tag: "KeyboardEvent", done: false, url: null },
    { id: 48, name: "Scroll Animations", tag: "IntersectionObs.", done: false, url: null },
    { id: 49, name: "Scroll Progress", tag: "Scroll / Transform", done: true, url: "./49-scroll-progress" },
    { id: 50, name: "Custom Cursor", tag: "MouseEvent", done: false, url: null },
    { id: 51, name: "CSS Loading Anim.", tag: "CSS Animation", done: false, url: null },
    { id: 52, name: "SVG Signature", tag: "SVG / Stroke", done: false, url: null },
    { id: 53, name: "Confetti Effect", tag: "Canvas / RAF", done: false, url: null },
    { id: 54, name: "Water Ripple", tag: "Canvas / Physics", done: false, url: null },
    { id: 55, name: "Starfield", tag: "Canvas / RAF", done: false, url: null },
    { id: 56, name: "Chat UI (static)", tag: "DOM / CSS", done: false, url: null },
    { id: 57, name: "Kanban Board", tag: "DnD / LocalStorage", done: false, url: null },
    { id: 58, name: "Markdown Editor", tag: "Parse / Preview", done: false, url: null },
    { id: 59, name: "JSON Formatter", tag: "JSON / DOM", done: false, url: null },
    { id: 60, name: "Color Picker", tag: "Canvas / Input", done: false, url: null },
    { id: 61, name: "Regex Tester", tag: "RegExp", done: false, url: null },
    { id: 62, name: "CSS Gradient Gen.", tag: "DOM / CSS", done: false, url: null },
    { id: 63, name: "Box Shadow Gen.", tag: "CSS Custom Prop.", done: false, url: null },
    { id: 64, name: "Font Pairing Tool", tag: "Google Fonts API", done: false, url: null },
    { id: 65, name: "Palette Extractor", tag: "Canvas / ImageData", done: false, url: null },
    { id: 66, name: "Pixel Art Editor", tag: "Canvas / Grid", done: false, url: null },
    { id: 67, name: "Minesweeper", tag: "Grid / Logic", done: false, url: null },
    { id: 68, name: "Chess Board", tag: "Grid / Events", done: false, url: null },
    { id: 69, name: "2048 Clone", tag: "Array Rotation", done: false, url: null },
    { id: 70, name: "Tic Tac Toe", tag: "Minimax", done: false, url: null },
    { id: 71, name: "Virtual Piano", tag: "Web Audio API", done: false, url: null },
    { id: 72, name: "Beat Maker", tag: "AudioContext", done: false, url: null },
    { id: 73, name: "Equalizer", tag: "Web Audio / Canvas", done: false, url: null },
    { id: 74, name: "Radio Player", tag: "Audio / Streams", done: false, url: null },
    { id: 75, name: "Metronome", tag: "AudioContext / Timer", done: false, url: null },
    { id: 76, name: "Gender Predictor", tag: "Dom/ API", done: false, url: null },
    { id: 77, name: "Mind Map", tag: "SVG / DOM", done: false, url: null },
    { id: 78, name: "Flow Chart", tag: "Canvas / Nodes", done: false, url: null },
    { id: 79, name: "Graph Visualizer", tag: "Canvas / Algo", done: false, url: null },
    { id: 80, name: "Sorting Visualizer", tag: "Canvas / Async", done: false, url: null },
    { id: 81, name: "Pathfinding (A*)", tag: "Algorithm / Canvas", done: false, url: null },
    { id: 82, name: "Conway's Game of Life", tag: "Grid / Loop", done: false, url: null },
    { id: 83, name: "Fractal Tree", tag: "Canvas / Recursion", done: false, url: null },
    { id: 84, name: "Mandelbrot Set", tag: "Canvas / Complex Nb", done: false, url: null },
    { id: 85, name: "Faq accordilon", tag: "Dom", done: true, url: "./85-faq-accordion" },
    { id: 86, name: "Cloth Simulation", tag: "Verlet Integration", done: false, url: null },
    { id: 87, name: "Fluid Simulation", tag: "Canvas / Grid", done: false, url: null },
    { id: 88, name: "Ray Casting", tag: "Canvas / Math", done: false, url: null },
    { id: 89, name: "3D Engine (basic)", tag: "Canvas / Projection", done: false, url: null },
    { id: 90, name: "Voxel Renderer", tag: "Canvas / 3D", done: false, url: null },
    { id: 91, name: "File Uploader UI", tag: "File API", done: false, url: null },
    { id: 92, name: "Image Crop Tool", tag: "Canvas / File API", done: false, url: null },
    { id: 93, name: "PDF Viewer (basic)", tag: "PDF.js", done: false, url: null },
    { id: 94, name: "URL Shortener UI", tag: "API / LocalStorage", done: false, url: null },
    { id: 95, name: "Multi-page SPA", tag: "History API", done: false, url: null },
    { id: 96, name: "WebSocket Chat", tag: "WebSockets", done: false, url: null },
    { id: 97, name: "IndexedDB Notes", tag: "IndexedDB", done: false, url: null },
    { id: 98, name: "Web Worker Demo", tag: "Web Workers", done: false, url: null },
    { id: 99, name: "CSS-only Game", tag: "Pure CSS", done: false, url: null },
    { id: 100, name: "Final Portfolio", tag: "Full Stack HTML", done: false, url: null },
];



const timeline = [
    {
        days: "Day 1–5",
        title: "Foundations",
        desc: "Core DOM manipulation, timers, events and LocalStorage. Building the mental model of how the browser works.",
        tags: ["DOM API", "Events", "localStorage", "Date API", "setInterval"],
        status: "done",
    },
    {
        days: "Day 6–10",
        title: "Data & APIs",
        desc: "Fetching external data, handling JSON, building CRUD interfaces and working with async JavaScript.",
        tags: ["Fetch API", "async/await", "JSON", "CRUD", "Promises"],
        status: "done",
    },
    {
        days: "Day 11–15",
        title: "UI Patterns",
        desc: "Advanced CSS layout, transitions, scroll-driven interactions and accessible UI components.",
        tags: ["CSS Grid", "Flexbox", "IntersectionObserver", "CSS Transitions", "Accessibility"],
        status: "active",
    },
    {
        days: "Day 16–20",
        title: "Games & Canvas",
        desc: "2D canvas rendering, game loops, physics basics and requestAnimationFrame.",
        tags: ["Canvas API", "RAF", "Game Loop", "Collision Detection", "Physics"],
        status: "upcoming",
    },
    {
        days: "Day 21–25",
        title: "Media & Devices",
        desc: "Browser APIs for audio, video, camera, microphone, speech and geolocation.",
        tags: ["Web Audio API", "MediaDevices", "SpeechRecognition", "Geolocation", "File API"],
        status: "upcoming",
    },
    {
        days: "Day 26–30",
        title: "Advanced CSS",
        desc: "CSS art, 3D transforms, SVG animations, custom properties at scale and creative visual effects.",
        tags: ["CSS 3D", "SVG", "CSS Animation", "Custom Properties", "clip-path"],
        status: "upcoming",
    },
    {
        days: "Day 31–36",
        title: "Developer Tools",
        desc: "Building tools devs actually use: editors, formatters, generators and inspectors.",
        tags: ["RegExp", "JSON", "Canvas / ImageData", "DOM", "Clipboard API"],
        status: "upcoming",
    },
    {
        days: "Day 37–42",
        title: "Complex Games",
        desc: "Classic games with real algorithmic depth: Minimax AI, procedural generation, tile engines.",
        tags: ["Minimax", "Grid Logic", "Array Rotation", "Canvas / Grid", "Algorithms"],
        status: "upcoming",
    },
    {
        days: "Day 43–47",
        title: "Algorithms & Viz",
        desc: "Visual representations of algorithms: sorting, pathfinding, graph traversal, fractals and simulations.",
        tags: ["A* Algorithm", "Sorting", "Canvas / Recursion", "Verlet Integration", "RAF"],
        status: "upcoming",
    },
    {
        days: "Day 48–50",
        title: "Advanced Web APIs",
        desc: "The browser's most powerful features: Service Workers, WebSockets, Web Workers, IndexedDB and the History API.",
        tags: ["Service Worker", "WebSockets", "Web Workers", "IndexedDB", "History API"],
        status: "upcoming",
    },
];


const faqItems = [
    {
        q: "Why no frameworks at all?",
        a: "Frameworks are abstractions on top of vanilla JS. If you don't understand what's underneath, you can't debug effectively, you can't optimize, and you're entirely dependent on the framework's decisions. Mastering vanilla first makes you a better developer in any framework."
    },
    {
        q: "Can I use AI while doing the challenge?",
        a: "The rule is simple: AI must not write your code. Use it to understand concepts, look up documentation, or debug a tricky error — but the actual implementation must come from your own thinking. The goal is to build your skill, not your prompt game."
    },
    {
        q: "Is this only for beginners?",
        a: "Not at all. Junior devs will build a solid foundation. Mid-level devs will fill in the gaps they glossed over. Even seniors will find value in some of the more advanced projects (Canvas physics, algorithms, simulations). The challenge scales with you."
    },
    {
        q: "What if I miss a day?",
        a: "Life happens. Missing one or two days doesn't disqualify you. The point isn't perfection — it's building a consistent habit. If you miss a day, pick up where you left off. Finishing 100 projects in 55 days still beats finishing 0 in 50."
    },
    {
        q: "Do I need any prior knowledge?",
        a: "You should be comfortable with basic HTML, CSS and JavaScript syntax. If you know what a function, a loop and an event listener are, you're ready. The early projects are gentle on-ramps and difficulty increases progressively."
    },
    {
        q: "How are the projects documented?",
        a: "Every project has its own README that explains what it does, what concepts it covers, and includes direct links to MDN documentation and other quality resources. The goal is that anyone reading a project can fully understand the code and go deeper."
    },
    {
        q: "Can I fork this and do my own 100/50 challenge?",
        a: "Absolutely — that's encouraged. Fork the repo, adjust the project list to your own interests, and run your own version. The more people doing this seriously, the better the developer community becomes."
    },
    {
        q: "Will this help me get a job?",
        a: "100 documented, working projects on GitHub is a portfolio most developers simply don't have. Combine that with the depth of understanding you'll build, and yes — it makes a very strong impression in technical interviews."
    },
];


function buildProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    projects.forEach(p => {
        const el = document.createElement(p.url ? 'a' : 'div');
        if (p.url) { el.href = p.url; el.target = '_blank'; el.rel = 'noopener'; }
        el.className = 'project-card' + (p.done ? ' done' : ' locked');
        el.innerHTML = `
      <div class="project-num">#${String(p.id).padStart(3, '0')}</div>
      <div class="project-name">${p.name}</div>
      <div class="project-tag">${p.tag}</div>
    `;
        grid.appendChild(el);
    });

    const doneCount = projects.filter(p => p.done).length;
    const countEl = document.getElementById('prog-count');
    if (countEl) countEl.textContent = `${doneCount} / 100`;
}


function buildTimeline() {
    const container = document.getElementById('timeline-grid');
    if (!container) return;

    const statusBadge = {
        done: '<span class="tl-badge done-b">✓ Completed</span>',
        active: '<span class="tl-badge active-b">→ In progress</span>',
        upcoming: '<span class="tl-badge upcoming-b">◦ Upcoming</span>',
    };

    timeline.forEach(phase => {
        const item = document.createElement('div');
        item.className = `tl-item ${phase.status === 'done' ? 'done-phase' : ''} ${phase.status === 'active' ? 'active' : ''}`;

        const tagsHtml = phase.tags
            .map(t => `<span class="tl-tag">${t}</span>`)
            .join('');

        item.innerHTML = `
      <div class="tl-days">${phase.days}</div>
      <div class="tl-content">
        <div class="tl-title">${phase.title}</div>
        <div class="tl-desc">${phase.desc}</div>
        <div class="tl-tags">${tagsHtml}</div>
        ${statusBadge[phase.status] || ''}
      </div>
    `;
        container.appendChild(item);
    });
}



function buildFaq() {
    const container = document.getElementById('faq-grid');
    if (!container) return;

    faqItems.forEach((item, i) => {
        const el = document.createElement('button');
        el.className = 'faq-item';
        el.setAttribute('aria-expanded', 'false');
        el.setAttribute('aria-controls', `faq-answer-${i}`);
        el.innerHTML = `
      <div class="faq-question">
        <span>${item.q}</span>
        <span class="faq-icon" aria-hidden="true">+</span>
      </div>
      <div class="faq-answer" id="faq-answer-${i}" role="region">
        ${item.a}
      </div>
    `;

        el.addEventListener('click', () => {
            const isOpen = el.classList.contains('open');

            container.querySelectorAll('.faq-item.open').forEach(other => {
                other.classList.remove('open');
                other.setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
                el.classList.add('open');
                el.setAttribute('aria-expanded', 'true');
            }
        });

        container.appendChild(el);
    });
}



function initProgressBar() {
    const fill = document.getElementById('prog-fill');
    const header = document.querySelector('.projects-header');
    if (!fill || !header) return;

    const doneCount = projects.filter(p => p.done).length;
    let triggered = false;

    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !triggered) {
            triggered = true;
            setTimeout(() => {
                fill.style.width = `${(doneCount / 100) * 100}%`;
            }, 250);
        }
    }, { threshold: 0.4 }).observe(header);
}


function initReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 70);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}



document.addEventListener('DOMContentLoaded', () => {
    buildProjects();
    buildTimeline();
    buildFaq();
    initProgressBar();
    initReveal();
});