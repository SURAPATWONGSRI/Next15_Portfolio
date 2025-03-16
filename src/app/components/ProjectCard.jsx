const ProjectCard = ({ title, description, imgUrl, tag, link }) => {
  return (
    <div className="bg-[#181818] rounded-lg overflow-hidden mb-6 max-w-xs mx-auto">
      <div className="relative group">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-3">
        <h3 className="text-lg text-white font-bold mb-1">{title}</h3>
        <p className="text-gray-300 text-sm mb-2">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 mb-2 text-xs inline-block truncate max-w-full"
          >
            {link}
          </a>
        )}

        <div className="flex flex-wrap gap-1.5 mt-1.5">
          {tag.map((item, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs bg-gray-700 text-gray-200 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
