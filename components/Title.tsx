import {SiInformatica} from "react-icons/si"

const Title = () => {
  return (
    <div className="flex items-center gap-4 text-2xl group pb-10">
    <h3 className="font-semibold relative overflow-hidden">About Me <span className="w-full h-[2px] absout bottom-0 left-0 inline-block
     bg-blue-600 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> 
     </h3>
    <SiInformatica className=" text-blue-600 " />
</div>
  )
}

export default Title