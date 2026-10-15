import NavBar from "../components/NavBar";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import css from "./../assets/css.png";
import figma from "./../assets/figma.png";
import react from "./../assets/react.png";
import node from "./../assets/node.png";
import html from "./../assets/html.png";
import spring from "./../assets/spring.png";
import java from "./../assets/java.png";
import firebase from "./../assets/firebase.png";
export default function Home() {
  return (
    <>
      {/* ส่วนของ NavBar */}
      <NavBar pname='H' colorLinkNavBar="#FFF714" />
      {/* ส่วนของ Hero Section */}
      <div className="flex justify-between items-center pt-30 pl-80 pr-80">
        
      <div className="flex flex-col gap-2">
        <span className="text-white font-bold text-6xl">Full Stack Web</span>
        <span className="text-white font-bold text-6xl">Developer</span>
        <span className="text-white">Hi,I'm Sirikanya SAU. A passionate Full Stack</span>
        <span className="text-white"> Web Developer based in Thailand.</span>
        <div className="flex gap-3 pt-3">
          <FaLinkedinIn className="text-white" />
          <FaGithub className="text-white" />
        </div>
      </div>
      

      {/* ส่วนของ Footer */}
      <div>
        <img src="https://images.pexels.com/photos/34472106/pexels-photo-34472106.jpeg" alt="Profile" 
        className="w-[450px] h-[450px] object-cover rounded-full" />
      </div>
    </div>
    {/* ส่วนของข้อความ Tech Stack */}
    <div className ="flex justify-center pt-20">
      <p className="text-white text-2xl font-bold">My Tech Stack</p>

    </div>

    {/* ส่วนของรูปภาพ Tech Stack */}
    <div className="flex items-center justify-center pt-10 gap-10">
      <img src={css} alt="CSS"  />
      <img src={figma} alt="Figma"  />
      <img src={html} alt="HTML"  />
      <img src={react} alt="React"  />
      <img src={node} alt="Node.js"  />
      <img src={spring} alt="Spring"  />
      <img src={java} alt="Java"  />
      <img src={firebase} alt="Firebase"  />
    </div>
    </>
  );
}
