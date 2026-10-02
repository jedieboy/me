import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { MotionService } from '../core/motion.service';
import { STACK } from '../core/content';

@Component({
  selector: 'app-stack-marquee',
  template: `
    <div class="band">
      <div #track class="track">
        @for (s of items; track $index) {
          <div class="item" [attr.aria-hidden]="$index >= half ? 'true' : null">
            <span>{{ s }}</span><span class="dot"></span>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    .band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); overflow: hidden; padding: 26px 0; }
    .track { display: flex; gap: 48px; width: max-content; align-items: center; will-change: transform; }
    .item {
      display: flex; align-items: center; gap: 48px; font-family: var(--serif);
      font-size: clamp(28px, 3vw, 42px); font-weight: 300; font-style: italic; white-space: nowrap;
    }
    .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); }
  `,
})
export class StackMarquee {
  protected readonly items = [...STACK, ...STACK];
  protected readonly half = STACK.length;
  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');

  constructor() {
    const motion = inject(MotionService);
    afterNextRender(() => motion.setMarquee(this.track().nativeElement));
    inject(DestroyRef).onDestroy(() => motion.setMarquee(undefined));
  }
}
