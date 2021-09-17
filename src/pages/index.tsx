import React from "react";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import strings from "../resources/strings";
import Quote from "@components/Quote";
import { fetchHomeData, PrejudiceApi } from "@services/homeQueries";
import { RichText } from "prismic-reactjs";

interface Props {
  allPrejudices: PrejudiceApi[];
}

const Home = ({ allPrejudices }: Props) => {
  return (
    <Layout title="Le petit Nietzsche">
      <PageTitle subTitle={strings.howto} />
      {allPrejudices.map((prejudice: PrejudiceApi) => (
        <Quote
          title={RichText.asText(prejudice.node.title)}
          quote={RichText.asText(prejudice.node.prejudice)}
          explanations={prejudice.node.explanation}
        />
      ))}
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const allPrejudices = await fetchHomeData();

  return {
    props: { allPrejudices },
  };
}
