import React from 'react'
import FadeUI from './UI/FadeUI'

interface BlockQuoteProps {
    title: string
    quote: string
    showParagraph: boolean
    toggleParagraph: () => void
}

export class Blockquote extends React.Component<BlockQuoteProps> {
    constructor(props: BlockQuoteProps) {
        super(props)
    }

    blockquoteRef: any

    toggleParagraph = (): void => {
        this.props.toggleParagraph()
    }

    render() {
        return (
            <div
                onClick={() => this.toggleParagraph()}
                style={{ cursor: 'pointer' }}
            >
                <blockquote>
                    <h2>{this.props.title}</h2>
                    <FadeUI show={!this.props.showParagraph}>
                        {!this.props.showParagraph ? (
                            <p> -> {this.props.quote}</p>
                        ) : null}
                    </FadeUI>
                </blockquote>
            </div>
        )
    }
}

export default Blockquote
