import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { StateProvider } from "../context/StateProvider";

const Home: NextPage = () => {
  return (
    <StateProvider>
      <Layout title="Home">
        <div>home</div>
      </Layout>
    </StateProvider>
  );
};

export default Home;
