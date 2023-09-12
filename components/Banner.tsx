import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () =>{
    return( 
    <div className=" wrapper flex flex-col md:flex-row items-center gap-10">
        {/* image */}
    <div className="w-44 h-44 rounded-full bg-white">
    <Image 
    className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
    src={ProfileImg} 
    alt="ProfileImg" 
     />
    </div>
    {/* description */}
    <div className="w-3/4 flex  flex-col items-center md:items-start gap-2">
        <h1 className="text-5xl font-bold text-white">Ayush Dey</h1>
        <h3 className="text-2xl font-semibold bg-clip-text text-transparent
        bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">I Am a Developer</h3>
        <p className="text-base tracking-wide text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quod iste totam, expedita modi velit laboriosam numquam rerum cupiditate est, sequi minima praesentium.</p>
    </div>
    </div>
    );
};

export default Banner;