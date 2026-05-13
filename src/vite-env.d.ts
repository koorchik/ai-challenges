/// <reference types="vite/client" />

declare module 'reveal.js' {
  const Reveal: unknown;
  export default Reveal;
}

declare module 'reveal.js/plugin/*' {
  const plugin: () => { id: string; init?: (deck: unknown) => void };
  export default plugin;
}
