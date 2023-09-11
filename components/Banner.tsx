import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () =>{
    return( 
    <div className="py-20 flex items-center gap-10">
        {/* image */}
    <div className="w-44 h-44 rounded-full bg-black">
    <Image 
    className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
    src={ProfileImg} 
    alt="ProfileImg" 
     />
    </div>
    {/* description */}
    <div className="w-3/4">
        <h1>Ayush Dey</h1>
        <h3>Full Stack Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quod iste totam, expedita modi velit laboriosam numquam rerum cupiditate est, sequi minima praesentium.</p>
    </div>
    </div>
    );
};

export default Banner;