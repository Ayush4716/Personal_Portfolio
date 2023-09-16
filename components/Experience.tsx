import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex } from "react-icons/si";

const Experience = () => {
  return (
    <div className="wrapper">
    <Title text="Experiences" icon={<MdWork />} />
    <div className="flex items-center gap-4">
    <span className="w-12 h-12 rounded-full bg-black border-[1px]
    border-blue-600 flex items-center justify-center">
        <SiReactivex className="text-2xl" />
    </span>
    <div>
    <h3 className="text-2xl font-bold">To be Filled</h3>
    <p className="text-ig tracking-wide text-gray-400">
        to be filled
    </p>
    </div>
    </div>
    </div>
  );
  
};

export default Experience;