import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
  numberAttribute,
} from '@angular/core';
import { MotionService } from './motion.service';

/** Fades and lifts the element in once it enters the viewport. `appReveal="120"` sets a delay in ms. */
@Directive({ selector: '[appReveal]' })
export class Reveal {
  readonly delay = input(0, { alias: 'appReveal', transform: (v: unknown) => numberAttribute(v, 0) });

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const motion = inject(MotionService);
    let remove = () => {};
    // Wait a beat so layout (fonts, images) has settled before measuring.
    afterNextRender(() => {
      const timer = setTimeout(() => (remove = motion.addReveal(el, this.delay())), 30);
      remove = () => clearTimeout(timer);
    });
    inject(DestroyRef).onDestroy(() => remove());
  }
}

/** Shifts the element vertically relative to its parent as the page scrolls. */
@Directive({ selector: '[appParallax]' })
export class Parallax {
  readonly speed = input.required({ alias: 'appParallax', transform: numberAttribute });

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const motion = inject(MotionService);
    let remove = () => {};
    afterNextRender(() => (remove = motion.addParallax(el, this.speed())));
    inject(DestroyRef).onDestroy(() => remove());
  }
}
