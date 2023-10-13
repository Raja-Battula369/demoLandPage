const Aboutus = () => {
  const scrollToView = (id) => {
    document.getElementById(id).scrollIntoView();
  };
  return (
    <div className="container2 text-white">
      <div className="flex justify-center items-center font-bold text-sm sm:text-2xl font2 gap-3">
        <h1
          className="cursor-pointer  hover:text-[#95F9E3] transition"
          onClick={() => scrollToView('whatweare')}
        >
          Who we are
        </h1>
        <hr className="border border-red-500 h-[20px] w-[2px]" />
        <h1
          className="cursor-pointer hover:text-[#69EBD0] transition"
          onClick={() => scrollToView('whatwedo')}
        >
          What We do
        </h1>
        <hr className="border border-red-500 h-[20px] w-[2px]" />

        <h1
          className="cursor-pointer hover:text-[#49D49D] transition"
          onClick={() => scrollToView('VarahiEdge')}
        >
          Varahi Edge
        </h1>
      </div>
      <div id="whatweare" className="p-6 font1">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-[#95F9E3] transition">
          Who we are
        </h1>
        <hr className="w-full border border-gray-300 " />
        <p className="capitalize mt-2">
          Varahi Software is a soft technology provider company and it is fast
          growing leading software company in IT services. Varahi software is a
          team of talented professionals dedicated to your success. Our teams
          are to create solutions for the challenges our customers face each
          day. We help organizations achieve and exceed their goals and sustain
          measurable results. We are committed to doing all we can to serve our
          customers.
          <br />
          <br />
          Our complete solutions, high quality, cost leadership and reliable
          support have built for us the reputation of being extremely dependable
          solution providers. Our single-minded focus in providing greater value
          to our customers, translates into high levels of customer
          satisfaction.
        </p>
      </div>
      <div id="whatwedo" className="p-6 font1">
        <h1 className="text-2xl font-bold  cursor-pointer hover:text-[#69EBD0] transition">
          Who we do
        </h1>
        <hr className="w-full border border-gray-300 " />
        <p className="capitalize mt-2">
          We are a global provider of technology-based business solutions. We
          are focused on helping enterprises leverage technology to achieve
          business goals. Our portfolio includes:
          <br />
          <br />
          <ul style={{ listStyleType: 'circle', padding: '0 6rem' }}>
            <li>Custom Software Development</li>
            <li>Web-enabling existing applications</li>
            <li>Software, database, OS conversion/re-engineering</li>
            <li>Application Testing Services </li>
            <li>System Implementatio, Maintenance and Application Hostingn</li>
            <li>Onsite Consulting services</li>
            <li>Educational Institutions</li>
            <br />
            Customer needs define the boundaries of our solutions, making our
            solutions comprehensive, easy-to-use and keeping them in synchrony
            with future trends. Our solutions cut across departmental
            limitations and are marked by clear benefits to business areas that
            are seemingly far removed from the core purpose of the solution.
          </ul>
        </p>
      </div>

      <div id="VarahiEdge" className="p-6 font1">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-[#49D49D] transition">
          {' '}
          Varahi Edge
        </h1>
        <hr className="w-full border border-gray-300 " />
        <p className="capitalize mt-2">
          The sound technical background of our management team, coupled with a
          good business sense has helped Varahi software identify growth
          opportunities in the field of software development. A spirit of
          innovation, strict adherence to high standards of quality and
          customer-centric development, operations and support has helped us
          provide solutions and service to the satisfaction of our customers.
          <br />
          <br />
          Our strong commitment to providing solutions of the highest quality,
          of forming relationships based on mutual respect and integrity has
          marked us as dependable partners to deal with. This in turn has helped
          us create positive, enduring relations with our customers.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
