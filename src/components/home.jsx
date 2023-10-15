import { services } from '../lib/services';
import Rhythm from './rhythm';

const Home = () => {
  return (
    <>
      <section className="home-main  relative max-md:hidden ">
        <Rhythm color="orange" />
        <div className="w-full  cursor-pointer absolute top-1/2 md:left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className=" w-fit mx-auto group relative cursor-pointer border border-gray-700 rounded-sm transition p-4 ease-in-out duration-500 hover:border-gray-100 hover:scale-110">
            <div className="uppercase max-md:text-base text-2xl font-bold  flex  items-center relative">
              {'Varahisoft: The IT Solution You Need'
                .split('  ')
                .map((letter, i) => (
                  <h1
                    key={i}
                    className="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0"
                    style={{ transitionDelay: `${i * 75}ms` }}
                  >
                    {letter}
                  </h1>
                ))}
            </div>

            <div className="uppercase  max-md:text-base text-2xl font-bold  absolute bottom-4 left-4 flex items-center">
              {'Varahisoft: The IT Solution You Need'
                .split('  ')
                .map((letter, i) => (
                  <h1
                    key={i}
                    className="origin-bottom duration-300 transition-transform ease-in-out scale-y-0 group-hover:scale-y-100"
                    style={{ transitionDelay: `${i * 75}ms` }}
                  >
                    {letter}
                  </h1>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="home-img">
        <img
          src="https://swiftsystems.com/guides-tips/wp-content/uploads/2019/09/managed-it-services.jpg"
          width={'100%'}
          height={'500px'}
          alt="home"
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-3 my-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="card"
            style={{ '--background': service.bgColor }}
          >
            <div className="content">
              <h1
                className="heading text-center text-2xl font-semibold"
                style={{ backgroundColor: service.bgColor }}
              >
                {service.name}
              </h1>
              <img
                src={service.img}
                className="overflow-hidden w-full object-contain h-[150px]"
                alt={service.name}
              />
              <p className="para font2 ">{service.details}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
