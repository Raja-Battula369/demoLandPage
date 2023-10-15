const Client = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10 bg-[#f0eaea] ">
      <h1 className="text-xl font-bold text-center">Client login</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-[350px] md:w-[500px] shadow-effect1 flex-col mx-auto  px-6 py-8  flex justify-center items-center gap-6"
      >
        <div className="w-[350px] form ">
          <input
            className="input "
            placeholder="username"
            required=""
            type="text"
          />
          <span className="input-border"></span>
        </div>
        <div className="form">
          <input
            className="input"
            placeholder="password"
            required=""
            type="text"
          />
          <span className="input-border"></span>
        </div>
        <button className="login-button">
          Login
          <span className="login-button-effect"></span>
        </button>

        <p className="hover:underline hover:text-red-500 transition font-semibold cursor-pointer">
          {' '}
          Forgot Password
        </p>
      </form>
    </div>
  );
};

export default Client;
