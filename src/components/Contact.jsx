const Contact = () => {
  return (
    <div className="bg-[#f0eaea]">
      <div className="p-6  max-md:w-full w-[500px] mx-auto  rounded-md">
        <h1 className=" text-center font-bold">Inquiry Form</h1>
        <hr className="w-[90%] border border-gray-500 " />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[95%] mx-auto p-2 mt-4 rounded-md flex flex-col justify-center items-center gap-2 shadow-effect "
        >
          <div className="form">
            <input
              className="input text-black"
              placeholder="Company"
              required=""
              type="text"
            />
            <span className="input-border"></span>
          </div>
          <div className="form">
            <input
              className="input text-black"
              placeholder="Name"
              required=""
              type="text"
            />
            <span className="input-border"></span>
          </div>
          <div className="form">
            <input
              className="input text-black"
              placeholder="Email"
              required=""
              type="email"
            />
            <span className="input-border"></span>
          </div>

          <div className="form">
            <input
              className="input text-black"
              placeholder="Phone Number"
              required=""
              type="tel"
            />
            <span className="input-border"></span>
          </div>
          <div className="form">
            <textarea
              className="input text-black"
              placeholder="comment"
              required=""
            />
            <span className="input-border"></span>
          </div>
          <button className="w-[100px] border border-blue-700  bg-transparent h-[40px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#0f1551] before:to-[rgb(53,55,148)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 hover:text-white text-[#010101]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
