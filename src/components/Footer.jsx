import logo1 from '../assets/logo.png';
import logo2 from '../assets/logo2.png';

const Footer = () => {
  return (
    <footer className=" w-[100%] border border-neutral-700 bg-[#F6F6F6] ">
      <address className="w-full font2 flex flex-col lg:flex-row justify-center items-center gap-2">
        <div className="flex justify-center items-center gap-2">
          <h1 className=" font-bold">Address :</h1>
          <p className="self-end">
            305, Faset Square,
            <br />
            Near Navrachana International School,
            <br /> Bhayli, Vadodara - 391410.
          </p>
        </div>
        <hr className="border border-red-500 max-lg:h-[2px] max-lg:w-[80%] h-[20px] w-[2px]" />
        <div className="flex justify-center items-center gap-2">
          <h1 className=" font-bold">Phone :</h1>

          <p className="hover:font-bold">0265 2966000</p>
        </div>
        <hr className="border border-red-500 max-lg:h-[2px] max-lg:w-[80%] h-[20px] w-[2px]" />
        <div className="flex justify-center items-center gap-2">
          <h1 className=" font-bold">E-mail :</h1>
          <a href="mailto:info@varahisoft.com">
            <p className="font-bold text-red-500 hover:underline">
              info@varahisoft.com
            </p>
          </a>
        </div>
        <hr className="border border-red-500 max-lg:h-[2px] max-lg:w-[80%] h-[20px] w-[2px]" />
        <div className="flex justify-center items-center gap-2">
          <h1 className=" font-bold">Website :</h1>
          <a href="https://varahisoft.com/">
            <p className="font-bold text-red-500 hover:underline">
              www.varahisoft.com
            </p>
          </a>
        </div>
      </address>
      <br />
      <div className="flex items-center justify-center gap-3">
        <div style={{ display: 'flex' }}>
          <img src={logo1} className=" w-[50px] mix-blend-darken" />
          <img src={logo2} className=" w-[50px] mix-blend-darken" />
        </div>
        <div>
          <h1 className="text-center text-sm md:text-lg font-semibold">
            Copyright 2006-2023 all rights reserved by varahi software
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
