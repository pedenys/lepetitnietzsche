import styled from 'styled-components'

const PageTitleContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-content: center;
    align-content:center;

    margin-bottom: 4rem;
`

const PageTitleInner = styled.div<PageTitleProps>`
    background-color: ${props => props.subTitle ? props.theme.colors.gray : props.title ? props.theme.colors.white : props.theme.colors.white};
    border: ${props => props.theme.borderWide};
    min-width: ${props => props.subTitle ? '40%' : '100%'};
    max-width: 100%;
    width:${props => props.title ? '100%' : '80%'} ;
    p {
        font-family:'Eczar';
        text-align: center;
        font-size:${props => props.subTitle ? '1.6rem' : props.title ? '2.6rem' : '1.6rem'};
        margin:${props => props.subTitle ? '0.3rem' : props.title ? '0' : '0'};
        padding:0.1rem 0;
        color:${props => props.theme.colors.blue};
        font-weight:${props => props.title ? '500' : '200'};
        line-height:2rem;
    }
    @media screen and (max-width: ${props => props.theme.mobileBreakpoint}){
        min-width:100%;
        width:100%;
        p {
            font-size:1.6rem;
            line-height:1;
            padding:1rem 0;
        }
    }
`

type PageTitleProps = {
    title?: any,
    subTitle?: string | string[],

}

const PageTitle: React.FunctionComponent<PageTitleProps> = ({ title, subTitle }) => {

    // if multiple paragraphs to render, map over it
    const _renderTextContent = (arg: string | string[]) => {
        if (typeof arg === 'object') {
            const arrayOfArg = Object.values(arg)
            return arrayOfArg.length && arrayOfArg.length > 1 ? arrayOfArg.map(p => <p>{p}</p>) : null
        }
        else if (typeof arg === 'string') {
            return <p>{arg}</p>
        }
    }

    return (
        <PageTitleContainer>
            <PageTitleInner
                title={title}
                subTitle={subTitle}
            >
                {_renderTextContent(title ? title : subTitle ? subTitle : ' ')}
            </PageTitleInner>
        </PageTitleContainer>
    )
}

export default PageTitle
