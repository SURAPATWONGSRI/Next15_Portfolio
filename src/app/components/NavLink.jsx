import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-md text-[#ADB7BE] sm:text-md rounded md:p-0 hover:text-white"
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default NavLink;
