import { Deck, Slide } from '@revealjs/react';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './styles/custom.css';

import { orderedSlides } from './slides';
import { useOverflowGuard } from './components/hooks/useOverflowGuard';

export function Presentation() {
  useOverflowGuard();
  return (
    <div
      style={{
        height: '100%',
        ['--slide-total' as string]: `'${orderedSlides.length}'`,
      }}
    >
      <Deck
        plugins={[RevealHighlight]}
        config={{
          view: 'scroll',
          scrollActivationWidth: null,
          scrollSnap: 'mandatory',
          scrollProgress: 'auto',
          hash: true,
          controls: false,
          progress: true,
          slideNumber: 'c/t',
          width: 1280,
          height: 720,
        }}
      >
        {orderedSlides.map(({ key, Component }) => (
          <Slide key={key}>
            <Component />
          </Slide>
        ))}
      </Deck>
    </div>
  );
}
