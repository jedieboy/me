import { Component } from '@angular/core';
import { Reveal } from '../core/motion.directives';

@Component({
  selector: 'app-contact',
  imports: [Reveal],
  template: `
    <footer id="contact" class="contact">
      <div class="wrap inner">
        <div class="pitch" appReveal>
          <span class="label kicker">06 · Contact</span>
          <h2>Let's build<br /><em>something.</em></h2>
          <a class="email" href="mailto:jedieboycalut@gmail.com">jedieboycalut&#64;gmail.com</a>
        </div>
        <div class="details" appReveal="120">
          <div class="detail">
            <span class="key">Phone</span>
            <a href="tel:+639101197324">0910-119-7324</a>
            <a href="tel:+639396621378">+63 939 662 1378</a>
          </div>
          <div class="detail">
            <span class="key">LinkedIn</span>
            <a href="https://www.linkedin.com/in/jedie-boy-c-258977b5" target="_blank" rel="noopener">jedie-boy-c-258977b5 ↗</a>
          </div>
          <div class="detail">
            <span class="key">Location</span>
            <span>Sorsogon City, Philippines</span>
          </div>
        </div>
        <div class="legal">
          <span>© {{ year }} Jedie Boy Calut</span><a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .contact { position: relative; background: var(--ink); color: var(--bg); overflow: hidden; }
    .inner {
      padding-top: var(--section-y); padding-bottom: 40px;
      display: flex; flex-direction: column; gap: clamp(56px, 8vw, 112px);
    }
    a { color: var(--bg); }
    a:hover { color: var(--bronze); }
    .pitch { display: flex; flex-direction: column; gap: 28px; }
    .kicker { color: var(--bronze); font-weight: 600; }
    h2 { margin: 0; font-family: var(--serif); font-size: clamp(56px, 9vw, 140px); line-height: .88; font-weight: 300; }
    h2 em { color: var(--bronze); }
    .email {
      align-self: flex-start; font-family: var(--serif); font-size: clamp(24px, 3vw, 40px);
      font-style: italic; border-bottom: 1px solid var(--bg); padding-bottom: 6px; word-break: break-word;
      transition: color .4s ease, border-color .4s ease;
    }
    .email:hover { border-color: var(--bronze); }
    .details {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
      gap: 32px; font-size: 16px;
    }
    .detail { display: flex; flex-direction: column; gap: 8px; }
    .key { font-size: 11px; text-transform: uppercase; letter-spacing: .22em; color: var(--brown); font-weight: 600; }
    .legal {
      display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; padding-top: 28px;
      border-top: 1px solid var(--rule); font-size: 12px; letter-spacing: .1em; color: var(--brown);
    }
  `,
})
export class Contact {
  protected readonly year = new Date().getFullYear();
}
