import Head from "next/head";
import Header from "./Header";
import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";
import Showcase from "./Showcase";
import { useRouter } from "next/router";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Finde the hottests parties",
  description: "Find the latest DJ an other musical events",
  keywords: "music, dj, edm, events",
};
