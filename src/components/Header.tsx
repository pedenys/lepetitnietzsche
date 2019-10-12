import Link from 'next/link'
import strings from '../resources/strings'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    h1 {
        letter-spacing: -0.1rem;
        font-size: 7rem;
        font-weight: 400;
        color: ${props => props.theme.colors.blue};
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 2rem;
        a:hover {
            color: ${props => props.theme.colors.blue} !important;
        }
        a:visited {
            color: inherit;
        }
    }
    /* Mobile */
    @media screen and (max-width: ${props => props.theme.mobileBreakpoint}) {
        h1 {
            font-size: 4rem;
        }
    }
`

const Header: React.FunctionComponent = () => (
    <HeaderContainer>
        <h1>
            <Link href="/">
                <a>{strings.siteTitle}</a>
            </Link>
        </h1>
    </HeaderContainer>
)

export default Header
