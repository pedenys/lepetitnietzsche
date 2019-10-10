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

class Quote extends React.Component<QuoteProps> {
    constructor(props:QuoteProps){
        super(props);
        this.pRef = React.createRef()
    }
    
    state = {
        showParagraph:false
    }

    pRef:any

    _renderAnswer = ():JSX.Element[] => {
        let copy = {...this.props.answer};
        let arrayOfPargraph = Object.values(copy);
        return arrayOfPargraph.map((paragraph:any) => <p>{paragraph}</p>)
    }

    toggleParagraph = ():void => {
        this.setState({
            showParagraph:!this.state.showParagraph
        }, 
        () => {
            if(this.pRef) {
                console.log('👨‍🚀',this.pRef)
                window.scroll(0,this.pRef.offsetHeight)
            }
        })
    }

    render(){
        const props = this.props
        const {showParagraph} = this.state

        return (
            <QuoteContainer>
            <Blockquote 
                title={props.title}
                quote={props.quote}
                toggleParagraph={this.toggleParagraph} 
                showParagraph={this.state.showParagraph}
                />
                <div ref={this.pRef}>
            {
                props.answer && showParagraph ?
                
                <ParagraphContainer>
                    {this._renderAnswer()}
                </ParagraphContainer>
                :
                null
            }
            </div>
        </QuoteContainer>
    )
}
}

export default Quote
