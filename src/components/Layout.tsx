import * as React from 'react'
import Meta from './Meta'
import Footer from './Footer'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyleTHeme from '../styles/GlobalStyleTheme'
import myTheme from '../styles/myTheme'
import Header from './Header'


type layoutProps = {
    title?: string
}

const LayoutContainer = styled.div`
    max-width:${props => props.theme.maxWidth};
    width: 100%;
    margin: 2rem auto;
`
const LayoutInner = styled.div`
    margin: 0 4rem;
    @media screen and (max-width: ${props => props.theme.mobileBreakpoint}){
        margin: 0 1.6rem;
    }
`



const Layout: React.FunctionComponent<layoutProps> = ({ title, children }) => {

    const year = (new Date().getFullYear()).toString()

    return (
        <ThemeProvider theme={myTheme}>
            <LayoutContainer>
                <header>
                    <Meta title={title} />
                </header>
                <Header />
                <LayoutInner>
                    {children}
                </LayoutInner>
                <Footer year={year} />
                <GlobalStyleTHeme />
            </LayoutContainer>
        </ThemeProvider>
    )
}
export default Layout
