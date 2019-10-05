import Head from 'next/head'

type MetaProps = {
    title?: string
}

const Meta: React.FunctionComponent<MetaProps> = ({ title }) =>
    <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

export default Meta