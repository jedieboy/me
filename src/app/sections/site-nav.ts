import { Component, ElementRef, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { MotionService } from '../core/motion.service';

@Component({
  selector: 'app-site-nav',
  host: { '(document:keydown.escape)': 'menuOpen.set(false)' },
  template: `
    <div #progress class="progress"></div>

    <nav #nav class="nav">
      <div class="nav-inner">
        <a href="#top" class="brand">Jedie Boy Calut</a>
        <div class="links">
          @for (l of links; track l.href) {
            <a [href]="l.href">{{ l.label }}</a>
          }
        </div>
        <button
          type="button"
          class="menu-btn"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="mobile-menu"
          (click)="menuOpen.set(!menuOpen())"
        >
          {{ menuOpen() ? 'Close' : 'Menu' }}
        </button>
      </div>
    </nav>

    @if (menuOpen()) {
      <div id="mobile-menu" class="overlay">
        @for (l of links; track l.href) {
          <a [href]="l.href" [class.accent]="$last" (click)="menuOpen.set(false)">{{ l.label }}</a>
        }
      </div>
    }
  `,
  styles: `
    .progress {
      position: fixed; top: 0; left: 0; height: 2px; width: 0;
      background: var(--gold); z-index: 30;
    }
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 20;
      border-bottom: 1px solid transparent;
      transition: background .5s ease, border-color .5s ease;
    }
    .nav.scrolled {
      background: rgba(14, 13, 11, .86);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom-color: var(--line);
    }
    .nav-inner {
      max-width: 1280px; margin: 0 auto; padding: 22px var(--gutter);
      display: flex; justify-content: space-between; align-items: center; gap: 16px;
    }
    .brand { font-family: var(--serif); font-size: 26px; font-style: italic; letter-spacing: .01em; }
    .links {
      display: flex; gap: 40px; font-size: 12px; text-transform: uppercase;
      letter-spacing: .22em; font-weight: 500;
    }
    .menu-btn {
      display: none;
      background: none; border: 1px solid var(--line-strong); color: var(--ink);
      font-family: var(--sans); font-size: 11px; letter-spacing: .22em; text-transform: uppercase;
      padding: 12px 18px; border-radius: 999px; cursor: pointer; min-height: 44px;
    }
    .overlay {
      position: fixed; inset: 0; z-index: 15; background: var(--bg);
      display: flex; flex-direction: column; justify-content: center; gap: 12px; padding: 0 32px;
    }
    .overlay a { font-family: var(--serif); font-size: 56px; font-weight: 300; line-height: 1.1; }
    .overlay a.accent { font-style: italic; color: var(--gold); }

    @media (max-width: 819.98px) {
      .links { display: none; }
      .menu-btn { display: inline-block; }
    }
    @media (min-width: 820px) {
      .overlay { display: none; }
    }
  `,
})
export class SiteNav {
  protected readonly menuOpen = signal(false);
  protected readonly links = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Experience' },
    { href: '#projects', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  private readonly nav = viewChild.required<ElementRef<HTMLElement>>('nav');
  private readonly progress = viewChild.required<ElementRef<HTMLElement>>('progress');

  constructor() {
    const motion = inject(MotionService);
    afterNextRender(() => {
      motion.setNav(this.nav().nativeElement);
      motion.setProgress(this.progress().nativeElement);
      // Leaving the mobile breakpoint closes the menu, as in the design.
      const mq = matchMedia('(max-width: 819.98px)');
      mq.addEventListener('change', () => this.menuOpen.set(false));
    });
  }
}
