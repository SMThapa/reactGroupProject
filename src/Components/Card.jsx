import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
export const Card = ({data}) => {


  return (
    <div className="hover shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl overflow-hidden md:mb-24 mb-8">    
      <div className="relative overflow-hidden mb-4 ">
        <img className="w-fit xl:h-64 lg:h-52 object-cover" src={data.image[1]} alt="img" /> 
        <div className="absolute h-full w-full bg-black/50 flex justify-between items-end px-8 py-6 -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300 text-white text-xl">
          <div>
            <h1 className="px-3 font-md">{data.client}</h1>
          </div>
          <Link to={`/project/${data.id}`}>
            <i className="bi bi-arrow-up-right px-3 py-2 border-1 bg-gray-300 rounded-full cursor-pointer text-black hover:bg-white transform-all duration-300"></i>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center sm:pl-2 pl-1 mb-3">
          <img className="w-5 h-5 rounded-full ml-1 object-center" src={data.image[0]} alt="" />
          <div to={data.link} className="sm:pl-3 pl-1">{data.client}</div>
        </div>
        <div className="mb-3 sm:pr-8 pr-2 flex items-center text-gray-600 max-sm:text-xs"> <i className="bi bi-dot text-2xl"></i>{data.type}</div>
      </div>
    </div>
  )
}
