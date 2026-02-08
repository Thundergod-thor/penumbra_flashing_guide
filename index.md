<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Penumbra Toolkit</title>

  <style>
    :root {
      --bg: #0d1117;
      --fg: #e6edf3;
      --muted: #8b949e;
      --accent: #58a6ff;
      --border: #30363d;
      --card: #161b22;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
                   Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif;
      background: var(--bg);
      color: var(--fg);
      line-height: 1.6;
    }

    .container {
      max-width: 900px;
      margin: auto;
      padding: 3rem 1.5rem;
    }

    header {
      margin-bottom: 3rem;
    }

    h1 {
      font-size: 2.4rem;
      margin-bottom: 0.5rem;
    }

    p.subtitle {
      color: var(--muted);
      max-width: 700px;
    }

    hr {
      border: none;
      border-top: 1px solid var(--border);
      margin: 3rem 0;
    }

    h2 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }

    ul {
      padding-left: 1.2rem;
    }

    li {
      margin: 0.4rem 0;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.2rem;
      margin-top: 1.5rem;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1.5rem;
      transition: border-color 0.2s ease;
    }

    .card:hover {
      border-color: var(--accent);
    }

    .card h3 {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    .card p {
      color: var(--muted);
      margin-bottom: 1rem;
    }

    a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 500;
    }

    a:hover {
      text-decoration: underline;
    }

    footer {
      margin-top: 4rem;
      color: var(--muted);
      font-size: 0.9rem;
    }

    @media (max-width: 600px) {
      h1 {
        font-size: 2rem;
      }
    }
  </style>
</head>

<body>
  <div class="container">

    <header>
      <h1>Penumbra Toolkit</h1>
      <p class="subtitle">
        A cross-platform <strong>MediaTek flashing, unbrick, and IMEI backup toolkit</strong>
        built around <em>antumbra</em>, designed for advanced users and device recovery scenarios.
      </p>
    </header>

    <hr/>

    <section>
      <h2>Features</h2>
      <ul>
        <li>Full RUI 5 unbrick and stock firmware restore</li>
        <li>Safe IMEI backup and restore workflow</li>
        <li>Windows and Linux support</li>
        <li>Deterministic flashing order</li>
        <li>No preloader flashing</li>
        <li>Service-grade, transparent scripts</li>
      </ul>
    </section>

    <hr/>

    <section>
      <h2>Supported Platforms</h2>
      <ul>
        <li><strong>Windows</strong> — Batch / CMD</li>
        <li><strong>Linux</strong> — Bash</li>
      </ul>
    </section>

    <hr/>

    <section>
      <h2>Documentation</h2>

      <div class="cards">
        <div class="card">
          <h3>Windows Usage</h3>
          <p>
            Driver installation, IMEI backup, restore, and full unbrick instructions
            for Windows users.
          </p>
          <a href="windows.md">Read Windows Guide →</a>
        </div>

        <div class="card">
          <h3>Linux Usage</h3>
          <p>
            Native antumbra usage, permissions setup, and flashing workflow
            for Linux systems.
          </p>
          <a href="linux.md">Read Linux Guide →</a>
        </div>
      </div>
    </section>

    <hr/>

    <section>
      <h2>Disclaimer</h2>
      <p class="subtitle">
        This project is provided for <strong>educational and recovery purposes only</strong>.
        Flashing firmware and modifying device partitions carries inherent risk.
        You are fully responsible for how you use these tools.
      </p>
    </section>

    <footer>
      © Penumbra Toolkit — Documentation for advanced MediaTek recovery workflows
    </footer>

  </div>
</body>
</html>
