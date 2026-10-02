import { Injectable, OnDestroy } from '@angular/core';

interface PendingReveal {
  el: HTMLElement;
}

/**
 * One requestAnimationFrame loop drives every scroll effect on the page:
 * parallax layers, the stack marquee, the reading-progress bar, the nav
 * backdrop and scroll-triggered reveals.
 */
@Injectable({ providedIn: 'root' })
export class MotionService implements OnDestroy {
  readonly enabled =
    typeof matchMedia !== 'undefined' && !matchMedia('(prefers-reduced-motion: reduce)').matches;

  private readonly parallax = new Map<HTMLElement, number>();
  private readonly reveals = new Set<PendingReveal>();
  private marquee?: HTMLElement;
  private marqueeX = 0;
  private progress?: HTMLElement;
  private nav?: HTMLElement;
  private navScrolled: boolean | null = null;
  private raf = 0;

  start(): void {
    if (this.raf) return;
    const tick = () => {
      this.frame();
      this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
  }

  addParallax(el: HTMLElement, speed: number): () => void {
    this.parallax.set(el, speed);
    return () => this.parallax.delete(el);
  }

  setMarquee(el: HTMLElement | undefined): void {
    this.marquee = el;
  }

  setProgress(el: HTMLElement): void {
    this.progress = el;
  }

  setNav(el: HTMLElement): void {
    this.nav = el;
  }

  /** Hides the element until it scrolls into view. Elements already on screen stay put. */
  addReveal(el: HTMLElement, delay: number): () => void {
    if (!this.enabled || el.getBoundingClientRect().top < innerHeight * 0.94) return () => {};
    el.style.opacity = '0';
    el.style.transform = 'translate3d(0,48px,0)';
    el.style.transition = `opacity 1.2s var(--ease) ${delay}ms, transform 1.2s var(--ease) ${delay}ms`;
    const entry = { el };
    this.reveals.add(entry);
    return () => this.reveals.delete(entry);
  }

  private frame(): void {
    const vh = innerHeight;
    const y = scrollY;

    for (const entry of this.reveals) {
      if (entry.el.getBoundingClientRect().top < vh * 0.94) {
        entry.el.style.opacity = '1';
        entry.el.style.transform = 'none';
        this.reveals.delete(entry);
      }
    }

    if (this.enabled) {
      for (const [el, speed] of this.parallax) {
        const parent = el.parentElement;
        if (!parent) continue;
        const r = parent.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        const offset = (r.top + r.height / 2 - vh / 2) * speed;
        el.style.transform = `translate3d(0,${offset.toFixed(1)}px,0)`;
      }

      if (this.marquee) {
        const half = this.marquee.scrollWidth / 2;
        this.marqueeX -= 0.5;
        if (-this.marqueeX >= half) this.marqueeX += half;
        this.marquee.style.transform = `translate3d(${this.marqueeX}px,0,0)`;
      }
    }

    if (this.progress) {
      const max = Math.max(1, document.documentElement.scrollHeight - vh);
      this.progress.style.width = `${(y / max) * 100}%`;
    }

    if (this.nav) {
      const scrolled = y > 40;
      if (scrolled !== this.navScrolled) {
        this.navScrolled = scrolled;
        this.nav.classList.toggle('scrolled', scrolled);
      }
    }
  }
}
