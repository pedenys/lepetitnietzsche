import { RichText, RichTextBlock } from "prismic-reactjs";
import React, { useState } from "react";
import styled from "styled-components";
import Blockquote from "./Blockquote";
import FadeUI from "./ui/FadeUI";

const QuoteContainer = styled.div`
  margin-bottom: 6rem;
  blockquote {
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.gray};
    border-left: 5px solid ${(props) => props.theme.colors.blue};
    font-family: "Space Mono", monospace;
    margin: 3rem 0;
    padding-left: 2rem;
    h2 {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.blue};
      margin: 1rem 0 0 0;
      padding: 1rem 0;
    }
    p {
      margin: 0 0 2rem 0;
      padding: 0 0 2rem 0;
      line-height: 1.3;
      font-size: 1.8rem;
      text-align: justify;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    margin-bottom: 3.5rem;
    & > * {
      cursor: wait !important;
    }
    blockquote {
      border-left: 0;
      h2 {
        font-size: 1.8rem;
        line-height: 2rem;
        margin-bottom: 0;
      }

      p {
        font-size: 1.6rem;
        line-height: 1.6rem;
        padding: 1rem 0;
        color: black;
        text-align: left;
      }
    }
  }
`;

const ParagraphContainer = styled.div`
  /* background-color: ${(props) => props.theme.colors.gray} */
  p {
    margin-top: 0;
    font-size: 2rem;
    line-height: 1.6;
    margin-left: 2rem;
    text-align: justify;
  }
  @media screen and (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    p {
      margin-left: 0;
      font-size: 1.6rem;
    }
  }
`;

interface QuoteProps {
  quote: string;
  title: string;
  explanations: RichTextBlock[];
}

const Quote = ({ explanations, quote, title }: QuoteProps) => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = (): void => {
    setShowParagraph(
      (previousValueForShowParagraph) => !previousValueForShowParagraph
    );
  };

  return (
    <QuoteContainer>
      <Blockquote
        title={title}
        quote={quote}
        toggleParagraph={toggleParagraph}
        showParagraph={showParagraph}
      />

      <FadeUI show={showParagraph}>
        {explanations && explanations.length > 0 && showParagraph ? (
          <ParagraphContainer>
            {explanations.map((explanation) => (
              <p>{RichText.asText([explanation])}</p>
            ))}
          </ParagraphContainer>
        ) : null}
      </FadeUI>
    </QuoteContainer>
  );
};

export default Quote;
