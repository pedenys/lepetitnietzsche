import { useState } from 'react';
import type { RichTextField } from '@prismicio/client';
import { asText } from '@prismicio/client';
import Blockquote from './Blockquote';
import FadeUI from '@ui/FadeUI';
import './Quote.css';

interface QuoteProps {
  quote: string;
  title: string;
  explanations: RichTextField;
}

const Quote = ({ explanations, quote, title }: QuoteProps) => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = (): void => {
    setShowParagraph((prev) => !prev);
  };

  // Convert RichTextField to array of text
  const explanationTexts = explanations
    ? explanations.map((block) => asText([block]))
    : [];

  return (
    <div className="quote-container">
      <Blockquote
        title={title}
        quote={quote}
        toggleParagraph={toggleParagraph}
        showParagraph={showParagraph}
      />

      <FadeUI show={showParagraph}>
        {explanationTexts.length > 0 && showParagraph ? (
          <div className="paragraph-container">
            {explanationTexts.map((text) => (
              <p key={text.substring(0, 50)}>{text}</p>
            ))}
          </div>
        ) : null}
      </FadeUI>
    </div>
  );
};

export default Quote;
