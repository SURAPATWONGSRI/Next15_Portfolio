"use client";
import { Facebook, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };

      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send"; // Fixed variable name from 'endpont' to 'endpoint'

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      const response = await fetch(endpoint, options); // Fixed variable name from 'respone'

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const resData = await response.json();
      console.log("Success:", resData);
      setEmailSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-10">
        <h5 className="text-white text-xl font-bold my-2">Let's Connect!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          ผมกำลังมองหาโอกาสใหม่ ๆ แบบฟอร์มของผมเปิดอยู่เสมอ! ไม่ว่าคุณจะมีคำถาม
          หรือแค่อยากทักทาย ผมจะพยายามตอบกลับให้เร็วที่สุด!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://www.facebook.com/surapat.wongsri.1"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <Facebook size={24} />
          </Link>
          <Link
            href="https://www.github.com/SURAPATWONGSRI"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/surapat-wongsri-181a91269"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <Linkedin size={24} />
          </Link>
        </div>
      </div>

      <div className="z-10">
        {emailSubmitted ? (
          <div className="text-center p-6 flex flex-col items-center space-y-2 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-lg border border-cyan-500/20 mb-4">
            <svg
              className="w-12 h-12 text-green-500 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-white font-medium text-lg">ส่งข้อความสำเร็จ</p>
            <p className="text-[#ADB7BE] text-sm">
              ขอบคุณที่ติดต่อเข้ามานะครับ ผมจะพยายามตอบกลับให้เร็วที่สุด
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="จอห์น เลนนอน"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                E-mail
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Hello Thailand~"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message" // Added name attribute that was missing
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="พิมพ์ข้อความโลด.."
                rows="5"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 px-5 rounded-lg w-full flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} />
                  Send
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
