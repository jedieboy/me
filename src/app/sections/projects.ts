import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Reveal } from '../core/motion.directives';
import { PROJECTS } from '../core/content';

@Component({
  selector: 'app-projects',
  imports: [Reveal],
  template: `
    <section id="projects" class="projects">
      <div class="wrap inner">
        <div class="head" appReveal>
          <div class="title">
            <span class="section-num">03</span>
            <h2 class="section-title">Selected <em>Work</em></h2>
          </div>
          <span class="note">Live sites — click any project to open it.</span>
        </div>
        <div class="grid">
          @for (p of projects; track p.url) {
            <div [appReveal]="p.delay">
              <a class="card" [href]="p.url" target="_blank" rel="noopener">
                <div class="frame">
                  <iframe [src]="p.safeUrl" [title]="p.name" loading="lazy" tabindex="-1"></iframe>
                  <span class="num">{{ p.num }}</span>
                </div>
                <div class="meta">
                  <span class="name">{{ p.name }}</span>
                  <span class="visit">Visit ↗</span>
                </div>
              </a>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .projects { background: var(--panel); border-top: 1px solid var(--line); }
    .inner {
      padding-top: var(--section-y); padding-bottom: var(--section-y);
      display: flex; flex-direction: column; gap: clamp(48px, 6vw, 88px);
    }
    .head { display: flex; justify-content: space-between; align-items: end; gap: 24px; flex-wrap: wrap; }
    .title { display: flex; flex-direction: column; gap: 20px; }
    .note { max-width: 300px; font-size: 15px; line-height: 1.7; color: var(--muted); font-weight: 300; }
    .grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
      gap: clamp(24px, 3vw, 40px);
    }
    .card { display: flex; flex-direction: column; gap: 22px; transition: transform .6s var(--ease); }
    .card:hover { transform: translateY(-8px); }
    .frame {
      position: relative; aspect-ratio: 4 / 5; overflow: hidden; background: var(--bg);
      border: 1px solid var(--line);
    }
    iframe {
      position: absolute; top: 0; left: 0; width: 333.33%; height: 333.33%; border: 0;
      transform: scale(.3); transform-origin: 0 0; pointer-events: none;
    }
    .num {
      position: absolute; top: 16px; left: 16px; background: var(--bg); color: var(--gold);
      font-family: var(--serif); font-style: italic; font-size: 18px; padding: 4px 12px;
    }
    .meta { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
    .name { font-family: var(--serif); font-size: 34px; font-weight: 400; line-height: 1; }
    .visit { font-size: 11px; letter-spacing: .18em; text-transform: uppercase; color: var(--muted); }
  `,
})
export class Projects {
  private readonly sanitizer = inject(DomSanitizer);
  // The URLs are our own constants, so trusting them for the iframe previews is safe.
  protected readonly projects = PROJECTS.map((p) => ({
    ...p,
    safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(p.url),
  }));
}
