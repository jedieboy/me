import { Component } from '@angular/core';
import { Reveal } from '../core/motion.directives';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  template: `
    <section id="about" class="wrap about">
      <div class="row">
        <div class="side" appReveal>
          <span class="section-num">01</span>
          <span class="label muted">Key Qualifications</span>
        </div>
        <div class="main">
          <p class="lead" appReveal="100">
            I am a Full-Stack Software Developer with extensive experience in
            <em>web and mobile application development</em>, front-end and back-end development,
            software testing, deployment, system enhancement, and application maintenance.
          </p>
          <p class="body" appReveal="200">
            I have experience developing web applications using Angular, Laravel, JavaScript, HTML5,
            CSS3, PHP, ASP.NET, MySQL, and SQL. I also have experience in mobile application
            development using Ionic, Angular, Swift, and iOS technologies.
          </p>
          <div class="stats" appReveal="300">
            <div class="stat"><span class="value">6</span><span class="key">Companies</span></div>
            <div class="stat"><span class="value">Web <em>&amp;</em> iOS</span><span class="key">Platforms</span></div>
            <div class="stat"><span class="value">B.S. CS</span><span class="key">New Era University</span></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .about { position: relative; padding-top: var(--section-y); padding-bottom: var(--section-y); }
    .row { display: flex; flex-wrap: wrap; gap: clamp(32px, 5vw, 80px); }
    .side { flex: 1 1 220px; display: flex; flex-direction: column; gap: 14px; }
    .muted { color: var(--muted); }
    .main { flex: 2 1 560px; display: flex; flex-direction: column; gap: 36px; min-width: 0; }
    .lead {
      margin: 0; font-family: var(--serif); font-size: clamp(30px, 3.6vw, 52px); line-height: 1.18;
      font-weight: 300; text-wrap: pretty;
    }
    .lead em, .value em { color: var(--gold); }
    .body {
      margin: 0; max-width: 640px; font-size: 17px; line-height: 1.85; color: var(--muted);
      font-weight: 300; text-wrap: pretty;
    }
    .stats {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr));
      gap: 1px; background: var(--line); border: 1px solid var(--line); margin-top: 12px;
    }
    .stat { background: var(--bg); padding: 28px 24px; display: flex; flex-direction: column; gap: 8px; }
    .value { font-family: var(--serif); font-size: 48px; line-height: 1; font-weight: 300; }
    .key { font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--muted); }
  `,
})
export class About {}
