import { Link, useNavigate } from 'react-router-dom';
import logo1 from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import { useState } from 'react';

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="header">
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img
          src={logo1}
          className="w-[80px] h-[90px] mix-blend-darken max-sm:z-50   "
        />
        <img
          src={logo2}
          className="w-[80px] h-[90px] mix-blend-darken max-sm:z-50  "
        />
      </div>
      <div className="header-routers ">
        <Link className="header-router" to={'services'}>
          Services
        </Link>
        <Link className="header-router" to={'methodology'}>
          Methodology
        </Link>
        <Link className="header-router" to={'aboutus'}>
          About us
        </Link>
        <Link className="header-router" to={'contactus'}>
          Contact us
        </Link>
      </div>
      <div className="header-buttons">
        <button
          className="header-loginButton"
          onClick={() => navigate('client')}
        >
          Client Login
        </button>
      </div>
      <div className="relative md:hidden">
        <button
          className="menu-button"
          onClick={() => setMenuToggle((prev) => !prev)}
        >
          Menu
        </button>
        {menuToggle ? (
          <div className="absolute top-10 right-1 transition-all bg-orange-300 p-6 rounded-lg">
            <div
              onClick={() => setMenuToggle((prev) => !prev)}
              className="flex flex-col justify-center items-center gap-4  "
            >
              <Link className="header-router" to={'services'}>
                Services
              </Link>
              <Link className="header-router" to={'methodology'}>
                Methodology
              </Link>
              <Link className="header-router" to={'aboutus'}>
                About us
              </Link>
              <Link className="header-router" to={'contactus'}>
                Contact us
              </Link>
              <button
                className="header-loginButton"
                onClick={() => navigate('client')}
              >
                Client Login
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
