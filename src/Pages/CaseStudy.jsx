import { useState } from "react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useTitle } from "../Hooks/useTitle"

export const CaseStudy = () => {

    const param = useParams()    
    const id = param.id

    const [data, setData] = useState([])
    const [image, setImage] = useState([])
    const [color, setColor] = useState([])
    const [font, setFont] = useState([])
    const [tools, setTools] = useState([])

    useTitle(`Project | ${data.client}`)

    useEffect(()=>{
        async function getProject(){
            const res = await fetch(`http://localhost:9000/projects/${id}`)
            const json = await res.json()
            setData(json)
            setImage(json.image)
            setColor(json.colorPallet)
            setFont(json.typography)
            setTools(json.teckStack)
        }
        getProject()
        console.log(image)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])
    
  return (
    <div className="w-full min-h-screen md:px-20 px-5">  
        <div className="lg:my-40 my-28">
            <div className="w-full flex justify-between items-center lg:px-8 lg:mb-12 mb-6">
                <h1 className="lg:text-7xl sm:text-4xl text-2xl font-medium text-gray-700"># {data.client}</h1>
                <Link to={data.link} className="text-white bg-darkBlue h-fit sm:px-6 px-3 sm:py-3 py-2 max-sm:text-sm rounded-2xl transition-all duration-300" target="_blank" rel="noreferrer">Visit Site <i className="bi bi-arrow-right"></i> </Link>
            </div>
            <img className="rounded-2xl w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] object-cover" src={image[1]} alt="" />

            <div className="sm:mt-20 mt-12 flex max-sm:flex-col sm:justify-between">
                <div className="sm:w-1/2">
                    <h1 className="text-2xl">Typography</h1>
                    {
                        font.map((font, index) => (
                            <div key={index} className="pl-4">
                                <p className="my-5 flex items-center text-gray-600"><i className="bi bi-dot text-4xl"></i> {font}</p>
                            </div>       
                        ))
                    }
                </div>
                <div className="sm:w-1/2">
                    <h1 className="text-2xl">Color Pallet</h1>
                    {
                        color.map((colr, index) => (
                            <div key={index} className="text-white">
                                <p className="my-4 p-6 w-2/3 rounded-lg" style={{backgroundColor:`${colr}`,}}>{colr}</p>
                            </div>       
                        ))
                    }
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-2xl">Technology & Tools</h1>
                <div className="flex flex-wrap">
                    {
                        tools.map((item, index)=>(
                            <div key={index}>
                                <p className="px-3 py-1 sm:m-5 m-3 border border-gray-700 text-gray-700 rounded-full w-fit">{item}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mt-16 flex justify-center max-sm:hidden">
                <Link to={data.link} className="animateButton01 border-skyBlue text-xl h-fit px-6 py-20 max-sm:text-sm rounded-full ml-2" target="_blank" rel="noreferrer">Visit website. <i className="bi bi-arrow-right"></i> </Link>
            </div>
        </div>
    </div>
  )
}
