import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import TextBlock from "../components/TextBlock";
import strings from "../resources/strings";

const title = "Licence";

const Licence = () => {
  const licenceStrings = strings.licence;

  return (
    <Layout title={title}>
      <PageTitle title={title} />
      <TextBlock question={licenceStrings[1].q} answer={licenceStrings[1].a} />
      <TextBlock question={licenceStrings[2].q} answer={licenceStrings[2].a} />
    </Layout>
  );
};

export default Licence;
