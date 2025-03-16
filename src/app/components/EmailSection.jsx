import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-white text-xl font-bold my-2">Let's Connect!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          ผมกำลังมองหาโอกาสใหม่ ๆ แบบฟอร์มของผมเปิดอยู่เสมอ!
          ไม่ว่าคุณจะมีคำถาม หรือแค่อยากทักทาย ผมจะพยายามตอบกลับให้เร็วที่สุด!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://facebook.com" target="_blank" className="text-white hover:text-gray-400">
            <Facebook size={24} />
          </Link>
          <Link href="https://github.com" target="_blank" className="text-white hover:text-gray-400">
            <Github size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-gray-400">
            <Linkedin size={24} />
          </Link>
        </div>
      </div>

      <div className="z-10">
        <form className="flex flex-col gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="จอห์น เลนนอน"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello Thailand~"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="พิมพ์ข้อความโลด.."
              rows="5"
            />
          </div>
          <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
