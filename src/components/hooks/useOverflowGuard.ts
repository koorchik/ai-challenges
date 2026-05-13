import { useEffect } from 'react';

const SLIDE_HEIGHT = 720;

export function useOverflowGuard(enabled = import.meta.env.DEV) {
  useEffect(() => {
    if (!enabled) return;

    const check = () => {
      document.querySelectorAll<HTMLElement>('.reveal section').forEach((slide) => {
        const h = slide.scrollHeight;
        const overflowing = h > SLIDE_HEIGHT;
        slide.classList.toggle('is-overflowing', overflowing);
        if (overflowing) slide.setAttribute('data-overflow', `${h - SLIDE_HEIGHT}`);
        else slide.removeAttribute('data-overflow');
      });
    };

    const ro = new ResizeObserver(check);
    document.querySelectorAll('.reveal section').forEach((s) => ro.observe(s));

    const mo = new MutationObserver(check);
    mo.observe(document.body, { childList: true, subtree: true, characterData: true });

    window.addEventListener('resize', check);
    check();

    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener('resize', check);
    };
  }, [enabled]);
}
