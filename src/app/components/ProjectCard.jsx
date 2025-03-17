const ProjectCard = ({ title, description, imgUrl, tag, link }) => {
  return (
    <div className="bg-[#121212] rounded-md overflow-hidden mb-8 max-w-xs mx-auto  transition-all duration-500 border border-[#33353F] ">
      <div className="relative group h-56 overflow-hidden">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>

        <div className="absolute bottom-0 left-0 p-4 w-full transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {tag.map((item, index) => (
            <span
              key={index}
              className="inline-block mr-2 mb-2 px-3 py-1 text-xs bg-black/70 text-white rounded-lg backdrop-blur-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-3 font-light">
          {description}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 text-sm font-medium rounded-lg transition-all duration-300"
          >
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
