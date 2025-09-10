import React from "react";

const Breadcrumb = () => {
  return (
    <div className="sticky top-0 z-20 px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium text-gray-700">Home</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
