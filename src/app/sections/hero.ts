import { Component } from '@angular/core';
import { Parallax, Reveal } from '../core/motion.directives';

@Component({
  selector: 'app-hero',
  imports: [Reveal, Parallax],
  template: `
    <header id="top" class="hero">
      <div class="ghost" appParallax="0.35" aria-hidden="true">Developer</div>
      <div class="grid">
        <div class="copy">
          <div class="kicker" appReveal>
            <span class="rule"></span>
            <span>Full-Stack Software Developer</span>
          </div>
          <h1 appReveal="120">Jedie Boy<br /><span>Calut</span></h1>
          <p class="intro" appReveal="240">
            I am currently an Application Developer using latest Frontend Frameworks, Angular Ionic. I
            have more than 7 years of working experience in IT Industry. I have experience in Microsoft
            technology such as ASP.Net, ADO.Net, SQL, IIS, Laravel MYSQL etc. Experienced in developing
            hybrid application Android and IOS for fintech company.
          </p>
          <div class="ctas" appReveal="360">
            <a href="#contact" class="btn-solid">Get in touch</a>
            <a href="#work" class="btn-ghost">View experience</a>
          </div>
        </div>

        <div class="portrait" appReveal="200">
          <div class="outline"></div>
          <div class="arch">
            <img appParallax="-0.12" src="assets/jedie.png" alt="Jedie Boy Calut" />
          </div>
          <div class="badge">
            <span class="year">2015</span>
            <span class="caption">Building since</span>
          </div>
        </div>
      </div>
      <div class="scroll-cue" aria-hidden="true">
        <span>Scroll</span><span class="line"></span>
      </div>
    </header>
  `,
  styles: `
    .hero {
      position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden;
    }
    .ghost {
      position: absolute; left: 0; right: 0; bottom: 4vh; text-align: center;
      font-family: var(--serif); font-size: clamp(120px, 22vw, 340px); font-weight: 300;
      font-style: italic; line-height: .8; color: transparent; -webkit-text-stroke: 1px var(--stroke);
      white-space: nowrap; pointer-events: none; user-select: none;
    }
    .grid {
      position: relative; max-width: 1280px; width: 100%; margin: 0 auto;
      padding: 140px var(--gutter) 96px;
      display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr));
      gap: clamp(48px, 6vw, 96px); align-items: center;
    }
    .copy { display: flex; flex-direction: column; gap: 36px; min-width: 0; }
    .kicker {
      display: flex; align-items: center; gap: 16px; font-size: 12px; letter-spacing: .24em;
      text-transform: uppercase; color: var(--gold); font-weight: 500;
    }
    .rule { width: 48px; height: 1px; background: var(--gold); flex: none; }
    h1 {
      margin: 0; font-family: var(--serif); font-weight: 300;
      font-size: clamp(64px, 9.5vw, 148px); line-height: .86; letter-spacing: -.02em;
    }
    h1 span { font-style: italic; color: var(--gold); padding-left: .5em; }
    .intro {
      margin: 0; max-width: 520px; font-size: clamp(16px, 1.3vw, 18px); line-height: 1.8;
      color: var(--muted); font-weight: 300; text-wrap: pretty;
    }
    .ctas { display: flex; gap: 14px; flex-wrap: wrap; }
    .ctas a {
      border-radius: 999px; font-size: 12px; letter-spacing: .2em; text-transform: uppercase;
      transition: all .4s ease; min-height: 44px;
    }
    .btn-solid { background: var(--gold); color: var(--bg); padding: 17px 30px; font-weight: 600; }
    .btn-solid:hover { background: var(--ink); color: var(--bg); transform: translateY(-2px); }
    .btn-ghost { border: 1px solid var(--line-strong); padding: 16px 30px; font-weight: 500; }
    .btn-ghost:hover { border-color: var(--gold); }

    .portrait { position: relative; justify-self: center; width: 100%; max-width: 460px; }
    .outline {
      position: absolute; top: -22px; right: -22px; bottom: 22px; left: 22px;
      border: 1px solid var(--line-strong); border-radius: 240px 240px 4px 4px;
    }
    .arch {
      position: relative; aspect-ratio: 4 / 5; border-radius: 240px 240px 4px 4px;
      overflow: hidden; background: var(--panel);
    }
    .arch img {
      position: absolute; left: 0; top: -10%; width: 100%; height: 120%; object-fit: cover;
      object-position: 62% 30%; display: block; filter: saturate(.85) contrast(1.05);
    }
    .badge {
      position: absolute; left: -12px; bottom: 40px; background: var(--bg);
      border: 1px solid var(--line-strong); padding: 18px 22px;
      display: flex; flex-direction: column; gap: 4px;
    }
    .year { font-family: var(--serif); font-size: 44px; line-height: 1; color: var(--gold); font-weight: 300; }
    .caption { font-size: 10px; letter-spacing: .22em; text-transform: uppercase; color: var(--muted); }

    .scroll-cue {
      position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
      display: flex; flex-direction: column; align-items: center; gap: 10px;
      font-size: 10px; letter-spacing: .3em; text-transform: uppercase; color: var(--dim);
    }
    .scroll-cue .line { width: 1px; height: 40px; background: linear-gradient(var(--dim), transparent); }
  `,
})
export class Hero {}
