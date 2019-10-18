import React from 'react'
import styled from 'styled-components'
import Blockquote from './Blockquote'
import FadeUI from './UI/FadeUI'

const QuoteContainer = styled.div`
    margin-bottom: 6rem;
    blockquote {
        border-radius: 5px;
        background-color: ${props => props.theme.colors.gray};
        border-left: 5px solid ${props => props.theme.colors.blue};
        font-family: 'Space Mono', monospace;
        margin: 3rem 0;
        padding-left: 2rem;
        h2 {
            font-size: 2rem;
            color: ${props => props.theme.colors.blue};
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

    @media screen and (max-width: ${props => props.theme.mobileBreakpoint}) {
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
`

const ParagraphContainer = styled.div`
    /* background-color: ${props => props.theme.colors.gray} */
    p{
        margin-top:0;
        font-size:2rem;
        line-height:1.6;
        margin-left: 2rem;
        text-align:justify;
    }
    @media screen and (max-width: ${props => props.theme.mobileBreakpoint}){
        p{
            margin-left: 0;
            font-size:1.6rem;
        }
    }
`

interface QuoteProps {
    quote: string
    title: string
    answer: any
}

class Quote extends React.Component<QuoteProps> {
    constructor(props: QuoteProps) {
        super(props)
    }

    state = {
        showParagraph: false,
    }

    _renderAnswer = (): JSX.Element[] => {
        let copy = { ...this.props.answer }
        let arrayOfPargraph = Object.values(copy)
        return arrayOfPargraph.map((paragraph: any) => <p>{paragraph}</p>)
    }

    toggleParagraph = (): void => {
        this.setState({
            showParagraph: !this.state.showParagraph,
        })
    }

    render() {
        const props = this.props
        const { showParagraph } = this.state

        return (
            <QuoteContainer>
                <Blockquote
                    title={props.title}
                    quote={props.quote}
                    toggleParagraph={this.toggleParagraph}
                    showParagraph={this.state.showParagraph}
                />

                <FadeUI show={showParagraph}>
                    {props.answer && showParagraph ? (
                        <ParagraphContainer>
                            {this._renderAnswer()}
                        </ParagraphContainer>
                    ) : null}
                </FadeUI>
            </QuoteContainer>
        )
    }
}

export default Quote
