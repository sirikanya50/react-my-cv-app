import NavBar from "../components/NavBar";
 
// import รูปไอคอนแต่ละช่อง (แก้นามสกุลไฟล์ให้ตรงกับของจริง)
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
 
// ข้อมูลติดต่อ 3 ช่อง — แก้ข้อความ/ลิงก์/รูปไอคอนได้ที่นี่
const contacts = [
  {
    label: "mickey16082003@gmail.com",
    href: "mailto:mickey16082003@gmail.com",
    icon: c1,
  },
  {
    label: "Thailand, Bangkok",
    href: "https://maps.app.goo.gl/a652CmT8eZ3MjNMYA",
    icon: c2,
  },
  {
    label: "Sirikanya SAU",
    href: "https://www.linkedin.com/",
    icon: c3,
  },
];
 
function ContactItem({ item }) {
  const content = (
    <>
      {/* กรอบรูปขนาดคงที่ ทำให้ทุกรูปพอดีและข้อความใต้รูปอยู่ระดับเดียวกัน */}
      <div className="w-32 h-32 flex items-center justify-center">
        {item.icon && (
          <img
            src={item.icon}
            alt={item.label}
            className="max-w-full max-h-full object-contain"
          />
        )}
      </div>
      <span className="text-sm font-semibold text-gray-300 leading-loose">
        {item.label}
      </span>
    </>
  );
 
  // gap-6 = ระยะห่างระหว่างรูปกับข้อความ
  const className = "flex flex-col items-center gap-6";
 
  // ถ้ามี href ให้เป็นลิงก์ ถ้าไม่มีให้เป็น div ธรรมดา
  return item.href ? (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`${className} hover:opacity-80 transition-opacity`}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}
 
export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar
        pname="P"
        colorLinkNavBar="#FA2900
"
      />
 
      <main className="flex flex-col items-center px-6 md:px-20 pt-24 pb-24">
        <h1 className="text-center text-4xl font-bold font-serif">
          Let’s talk
        </h1>
        <br />
        <p className="mt-10 text-center text-lg font-semibold text-gray-300 leading-loose">
          Don't be a stranger! Say hello and let's collaborate
        </p>
        <br />
        <br />
        <br />
        <div className="w-full max-w-5xl mt-28 grid grid-cols-1 md:grid-cols-3 gap-20 items-start justify-items-center">
          {contacts.map((item) => (
            <ContactItem key={item.label} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
 
 