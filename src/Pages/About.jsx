import { useTitle } from "../Hooks/useTitle"
import { TeamCard } from "../Components/TeamCard"

export const About = () => {

  useTitle('About - CodTree')

  return (
    <div className="w-full min-h-screen tracking-wider leading-loose">
      <div className="h-screen flex flex-col justify-center bg-darkBlue lg:px-40 px-10 text-white 2xl:mb-40 mb-28">
        <h1 className="md:text-7xl text-4xl mb-6 font-semibold"># Who are we?</h1>
        <p className="md:text-2xl font-light">
          &emsp;&emsp;COD Trees is an embodiment of professionals providing quality Information and Technology services to any business or individual. 
          We develop, design, and make things done according to any needs. Our group of highly talented professionals offers their best, 
          by creating customized products after listening to any queries. We deliver our service on schedule, using our experience and 
          expertise to create unique designs and graphics that help your website stand out among others.
        </p>
      </div>

      <div className="min-h-screen 2xl:px-40 px-10 mb-40 text-gray-700">
        <div className="flex justify-around max-md:flex-col-reverse  items-center mb-32">
          <div className="lg:w-1/2 xl:w-1/3">
            {/* <iframe src="" className="giphy-embed w-auto h-full max-md:mt-12" allowFullScreen></iframe> */}
            <img src="https://media0.giphy.com/media/3xz2Bw12fe9iyG06v6/giphy.gif?cid=ecf05e4708aca6u2vei5z47ufuk0mdh2wqvf3fyg138s1jx5&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
          </div>
          <div className="lg:w-1/2 sm:w-2/3 sm:ml-8">
            <h1 className="lg:text-7xl sm:text-5xl text-4xl sm:mb-6 mb-4 font-semibold"># What We Do?</h1>
            <div className="leading-10">
              <p className="xl:text-xl sm:text-lg ">We mainly focus on providing 3 basic services-</p>
              <li className="xl:text-xl sm:text-lg">Web designing and development</li>
              <li className="xl:text-xl sm:text-lg">Graphics and logo designing</li>
              <li className="xl:text-xl sm:text-lg">Internet  marketing services - By using latest Technology, that brings best results, helping our clients with their     business.</li>
            </div>
          </div>
        </div>

        <div className="mb-40">
          <h1 className="lg:text-7xl sm:text-5xl text-4xl mb-6 font-semibold">#Why Us??</h1>
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="h-auto max-w-full">
              <h1 className="sm:text-3xl text-2xl font-semibold">Unique design</h1>
              <p>We design and develop services for customers of all sizes, specializing in creating stylish, modern websites.  </p>
            </div>
            <div className="h-auto max-w-full">
              <h1 className="sm:text-3xl text-2xl  font-semibold">Different Layout</h1>
              <p>We offer 100+ layout designs. You will be having a lot of choices if you choose us.</p>
            </div>
            <div className="h-auto max-w-full">
              <h1 className="sm:text-3xl text-2xl  font-semibold">Make it Simple</h1>
              <p>We make it simple for you. COD Trees understands complexity of the field that’s why we always love to hear from you.</p>
            </div>
            <div className="h-auto max-w-full">
              <h1 className="sm:text-3xl text-2xl  font-semibold">Responsiveness</h1>
              <p>We aim to provide top notch responsiveness from developing angle. We take care that users browse faster.</p>
            </div>
            <div className="h-auto max-w-full">
              <h1 className="sm:text-3xl text-2xl  font-semibold">Testing for Perfection</h1>
              <p>Our clients get the final version of cooked material. We ensure all the required tests are done in every point of view. We leave no stone unturned.</p>
            </div>
            <div className="h-auto max-w-full">
              <h1 className="sm:text-3xl text-2xl  font-semibold">Budget Friendly Package</h1>
              <p>Customer satisfaction is our top priority. We offer customized plans according to your budget. If you are looking for an ultimate budget friendly IT Solution, contact us now.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center mb-40 max-lg:flex-col">
          <div className="lg:w-2/3">
            <h1 className="lg:text-7xl sm:text-5xl text-4xl mb-6 font-semibold">#OUR PHILOSOPY</h1>
            <p className="text-lg">
              &emsp;&emsp;We at COD Tress always aim to do the best in whatever we create, design and produce. Our top priority is consumer 
              satisfaction, giving them the boost to make their business a huge success. We ensure the customer satisfaction by offering 
              catchy, unique websites & logo designs. We help the business develop more at affordable price, along with creative 
              portfolios.
            </p>
            <p className="text-lg">
              &emsp;&emsp;Our longer vision is to provide all the IT solutions to any business in India as well as in various part of world. 
              Each one of our customer is our top most priority, so we provide them the best. Together at COD Trees, we work as a family
              doing our best in understanding our clients and their needs, using our ability and expertise to reach their desired goals.
            </p>
          </div>
          <div className="lg:w-1/3 max-sm:mt-12">
            <img className="h-full w-full lg:pl-8 sm:mt-12" src="https://media3.giphy.com/media/NEvPzZ8bd1V4Y/giphy.gif?cid=ecf05e47vkrgkt4q1i3axg1g3ox1inq3u7zsph1980oyd0x2&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
          </div>
        </div>

        <div className="">
          <h1 className="lg:text-7xl sm:text-5xl text-4xl mb-6 font-semibold mb-20">#Our Team Members</h1>            
          <div className="flex justify-center">
            <TeamCard/>
          </div>
        </div>
      </div> 
    </div>
  )
}
