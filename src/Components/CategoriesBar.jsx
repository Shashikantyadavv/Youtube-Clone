import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesVideos, getPopularVideos } from "../redux/actions/Video.action";
const CategoriesBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "HTML/CSS",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "PHP",
    "Ruby",
    "Swift",
    "SQL",
    "React",
    "Angular",
    "Node.js",
    "Machine Learning",
    "Data Science",
    "Blockchain",
    "Web Development",
    "Mobile Development",
  ];

  const dispatch = useDispatch();

  const handleClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") dispatch(getPopularVideos());
    else dispatch(getCategoriesVideos(category));
  };

  return (
    <div
      className="flex sm:gap-2 md:gap-4 lg:gap-8 xl:gap-12 max-xl:gap-16 p-4 bg-gray-200 overflow-x-auto mt-[72px]"
      style={{ WebkitScrollbar: { width: "0px" } }}
    >
      {categories.map((category, index) => (
        <div
          onClick={() => handleClick(category)}
          key={index}
          className={`px-4 py-2 rounded-lg border cursor-pointer transition-colors duration-300 flex-shrink-0
            ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-white border-gray-300 hover:bg-gray-100"
            }
          `}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoriesBar;
