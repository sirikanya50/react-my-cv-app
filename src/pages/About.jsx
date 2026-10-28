import NavBar from "../components/NavBar";
 
export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* NavBar: ส่ง pname="A" เพื่อให้ลิงก์ About เป็นสีเหลือง */}
      <NavBar pname="A" colorLinkNavBar="#FFE600" />
 
      {/* เนื้อหาหลัก */}
      <main className="flex flex-col items-center px-20 pt-24 pb-12">
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between gap-12">
          {/* ฝั่งซ้าย: หัวข้อ + พื้นที่ใส่รูป */}
          <section className="md:w-1/2 flex flex-col gap-10 md:pl-10">
            <h1 className="text-5xl font-bold font-serif">About Me</h1>
 
            {/* TODO: ใส่รูปตรงนี้ (แทนที่ div ด้านล่างด้วย <img src={...} />) */}
            <div className="">
              <img src="src/assets/img1.png" alt="" />
            </div>
          </section>
 
          {/* ฝั่งขวา: ข้อความแนะนำตัว */}
          <section className="md:w-1/2 flex flex-col gap-6">
            <h2 className="text-lg font-bold font-serif leading-snug">
              Hi, I’m Sirikanya SAU. A passionate Full Stack Web Developer based in
              Thailand.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              rem odit labore unde nemo omnis sequi hic sit laudantium
              repellendus recusandae vitae ea laborum, ipsa nisi eos autem.
              Blanditiis consequuntur velit nesciunt aperiam odit excepturi
              repellat libero in enim praesentium! Ex dicta est suscipit ipsam
              voluptate tempora voluptatum quam distinctio minus saepe nobis
              nulla amet fugiat sit autem deserunt asperiores vitae ea, libero
              sed! Libero fugit non, placeat nulla quae odio asperiores ratione!
              Accusantium placeat dolorem minus eos excepturi modi.
            </p>
          </section>
        </div>
        <br /> <br />
        {/* ปุ่ม Download CV */}
        <a
          href=""
          download
          className="mt-16 text-white text-xl border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
        >
          Download CV
        </a>
      </main>
    </div>
  );
}
 