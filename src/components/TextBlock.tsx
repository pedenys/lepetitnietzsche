import styled from 'styled-components'

const TextBlockContainer = styled.div`
    h2 {
        font-size:2.4rem;
        color: ${props => props.theme.colors.blue};
        line-height: 1.3em;
        margin-bottom:1rem;
        font-weight:500;
    }
    p {
        font-size:inherit;
        margin-top:0;
        line-height:1.7;
        margin-bottom: ${props => props.theme.mbBetweenParagraphs};
        a {
            font-weight: 400;
            color: royalblue;
        }
    }
    p:last-of-type{
        margin-bottom:4rem;
    }

    /* Mobile */
    @media screen and (max-width:600px) {
        h2{
            font-size:2rem;
        }
    }
`

type TextBlockProps = {
    question: string,
    answer: string
}

const TextBlock: React.FunctionComponent<TextBlockProps> = ({ question, answer }) => {
    return (
        <TextBlockContainer>
            <h2 dangerouslySetInnerHTML={{ __html: question }} />
            <p dangerouslySetInnerHTML={{ __html: answer }} />
        </TextBlockContainer>
    )
}

export default TextBlock
