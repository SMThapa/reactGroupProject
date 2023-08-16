import { useEffect, useState } from "react";
import { useTitle } from "../Hooks/useTitle";
import { Card } from "../Components/Card";
import { motion } from "framer-motion";

export const Projects = () => {

  useTitle('Our Work | CodTree')

  const [data, setData] = useState([]);

  useEffect(()=>{
    async function fetchData(){
      const res = await fetch('http://localhost:9000/projects');
      const dta = await res.json()      
      setData(dta)
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='xl:mt-40 mt-28 px-20 max-sm:px-5 min-h-screen'>
      <div className=''>
        <div className='w-3/4 lg:mb-20 mb-10'>
          <motion.h1 
            initial={{y:20, opacity:0}}
            animate={{y:0, opacity:1}}
            className="lg:text-6xl md:text-5xl text-2xl font-semibold text-gray-700 lg:pl-10" >Discover the Projects that We Are Proud Of.
          </motion.h1>
          {/* <h1 className="lg:text-6xl md:text-5xl text-2xl font-semibold text-darkBlue lg:pl-10" >Projects</h1> */}
          <p className="text-darkBlue"></p>
        </div>
        <div className="flex flex-wrap justify-center items-center justify-between 2xl:px-20">
          {
            data.map(item =>(
              <Card key={item.id} data={item}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
