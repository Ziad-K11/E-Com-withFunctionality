import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container px-11">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
