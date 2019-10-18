import { createGlobalStyle } from 'styled-components'

const GlobalStyleTHeme = createGlobalStyle`
    /* Fonts declaration */
    @font-face {
    font-family: 'Space Mono';
    src: url('/static/fonts/SpaceMono-BoldItalic.woff2') format('woff2'),
        url('/static/fonts/SpaceMono-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    }

    @font-face {
        font-family: 'Space Mono';
        src: url('/static/fonts/SpaceMono-Italic.woff2') format('woff2'),
            url('/static/fonts/SpaceMono-Italic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'Eczar';
        src: url('/static/fonts/Eczar-Bold.woff2') format('woff2'),
            url('/static/fonts/Eczar-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Eczar';
        src: url('/static/fonts/Eczar-Medium.woff2') format('woff2'),
            url('/static/fonts/Eczar-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Eczar';
        src: url('/static/fonts/Eczar-Regular.woff2') format('woff2'),
            url('/static/fonts/Eczar-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Eczar';
        src: url('/static/fonts/Eczar-ExtraBold.woff2') format('woff2'),
            url('/static/fonts/Eczar-ExtraBold.woff') format('woff');
        font-weight: 800;
        font-style: normal;
    }

    @font-face {
        font-family: 'Space Mono';
        src: url('/static/fonts/SpaceMono-Bold.woff2') format('woff2'),
            url('/static/fonts/SpaceMono-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Space Mono';
        src: url('/static/fonts/SpaceMono-Regular.woff2') format('woff2'),
            url('/static/fonts/SpaceMono-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Eczar';
        src: url('/static/fonts/Eczar-SemiBold.woff2') format('woff2'),
            url('/static/fonts/Eczar-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    }

    html{
        box-sizing:border-box;
        font-size:10px;
        scroll-behavior:smooth;
    }
    *, *:before,*:after{
        box-sizing:inherit;
    }
    body{
        padding:0;
        margin:0;
        font-family:'Eczar';
        font-size:1.8rem;
        line-height:2;
        color: ${props => props.theme.colors.black};
    }
    a {
        text-decoration:none;
        color: '#000'
    }
    a:hover{
        color:${props => props.theme.colors.black} !important;
    }
    a:visited{
        color: ${props => props.theme.colors.lightblue}     ;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`

export default GlobalStyleTHeme
