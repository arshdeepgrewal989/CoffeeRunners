import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import NewsletterForm from "./NewsletterForm";

const Layout = ({ children }) => {
  let [showFab, setShowFab] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth > 576) {
      setShowFab(false);
    } else {
      setShowFab(true);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/lux/bootstrap.min.css"
        />
        <script
          src="https://kit.fontawesome.com/0f85da58f2.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="container">
        <Nav showFab={showFab} />
        {children}
        <NewsletterForm />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
