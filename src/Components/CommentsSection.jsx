const CommentsSection = () => {
  return (
    <div className="mt-4 px-4">
      <h2 className="text-xl font-semibold">Comments</h2>
      <input
        type="text"
        placeholder="Add a comment..."
        className="w-full border rounded p-2 mt-2"
      />
      <div className="mt-4">
        <div className="flex items-start space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src="https://via.placeholder.com/40"
            alt="User Icon"
          />
          <div className="flex-grow">
            <div className="font-semibold">User Name</div>
            <div className="text-gray-600">This is a comment text placeholder.</div>
            <div className="flex items-center space-x-2 text-sm text-gray-400 mt-1">
              <button className="flex items-center space-x-1">
                <span className="material-icons">thumb_up</span>
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-1">
                <span className="material-icons">reply</span>
                <span>Reply</span>
              </button>
            </div>

            {/* Nested Comment */}
            <div className="ml-8 mt-2">
              <div className="flex items-start space-x-4">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://via.placeholder.com/32"
                  alt="User Icon"
                />
                <div className="flex-grow">
                  <div className="font-semibold">User Name</div>
                  <div className="text-gray-600">This is a nested comment text placeholder.</div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mt-1">
                    <button className="flex items-center space-x-1">
                      <span className="material-icons">thumb_up</span>
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-1">
                      <span className="material-icons">reply</span>
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
