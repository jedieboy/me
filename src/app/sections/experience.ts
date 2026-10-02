import { Component } from '@angular/core';
import { Reveal } from '../core/motion.directives';
import { JOBS } from '../core/content';

@Component({
  selector: 'app-experience',
  imports: [Reveal],
  template: `
    <section id="work" class="wrap work">
      <div class="row">
        <div class="side" appReveal>
          <span class="section-num">02</span>
          <h2 class="section-title">Employment<br /><em>Record</em></h2>
          <span class="label dim">2015 — Present</span>
        </div>
        <div class="list">
          @for (j of jobs; track j.company) {
            <article class="job" appReveal>
              <div class="head">
                <div class="who">
                  <h3>{{ j.company }}</h3>
                  <span class="role">{{ j.role }}</span>
                </div>
                <span class="period">{{ j.period }}</span>
              </div>
              <ul>
                @for (b of j.items; track $index) {
                  <li><span class="dash" aria-hidden="true">—</span><span>{{ b }}</span></li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .work { padding-top: var(--section-y); padding-bottom: var(--section-y); }
    .row { display: flex; flex-wrap: wrap; gap: clamp(40px, 5vw, 80px); align-items: flex-start; }
    .side {
      flex: 1 1 280px; position: sticky; top: 120px;
      display: flex; flex-direction: column; gap: 20px;
    }
    .dim { color: var(--dim); }
    .list { flex: 2 1 560px; display: flex; flex-direction: column; min-width: 0; }
    .job { display: flex; flex-direction: column; gap: 20px; padding: 40px 0; border-top: 1px solid var(--line); }
    .head { display: flex; justify-content: space-between; align-items: baseline; gap: 8px 24px; flex-wrap: wrap; }
    .who { display: flex; flex-direction: column; gap: 6px; }
    h3 { margin: 0; font-family: var(--serif); font-size: clamp(28px, 3vw, 40px); line-height: 1.05; font-weight: 400; }
    .role { font-size: 13px; letter-spacing: .14em; text-transform: uppercase; color: var(--gold); }
    .period { font-family: var(--serif); font-size: 20px; font-style: italic; color: var(--muted); }
    ul { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 12px; }
    li {
      display: grid; grid-template-columns: 20px minmax(0, 1fr); gap: 8px; font-size: 15px;
      line-height: 1.75; color: var(--muted); font-weight: 300; text-wrap: pretty;
    }
    .dash { color: var(--gold); }

    @media (max-width: 819.98px) {
      .side { position: relative; top: auto; }
    }
  `,
})
export class Experience {
  protected readonly jobs = JOBS;
}
