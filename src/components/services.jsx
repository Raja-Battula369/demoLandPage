import { servicesRouter } from '../lib/services';
import Rhythm from './rhythm';

const Services = () => {
  return (
    <div>
      <div className="relative max-md:hidden">
        <Rhythm />
        <h1 className="service-heading cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-bold font1 text-8xl">
          Services
        </h1>
      </div>

      <h1 className="font2 text-center text-xl font-semibold">
        Our Services Includes
      </h1>
      <div className="flex max-md:flex-col justify-center items-center">
        <img
          className="max-md:w-[100%] w-[50%] h-[50vh] object-contain"
          src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-homev2-banner-india-3.png"
          alt="services"
        />
        <div className="max-md:w-[100%] w-[50%] px-2 mt-4 container1">
          <div className=" md:hidden w-full  font1 mt-4">
            <ul
              className="w-[100%] h-full text-start px-6"
              style={{
                listStyleType: 'circle',
              }}
            >
              {servicesRouter.slice(0, servicesRouter.length).map((service) => (
                <li
                  key={service}
                  className="hover:font-bold transition cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className=" w-full font1 mt-4 flex justify-center items-center max-md:hidden">
            <ul
              className="w-[100%] h-full text-start px-6 "
              style={{
                listStyleType: 'circle',
              }}
            >
              {servicesRouter
                .slice(0, servicesRouter.length / 2)
                .map((service) => (
                  <li
                    key={service}
                    className="hover:font-bold transition cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
            </ul>

            <ul
              className="w-[100%] h-full text-start px-6"
              style={{
                listStyleType: 'circle',
              }}
            >
              {servicesRouter
                .slice(servicesRouter.length / 2, servicesRouter.length)
                .map((service) => (
                  <li
                    key={service}
                    className="hover:font-bold transition cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
