import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import TextBlock from "../components/TextBlock";
import strings from "../resources/strings";

const title: string = "À propos";

const About = () => {
  const aboutStrings = strings.about;

  return (
    <Layout title={title}>
      <PageTitle title={title} />
      <TextBlock question={aboutStrings[1].q} answer={aboutStrings[1].a} />
      <TextBlock question={aboutStrings[2].q} answer={aboutStrings[2].a} />
      <TextBlock question={aboutStrings[3].q} answer={aboutStrings[3].a} />
      <TextBlock question={aboutStrings[4].q} answer={aboutStrings[4].a} />
      <TextBlock question={aboutStrings[5].q} answer={aboutStrings[5].a} />
    </Layout>
  );
};
export default About;
