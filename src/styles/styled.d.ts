// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            black: string,
            blue: string,
            gray: string,
            white: string
        }
        mb: string,
        borderWide: string,
        maxWidth: string,
        mbBetweenParagraphs: string,
        mobileBreakpoint: string
    }
}