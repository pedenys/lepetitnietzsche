import React from 'react'


interface BlockQuoteProps {
    title:string,
    quote:string,
    showParagraph:boolean,
    toggleParagraph: ()=> void
}

export class Blockquote extends React.Component<BlockQuoteProps> {
    constructor(props:BlockQuoteProps){
        super(props);
        this.blockquoteRef = React.createRef()
    }

    blockquoteRef:any

    handleBlockQuoteHeight = ():void => {
        console.log('ref current', this.blockquoteRef)
    }

    toggleParagraph =  ():void => {
        if(!this.props.showParagraph){
            window.scroll(0,this.blockquoteRef.current.offsetHeight)
        }
        else{
            window.scroll(0,this.blockquoteRef.current.offsetHeight)
        }
        this.props.toggleParagraph()
    }
 
    render() {
        
        return (
            <div
                onClick={() => this.toggleParagraph()}
            >
                <blockquote 
                    ref={this.blockquoteRef} 
                >
                <h2>{this.props.title}</h2>
                <p>-> {this.props.quote}</p>
            </blockquote>
            </div>
        )
    }
}

export default Blockquote
