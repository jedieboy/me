import { Component } from '@angular/core';
import { Reveal } from '../core/motion.directives';

@Component({
  selector: 'app-background',
  imports: [Reveal],
  template: `
    <section class="wrap background">
      <div class="col" appReveal>
        <span class="label gold">04 · Education</span>
        <span class="degree">B.S. Computer Science</span>
        <span class="school">New Era University, Quezon City — Graduated 2015</span>
      </div>
      <div class="col" appReveal="120">
        <span class="label gold">05 · Languages</span>
        <div class="langs">
          @for (lang of languages; track lang) {
            <div class="lang">
              <span class="lang-name">{{ lang }}</span>
              <span class="level">Speaking · Reading · Writing — Excellent</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .background {
      padding-top: clamp(80px, 10vw, 140px); padding-bottom: clamp(80px, 10vw, 140px);
      display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
      gap: clamp(48px, 6vw, 96px);
    }
    .col { display: flex; flex-direction: column; gap: 20px; }
    .degree { font-family: var(--serif); font-size: clamp(36px, 3.6vw, 52px); line-height: 1; font-weight: 300; }
    .school { font-size: 15px; color: var(--muted); font-weight: 300; }
    .langs { display: flex; flex-direction: column; }
    .lang {
      display: flex; justify-content: space-between; align-items: baseline; gap: 16px; flex-wrap: wrap;
      padding: 16px 0; border-bottom: 1px solid var(--line);
    }
    .lang-name { font-family: var(--serif); font-size: 30px; font-weight: 400; }
    .level { font-size: 11px; letter-spacing: .18em; text-transform: uppercase; color: var(--muted); }
  `,
})
export class Background {
  protected readonly languages = ['English', 'Filipino'];
}
