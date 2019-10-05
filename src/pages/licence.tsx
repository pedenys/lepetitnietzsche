import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import TextBlock from '../components/TextBlock'
import strings from '../resources/strings'

const title = 'Licence'

const Licence: React.FunctionComponent = () => {

    const s = strings.licence

    return (
        <Layout title={title}>
            <PageTitle title={title} />
            <TextBlock
                question={s[1].q}
                answer={s[1].a}
            />
            <TextBlock
                question={s[2].q}
                answer={s[2].a}
            />
        </Layout>
    )
}

export default Licence
