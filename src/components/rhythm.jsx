import { useEffect, useRef, useState } from 'react';
import { useSpring, motion } from 'framer-motion';

const BIG_SIZE = 90;
const SMALL_SIZE = 15;
const PER_PX = 0.3;

const Rhythm = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handler);
    return () => {
      window.removeEventListener('mousemove', handler);
    };
  }, []);
  return (
    <div className="flex flex-wrap w-full gap-24 mx-auto p-12">
      {Array.from({ length: 84 }, (_, i) => (
        <Dot key={i} mousePosition={mousePosition} />
      ))}
    </div>
  );
};

const Dot = ({ mousePosition }) => {
  const size = useSpring(SMALL_SIZE, {
    damping: 30,
    stiffness: 200,
  });

  const dotRef = useRef(null);

  useEffect(() => {
    if (!dotRef.current) return;
    const { x, y } = mousePosition;
    const { x: dotX, y: dotY } = dotRef.current.getBoundingClientRect();

    const distance = Math.sqrt(
      Math.pow(Math.abs(x - dotX), 2) + Math.pow(Math.abs(y - dotY), 2)
    );
    size.set(Math.max(BIG_SIZE - PER_PX * distance, SMALL_SIZE));
  }, [mousePosition, size]);

  return (
    <div ref={dotRef} className="relative -z-10">
      <motion.div
        className=" bg-green-600 rounded-full absolute -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ width: size, height: size }}
      ></motion.div>
    </div>
  );
};

export default Rhythm;
