/* eslint:disable */
import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Header/Navbar";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
// import {fa-brands, fa-html5 } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image";
import html5 from "./html5.svg"
import php from  "./php.svg"
import express from  "./express.png"
import figma from "./figma.svg"
import sql from "./sql.png"
import mongodb from "./mongodb.svg"
import python from "./python.svg"
import tailwind from "./tailwind.png"
import next from "./next.png"
import ty from "./ty.png"
import redux from "./redux.png"
const skills = () => {
  return (
    <div>
      <Navbar />

      <div className="py-8 bg-gray-100">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 space-y-8 sm:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold ext-green-400 ">Front-end Development</h3>
              </div>
              <div>
                <ul className="grid grid-cols-6 ">
                  <div>
                    {" "}

                    <FaHtml5 size={48} />
                    <h1>Html5</h1>
                    {/* <FontAwesomeIcon icon="fa-brands fa-html5" beat /> */}
                  </div>

                  <div>
                    {" "}
                    <FaCss3Alt size={48} />
                    <h1>Css3</h1>
                  </div>
                  <div>
                    {" "}
                    <FaJsSquare size={48} />
                    <h1>Javascript</h1>
                  </div>
                  <div>
                    <SiBootstrap size={48} />
                    <h1>Bootstrap5</h1>
                  </div>

                  <div>
                    <FaReact size={48} />
                    <h1>React</h1>
                  </div>

                  <div>
                    <FaVuejs size={48} />
                    <h1>Vuejs</h1>
                  </div>

                 <div>
                 <Image src={tailwind} width={40} height={12} alt="hello" />
                  <h1>Tailwind css</h1>
                 </div>

                 <div>
                 <Image src={ty} width={40} height={12} alt="hello" />
                  <h1>Typescript</h1>
                 </div>
                 <div>
                 <Image src={next} width={40} height={12} alt="hello" />
                  <h1>Nextjs</h1>
                 </div>
                 <div>
                 <Image src={redux} width={40} height={12} alt="hello" />
                  <h1>Reduxjs</h1>
                 </div>
                  
                </ul>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-green-400">Back-end Development</h3>
              </div>
              <ul className="grid grid-cols-6">
                <div>

                <Image src={python} width={40} height={12} alt="hello" />
               <h1>Python</h1>
                </div>
                <div>

                  <Image src={express} width={40} height={12} alt="hello" />
               <h1>Express js</h1>
                </div>
                <div>

                <Image src={php} width={40} height={12} alt="hello" />
               <h1>Php</h1>
                </div>

               
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-green-400">Database</h3>
              </div>
              <ul className="grid grid-cols-6">
                <div>

                <Image src={sql} width={40} height={12} alt="hello" />
               <h1>SQL</h1>
                </div>
                <div>
                <Image src={mongodb} width={40} height={12} alt="hello" />
               <h1>MongoDB</h1>
                </div>
                

               
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-semibold text-green-400">Ui/Ux Design</h3>
              </div>
              <ul className="grid grid-cols-6">
                
                <div>
                <Image src={figma} width={40} height={12} alt="hello" />
               <h1>Figma</h1>
                </div>
              

               
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default skills;
