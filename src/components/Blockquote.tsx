import React from 'react'


interface BlockQuoteProps {
    title:string,
    quote:string,
    showParagraph:boolean,
    toggleParagraph: () => {}
}

export class Blockquote extends React.Component {
    constructor(props:BlockQuoteProps){
        super(props);
        this.blockquoteRef = React.createRef()
    }

    blockquoteRef:any

    handleBlockQuoteHeight = (ref:any):void => {
        console.log('ref current', ref)
        // console.log('ref', ref.offsetHeight())
        // storeBlockHeight(blockHeight)
    }

    toggleParagraph =  ():void => {
        console.log("🥉",this.blockquoteRef.current)
    }
 
    render() {
        
        return (
            <div
                onClick={this.toggleParagraph}
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
