import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-transparent rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
    </div>
  );
};

export default Generating;
