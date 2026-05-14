import type { ComponentType } from 'react';

import { slides as intro } from './01-intro';
import { slides as challenges } from './02-challenges';
import { slides as generalIdeas } from './03-general-ideas';
import { slides as students } from './04-students';
import { slides as developers } from './05-developers';
import { slides as businesses } from './06-businesses';
import { slides as ukraine } from './07-ukraine';
import { slides as closing } from './08-closing';

const allSlides: ComponentType[] = [
  ...intro,
  ...challenges,
  ...generalIdeas,
  ...students,
  ...developers,
  ...businesses,
  ...ukraine,
  ...closing,
];

export const orderedSlides = allSlides.map((Component, i) => ({
  key: `${String(i + 1).padStart(2, '0')}-${Component.displayName ?? Component.name ?? 'Slide'}`,
  Component,
}));
