import { Component } from '@angular/core';
import { Parallax, Reveal } from '../core/motion.directives';

@Component({
  selector: 'app-quote-band',
  imports: [Reveal, Parallax],
  template: `
    <section class="band">
      <img appParallax="-0.25" src="assets/jedie.png" alt="" />
      <div class="center">
        <p appReveal>Convert mock-up designs into functional and user-friendly applications.</p>
      </div>
    </section>
  `,
  styles: `
    .band { position: relative; height: clamp(320px, 55vw, 620px); overflow: hidden; }
    img {
      position: absolute; left: 0; top: -25%; width: 100%; height: 150%; object-fit: cover;
      object-position: 50% 35%; filter: grayscale(1) brightness(.35);
    }
    .center { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; padding: 0 24px; }
    p {
      margin: 0; max-width: 960px; text-align: center; font-family: var(--serif);
      font-size: clamp(32px, 5vw, 72px); line-height: 1.1; font-weight: 300; font-style: italic;
      text-wrap: balance;
    }
  `,
})
export class QuoteBand {}
