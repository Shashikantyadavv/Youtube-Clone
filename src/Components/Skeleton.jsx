// import React from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// const SkeletonVideo = () => {
//   return (
//     <div>
//       <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
//         <Skeleton height={180} />
//         <div>
//           <Skeleton
//             style={{ margin: "0.5rem" }}
//             circle
//             height={40}
//             width={40}
//           />
//         </div>
//         <Skeleton height={40} width="75%" />
//       </SkeletonTheme>
//     </div>
//   );
// };

// export default SkeletonVideo;


import React from 'react';

const SkeletonVideo = () => (
  <div className="max-w-screen-lg mx-auto mt-4">
    {[...Array(5)].map((_, rowIndex) => (
      <div key={rowIndex} className="flex mb-4 place-content-center gap-2">
        {[...Array(4)].map((_, colIndex) => (
          <div key={colIndex} className="max-w-xs rounded shadow-lg bg-gray-800 flex flex-col h-full mr-4">
            {/* Video thumbnail skeleton with animation */}
            <div className="relative flex-shrink-0">
              <div className="w-[284.44px] h-[160px] bg-gray-600 animate-pulse"></div>
              <span className="absolute bottom-2 right-2 bg-black text-white px-1 py-0.5 text-xs rounded">
                {/* Empty space for duration */}
              </span>
            </div>
        
            {/* Video details skeleton */}
            <div className="px-1 py-2 flex-grow flex flex-col justify-between">
              {/* Video title skeleton */}
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                <div className="flex-grow ml-4">
                  <div className="h-4 bg-gray-600 mb-1"></div>
                  <div className="h-4 bg-gray-600"></div>
                </div>
              </div>
        
              {/* Views and upload date skeleton */}
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <div className="w-8 h-4 bg-gray-600 mr-1"></div>
                <div className="w-12 h-4 bg-gray-600"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default SkeletonVideo;
