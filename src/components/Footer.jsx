const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center  text-[#ADB7BE] text-sm">
          <p>© {new Date().getFullYear()} WaKim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
