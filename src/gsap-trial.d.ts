/// <reference types="gsap" />

declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: gsap.DOMTarget, vars?: any);
    readonly chars: Element[];
    readonly lines: Element[];
    readonly words: Element[];
    readonly elements: Element[];
    revert(): void;
    split(vars: any): SplitText;
  }
  export default SplitText;
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static get(): ScrollSmoother;
    static refresh(all?: boolean): void;
    readonly scrollTrigger: any;
    readonly offset: number;
    scrollTop(): number;
    scrollTop(value: number): void;
    paused(): boolean;
    paused(state: boolean): ScrollSmoother;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    kill(): void;
  }
  export default ScrollSmoother;
}
