import FadeUI from '@ui/FadeUI';

interface BlockquoteProps {
  title: string;
  quote: string;
  showParagraph: boolean;
  toggleParagraph: () => void;
}

const Blockquote = ({
  title,
  quote,
  showParagraph,
  toggleParagraph,
}: BlockquoteProps) => {
  return (
    <button
      type="button"
      onClick={toggleParagraph}
      style={{
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: 0,
        width: '100%',
        textAlign: 'left',
      }}
    >
      <blockquote>
        <h2>{title}</h2>
        <FadeUI show={!showParagraph}>
          {!showParagraph ? <p> &gt; {quote}</p> : null}
        </FadeUI>
      </blockquote>
    </button>
  );
};

export default Blockquote;
