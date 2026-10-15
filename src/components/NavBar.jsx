export default function NavBar({ pname, colorLinkNavBar }) {
  return (
    <>
      {/* ส่วนของ NavBar */}
      <div className="w-full flex justify-between items-center px-20 pt-5">
        {/* โลโก้และชื่อเว็บด้านซ้าย */}
        <div >
          <span className="text-[#00ff90] text-4xl font-bold">{">_"}</span>
          <span className="text-white text-4xl font-bold">Sirikanya SAU</span>
        </div>

        {/* ลิงก์เมนูด้านขวา */}
        <div className="flex gap-5 items-center">
          <a href="/" className= "text-white " style={{ color: pname === 'H' ? colorLinkNavBar : 'white' }}>
            Home
          </a>
          <a href="/about" className="text-whiteb" style={{ color: pname === 'A' ? colorLinkNavBar : 'white' }}>
            About
          </a>
          <a href="/contact" className="text-white" style={{ color: pname === 'C' ? colorLinkNavBar : 'white' }}>
            Contact
          </a>
          <a href="/portfolio" className="text-white border-2 border-white px-4 py-1 rounded-2xl" style={{ color: pname === 'P' ? colorLinkNavBar : 'white' }}>
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
}
