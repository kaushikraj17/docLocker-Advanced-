// "use client";
// import React, { useState } from "react";
// import CreateFolder from "@/component/Dashboard/CreateFolder";

// const DriveInterface = () => {
//   const [currentFolderId, setCurrentFolderId] = useState(null);
//   const [activeTab, setActiveTab] = useState("createFolder");

//   return (
//     <div className="h-full flex flex-col">
//       <div className="flex-1 overflow-auto p-6">
//         <div className="flex justify-center items-start pt-12">
//           {activeTab === "createFolder" && (
//             <CreateFolder
//               setActiveTab={setActiveTab}
//               currentFolderId={currentFolderId}
//               setCurrentFolderId={setCurrentFolderId}
//             />
//           )}
//           {activeTab === "myDrive" && (
//             <p>Show My Drive contents here (pass currentFolderId for data)</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DriveInterface;
