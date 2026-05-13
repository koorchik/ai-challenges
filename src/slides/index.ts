import type { ComponentType } from 'react';

// Auto-discover every Slide-NN.tsx file in this directory and sort by name.
// Adding a slide = create Slide-51.tsx. Reordering = renaming a file.
const modules = import.meta.glob('./Slide-*.tsx', { eager: true }) as Record<
  string,
  Record<string, ComponentType>
>;

export const orderedSlides = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const key = path.match(/Slide-(\d+)/)?.[1] ?? path;
    const Component = Object.values(mod)[0];
    return { key, Component };
  });
