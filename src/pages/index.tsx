import React from 'react'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import strings from '../resources/strings'
import Quote from '../components/Quote'

const Index: React.FunctionComponent = () => {
    const quote = strings.quotes
    return (
        <Layout title="Le Petit Nietzsche">
            <PageTitle subTitle={strings.howto} />
            <Quote 
                title={quote[1].t}
                quote={quote[1].q}
                answer={quote[1].a}
            />
            <Quote 
                title={quote[2].t}
                quote={quote[2].q}
                answer={quote[2].a}
            />
            <Quote 
                title={quote[3].t}
                quote={quote[3].q}
                answer={quote[3].a}
            />
            <Quote 
                title={quote[4].t}
                quote={quote[4].q}
                answer={quote[4].a}
            />
            <Quote 
                title={quote[5].t}
                quote={quote[5].q}
                answer={quote[5].a}
            />
        </Layout>
    )
}
export default Index
