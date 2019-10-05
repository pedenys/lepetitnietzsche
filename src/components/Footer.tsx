import Link from 'next/link'
import styled from 'styled-components'

type FooterProps = {
    year: string
}

const FooterContainer = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    justify-content:center;
    a {
        margin-right:2rem;
    }
    a:last-of-type {
        margin-right: 0rem;
    }
`

const Footer: React.FunctionComponent<FooterProps> = ({ year }) => {
    return (
        <FooterContainer>
            <footer>
                <Link href="/licence"><a>© {year} CC-BY-SA 4.0</a></Link>
                <Link href="/about"><a>À propos</a></Link>
                <a href="https://twitter.com/apolineaire">🐦</a>
            </footer>
        </FooterContainer>
    )
}

export default Footer