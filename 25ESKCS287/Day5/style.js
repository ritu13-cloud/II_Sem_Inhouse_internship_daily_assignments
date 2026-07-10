/* --- Global Reset & CSS Variables --- */
:root {
    --bg-base: #0a0a16;
    --bg-surface: rgba(20, 20, 35, 0.45);
    --border-color: rgba(0, 242, 254, 0.2);
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --accent-glow: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
    --accent-neon: #00f2fe;
    --accent-neon-alt: #f35588;
    --card-shadow: 0 8px 32px 0 rgba(0, 242, 254, 0.1);
    --transition-speed: 0.3s;
}

[data-theme="light"] {
    --bg-base: #f8fafc;
    --bg-surface: rgba(255, 255, 255, 0.7);
    --border-color: rgba(79, 172, 254, 0.25);
    --text-primary: #0f172a;
    --text-secondary: #475569;
    --accent-glow: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --accent-neon: #2563eb;
    --accent-neon-alt: #db2777;
    --card-shadow: 0 8px 32px 0 rgba(37, 99, 235, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Space Grotesk', sans-serif;
    background-color: var(--bg-base);
    color: var(--text-primary);
    transition: background-color var(--transition-speed), color var(--transition-speed);
    overflow-x: hidden;
    line-height: 1.6;
}

h1, h2, h3, h4, .logo, .btn, .time-box span {
    font-family: 'Orbitron', sans-serif;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 0;
}

/* --- Reusable Elements & Glassmorphism Core --- */
.glass-card {
    background: var(--bg-surface);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    box-shadow: var(--card-shadow);
    transition: transform var(--transition-speed), border-color var(--transition-speed), box-shadow var(--transition-speed);
}

.glass-card:hover {
    border-color: var(--accent-neon);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px 0 rgba(0, 242, 254, 0.2);
}

.text-gradient {
    background: var(--accent-glow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 50px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* --- Buttons --- */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 32px;
    border-radius: 50px;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
    transition: all var(--transition-speed) ease;
    cursor: pointer;
}

.btn-primary {
    background: var(--accent-glow);
    color: #fff;
    border: none;
    box-shadow: 0 0 20px rgba(0, 242, 254, 0.4);
}

.btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px var(--accent-neon);
}

/* --- Navbar --- */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(var(--bg-base), 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    height: 75px;
    margin: 0 auto;
}

.logo {
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--text-primary);
    text-decoration: none;
    letter-spacing: 1px;
}

.logo-accent {
    color: var(--accent-neon);
    text-shadow: 0 0 10px rgba(0, 242, 254, 0.5);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 30px;
    align-items: center;
}

.nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: color var(--transition-speed);
}

.nav-links a:hover {
    color: var(--accent-neon);
}

.nav-btn {
    border: 1px solid var(--accent-neon);
    padding: 8px 20px !important;
    border-radius: 50px;
    color: var(--text-primary) !important;
}

.nav-btn:hover {
    background: var(--accent-glow);
    color: #fff !important;
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 20px;
}

.theme-toggle, .menu-toggle {
    background: none;
    border: none;
    color: var(--text-primary);
    font-size: 1.2rem;
    cursor: pointer;
    transition: color var(--transition-speed);
}

.menu-toggle {
    display: none;
}

/* --- Hero Section --- */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 100px;
}

.hero-glowing-orb {
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(0,242,254,0.15) 0%, rgba(0,0,0,0) 70%);
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    pointer-events: none;
}

.hero-content {
    max-width: 850px;
    z-index: 2;
    padding: 0 20px;
}

.badge {
    display: inline-block;
    padding: 6px 16px;
    background: rgba(0, 242, 254, 0.1);
    border: 1px solid var(--accent-neon);
    color: var(--accent-neon);
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 25px;
    letter-spacing: 1px;
}

.hero-title {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 20px;
    letter-spacing: -1px;
}

.hero-tagline {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 40px;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
}

.hero-meta {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 40px;
}

.meta-item {
    font-size: 1.1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
}

.meta-item i {
    color: var(--accent-neon);
}

/* --- Countdown Timer --- */
.countdown-section {
    padding: 40px 0;
    text-align: center;
}

.section-sub {
    font-size: 0.9rem;
    text-transform: uppercase;
    color: var(--text-secondary);
    letter-spacing: 2px;
    margin-bottom: 20px;
}

.countdown-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.time-box {
    background: var(--bg-surface);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    padding: 20px;
    border-radius: 12px;
    min-width: 110px;
    box-shadow: var(--card-shadow);
}

.time-box span {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent-neon);
    display: block;
}

.time-box p {
    font-size: 0.8rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    margin-top: 5px;
}

/* --- About Section --- */
.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.about-card {
    padding: 40px 30px;
}

.card-icon {
    font-size: 2rem;
    color: var(--accent-neon);
    margin-bottom: 20px;
}

.about-card h3 {
    margin-bottom: 15px;
    font-size: 1.3rem;
}

.about-card p {
    color: var(--text-secondary);
}

/* --- Prizes Section --- */
.prizes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    align-items: center;
}

.prize-card {
    padding: 40px 30px;
    text-align: center;
    position: relative;
}

.prize-card.winner {
    border-color: var(--accent-neon-alt);
    transform: scale(1.05);
    background: linear-gradient(180deg, rgba(243,85,136,0.05) 0%, var(--bg-surface) 100%);
}

.prize-badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--accent-neon-alt);
    color: #fff;
    padding: 4px 16px;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
}

.prize-rank {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 10px;
}

.prize-val {
    font-size: 3rem;
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: 25px;
}

.prize-card ul {
    list-style: none;
    text-align: left;
    display: inline-block;
}

.prize-card li {
    margin-bottom: 12px;
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.prize-card li i {
    color: var(--accent-neon);
    margin-right: 8px;
}

/* --- Rules Section --- */
.rules-wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
}

.rule-item {
    display: flex;
    gap: 25px;
    margin-bottom: 30px;
}

.rule-item:last-child {
    margin-bottom: 0;
}

.rule-num {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--accent-neon);
}

.rule-item h4 {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.rule-item p {
    color: var(--text-secondary);
}

/* --- Timeline Section --- */
.timeline-container {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
}

.timeline-container::after {
    content: '';
    position: absolute;
    width: 2px;
    background: var(--border-color);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
}

.timeline-block {
    padding: 10px 40px;
    position: relative;
    background: inherit;
    width: 50%;
}

.timeline-block::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    right: -7px;
    background-color: var(--bg-base);
    border: 3px solid var(--accent-neon);
    top: 30px;
    border-radius: 50%;
    z-index: 1;
}

.right {
    left: 50%;
}

.right::after {
    left: -7px;
}

.timeline-content {
    padding: 25px;
}

.timeline-content h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: var(--accent-neon);
}

.timeline-content p {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

/* --- Speakers & Sponsors --- */
.grid-4-col {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
}

.profile-card {
    padding: 30px 20px;
    text-align: center;
}

.profile-avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba(0, 242, 254, 0.1);
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 1.8rem;
    color: var(--accent-neon);
}

.profile-card h4 {
    font-size: 1rem;
    margin-bottom: 5px;
}

.profile-card p {
    font-size: 0.85rem;
    color: var(--text-secondary);
}

.sponsor-brands {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

.sponsor-logo {
    padding: 20px 40px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: bold;
    color: var(--text-secondary);
}

/* --- FAQ Section --- */
.faq-list {
    max-width: 750px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.faq-item {
    padding: 20px 25px;
    cursor: pointer;
}

.faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
}

.faq-question i {
    transition: transform var(--transition-speed);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-speed) ease-out;
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.faq-item.active .faq-answer {
    max-height: 200px;
    margin-top: 15px;
}

.faq-item.active .faq-question i {
    transform: rotate(180deg);
}

/* --- Registration Form --- */
.form-wrapper {
    max-width: 850px;
    margin: 0 auto;
    padding: 50px;
    position: relative;
}

.form-desc {
    text-align: center;
    color: var(--text-secondary);
    margin-bottom: 40px;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-bottom: 35px;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.input-group.full-width {
    grid-column: span 2;
}

.input-group label {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-primary);
}

.input-group input, .input-group select, .input-group textarea {
    background: rgba(var(--bg-base), 0.5);
    border: 1px solid var(--border-color);
    padding: 14px;
    border-radius: 8px;
    color: var(--text-primary);
    font-family: inherit;
    font-size: 0.95rem;
    outline: none;
    transition: border-color var(--transition-speed);
}

.input-group input:focus, .input-group select:focus, .input-group textarea:focus {
    border-color: var(--accent-neon);
}

.input-group select option {
    background: var(--bg-base);
    color: var(--text-primary);
}

.btn-submit {
    width: 100%;
    justify-content: center;
    background: var(--accent-glow);
    border: none;
    color: white;
}

/* --- Success Frame Overlay --- */
.success-message {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-base);
    border-radius: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px;
    z-index: 10;
}

.success-icon {
    font-size: 4rem;
    color: #10b981;
    margin-bottom: 20px;
}

/* --- Footer --- */
footer {
    text-align: center;
    padding: 30px;
    border-top: 1px solid var(--border-color);
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* --- Responsive Adjustments --- */
@media (max-width: 968px) {
    .prizes-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    .prize-card.winner {
        transform: scale(1);
    }
    .timeline-container::after {
        left: 31px;
    }
    .timeline-block {
        width: 100%;
        padding-left: 70px;
        padding-right: 20px;
    }
    .timeline-block.left, .timeline-block.right {
        left: 0;
    }
    .timeline-block::after {
        left: 24px;
    }
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }
    .nav-links {
        position: fixed;
        top: 75px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 75px);
        background: var(--bg-base);
        flex-direction: column;
        padding: 40px 0;
        transition: left 0.3s ease;
    }
    .nav-links.active {
        left: 0;
    }
    .hero-title {
        font-size: 2.5rem;
    }
    .hero-meta {
        flex-direction: column;
        gap: 15px;
    }
    .form-grid {
        grid-template-columns: 1fr;
    }
    .input-group.full-width {
        grid-column: span 1;
    }
    .form-wrapper {
        padding: 30px 20px;
    }
}