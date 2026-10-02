import { Component, afterNextRender, inject } from '@angular/core';
import { MotionService } from './core/motion.service';
import { SiteNav } from './sections/site-nav';
import { Hero } from './sections/hero';
import { StackMarquee } from './sections/stack-marquee';
import { About } from './sections/about';
import { QuoteBand } from './sections/quote-band';
import { Experience } from './sections/experience';
import { Projects } from './sections/projects';
import { Background } from './sections/background';
import { Contact } from './sections/contact';

@Component({
  selector: 'app-root',
  imports: [SiteNav, Hero, StackMarquee, About, QuoteBand, Experience, Projects, Background, Contact],
  template: `
    <div class="page">
      <app-site-nav />
      <main>
        <app-hero />
        <app-stack-marquee />
        <app-about />
        <app-quote-band />
        <app-experience />
        <app-projects />
        <app-background />
      </main>
      <app-contact />
    </div>
  `,
  styles: `
    .page { background: var(--bg); min-height: 100vh; overflow-x: hidden; }
  `,
})
export class App {
  constructor() {
    const motion = inject(MotionService);
    afterNextRender(() => motion.start());
  }
}
