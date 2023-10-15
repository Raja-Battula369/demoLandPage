import { useEffect } from 'react';
import '../App.css';

import { useState } from 'react';

const Animation1 = () => {
  const [toggle, setToggle] = useState(false);
  const handle = () => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar) => {
      bar.style.animationPlayState = 'running';
    });
    const lastBar = bars[bars.length - 1];
    lastBar.addEventListener('animationend', () => {
      setTimeout(() => {
        setToggle(true);
      }, 160);
    });
  };

  useEffect(() => {
    handle();
    return () => {
      document.removeEventListener('animationend', () => {
        setTimeout(() => {
          setToggle(true);
        }, 160);
      });
    };
  }, []);
  return (
    <div className="bg-black text-white">
      <div>
        {toggle ? (
          <div>
            <div className="bartender">
              <div className="bar1"></div>
              <div className="bar1"></div>
              <div className="bar1"></div>
              <div className="bar1"></div>
              <div className="bar1"></div>
            </div>
          </div>
        ) : (
          <div className="bartender">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Animation1;
