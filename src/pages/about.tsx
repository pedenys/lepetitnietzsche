import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import TextBlock from '../components/TextBlock'
import strings from '../resources/strings'

const title: string = 'À propos'

const About: React.FunctionComponent = () => {
    const s = strings.about

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
            <TextBlock
                question={s[3].q}
                answer={s[3].a}
            />
            <TextBlock
                question={s[4].q}
                answer={s[4].a}
            />
            <TextBlock
                question={s[5].q}
                answer={s[5].a}
            />
        </Layout>
    )
}
export default About
