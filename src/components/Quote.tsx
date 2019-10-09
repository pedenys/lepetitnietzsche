import {useState} from 'react'
import React from 'react'
import styled from 'styled-components'
import Blockquote from './Blockquote'

const QuoteContainer = styled.div`
margin-bottom: 6rem;
blockquote{
        border-radius:5px;
        background-color:${props => props.theme.colors.gray};
        border-left: 5px solid ${props => props.theme.colors.blue};
        font-family:"Space Mono", monospace;
        margin:3rem 0;
        padding-left: 2rem;
        h2{
            font-size:2.2rem;
            color: ${props => props.theme.colors.blue};
            margin: 1rem 0;
            padding: 1rem 0 0 0;
        }
        p{
            margin: 0 0 2rem 0;
            padding: 0 0 2rem 0;
            line-height:1.2;
            font-size:2rem;
        }
    }
`

const ParagraphContainer = styled.div`
    p{
        font-size:2rem;
        line-height:1.6;
    }
`

interface QuoteProps {
    quote:string,
    title:string,
    answer:any,
}

const Quote:any = (props:QuoteProps) => {

    const [showParagraph, toggleParagraph] = useState(false)
    // const [blockHeight, storeBlockHeight] = useState(0)

    const _renderAnswer = ():JSX.Element[] => {
        let copy = {...props.answer};
        let arrayOfPargraph = Object.values(copy);
        return arrayOfPargraph.map((paragraph:any) => <p>{paragraph}</p>)
    }

    return (
        <QuoteContainer>
            <Blockquote 
                title={props.title}
                quote={props.quote}
                toggleParagraph={toggleParagraph} 
                showParagraph={showParagraph}
            />
            {
                props.answer && showParagraph ?
                <ParagraphContainer>
                {_renderAnswer()}
                </ParagraphContainer>
                :
                null
            }
        </QuoteContainer>
    )
}

export default Quote
