const Search = () => {
  return (
    <div className="flex items-center justify-between bg-white rounded-full shadow-md overflow-hidden w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search for a movie"
        className="py-2 px-4 outline-none rounded-l-full w-full"
      />
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a8 8 0 11-16 0 8 8 0 0116 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 17l6-6m0 0l-6-6m6 6H7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
