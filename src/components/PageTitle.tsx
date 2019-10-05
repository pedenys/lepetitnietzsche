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
    }
    @media screen and (max-width: ${props => props.theme.mobileBreakpoint}){
        min-width:100%;
        width:100%;
        /* margin: 0; */
        p {
            font-size:2rem;
            line-height:1;
        }
    }
`

type PageTitleProps = {
    title?: string,
    subTitle?: string
}

const PageTitle: React.FunctionComponent<PageTitleProps> = ({ title, subTitle }) => {

    return (
        <PageTitleContainer>
            <PageTitleInner
                title={title}
                subTitle={subTitle}
            >
                <p dangerouslySetInnerHTML={{ __html: title ? title : subTitle ? subTitle : ' ' }} />
            </PageTitleInner>
        </PageTitleContainer>
    )
}

export default PageTitle
