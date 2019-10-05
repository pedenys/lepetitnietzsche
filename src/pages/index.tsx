import React from 'react'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import strings from '../resources/strings'

const Index: React.FunctionComponent = () => {
    return (
        <Layout title="Le Petit Nietzsche">
            <PageTitle subTitle={strings.howto} />
            <p>HomePage👋</p>
        </Layout>
    )
}
export default Index
