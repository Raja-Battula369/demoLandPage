import Footer from './components/Footer';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
import Animation1 from './constant/animation1';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RootLayout = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setToggle(true);
    const timout = setTimeout(() => {
      setToggle(false);
    }, 2000);
    return () => clearTimeout(timout);
  }, [location.pathname]);

  return (
    <>
      <main>
        {toggle ? <Animation1 /> : null}
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default RootLayout;
