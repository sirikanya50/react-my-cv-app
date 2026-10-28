import NavBar from "../components/NavBar";
import { FaGithub } from "react-icons/fa";
 
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
 
// ข้อมูลโปรเจกต์ — แก้ title / description / รูป / ลิงก์ ได้ที่นี่
const projects = [
  {
    title: "Bikes and Beards",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non.",
    image: img2,
    viewUrl: "#",
    gitUrl: "#",
  },
  {
    title: "Learnify",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non, placeat nulla.",
    image: img3,
    viewUrl: "#",
    gitUrl: "#",
  },
  {
    title: "Anime-X",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt.",
    image: img4,
    viewUrl: "#",
    gitUrl: "#",
  },
  {
    title: "Tech-Z",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium repellendus recusandae vitae ea laborum, ipsa nisi eos autem. Blanditiis consequuntur velit nesciunt aperiam odit excepturi repellat libero in enim praesentium! Ex dicta est suscipit ipsam voluptate tempora voluptatum quam distinctio minus saepe nobis nulla amet fugiat sit autem deserunt asperiores vitae ea, libero sed! Libero fugit non, placeat nulla quae odio asperiores ratione! Accusantium placeat dolorem minus eos excepturi modi.",
    image: img5,
    viewUrl: "#",
    gitUrl: "#",
  },
];
 
// การ์ดโปรเจกต์ 1 อัน: reverse=true จะสลับให้รูปไปอยู่ฝั่งขวา
function ProjectCard({ project, reverse }) {
  return (
    <article
      className={`w-full flex flex-col items-center justify-center gap-10 md:gap-16 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* ช่องใส่รูป */}
      <div className="w-full md:w-1/2 flex justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-md rounded-3xl object-cover"
          />
        ) : (
          <div className="w-full max-w-md aspect-[16/10] rounded-3xl border-2 border-dashed border-gray-600 flex items-center justify-center text-gray-500 text-sm">
           
          </div>
        )}
      </div>
 
      {/* ข้อความ + ปุ่ม */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-xl font-bold font-serif">{project.title}</h2>
        <p className="text-gray-300 text-sm leading-relaxed text-left max-w-md">
          {project.description}
        </p>
 
        <div className="flex items-center gap-8 mt-2">
          <a
            href={project.viewUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white text-sm border border-white px-8 py-1 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            View
          </a>
          <a
            href={project.gitUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white text-sm hover:text-[#00ff90] transition-colors"
          >
            <FaGithub className="text-3xl" />
            Git code
          </a>
        </div>
      </div>
    </article>
  );
}
 
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* pname="P" ให้ลิงก์ Portfolio เป็นสีเหลือง */}
      <NavBar pname="C" colorLinkNavBar="#FFE600" />
 
      <main className="flex flex-col items-center px-6 md:px-20 pt-10 pb-24">
        <h1 className="text-center text-4xl font-bold font-serif">Portfolio</h1>
        <br/>
 
        <div className="w-full max-w-5xl mt-16 flex flex-col items-center gap-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
 