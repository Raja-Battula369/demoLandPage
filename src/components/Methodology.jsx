import { methodology } from '../lib/services';

const Methodology = () => {
  return (
    <div>
      <div className="p-5">
        <h1 className="text-blue-500 text-2xl font-bold">
          Our Business Philosophy
        </h1>
        <p>
          We at Varahi Software are committed to delivering maximum value to our
          clients helping them succeed in a constantly changing and challenging
          biz world. Our fundamental company values stem from understanding that
          our success is tied with success of our clients. Our key business
          principles are:
        </p>
        {methodology.map((methodology) => (
          <div key={methodology.name} className="p-4">
            <h1 className="text-red-500 text-xl font-bold">
              {methodology.name}
            </h1>
            <hr className="w-full border border-gray-300 " />

            <p className="p-3">{methodology.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Methodology;
