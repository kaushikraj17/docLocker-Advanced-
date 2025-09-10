"use client";
import React, { useState } from "react";
import {
  PlusIcon,
  FolderPlusIcon,
  CloudArrowUpIcon,
  FolderIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const LeftNavigation = () => {
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("myDrive");

  return (
    <div className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 flex flex-col z-30">
      {/* <div className="p-4">
        <div className="relative">
          <button
            onClick={() => setShowNewMenu(!showNewMenu)}
            className="w-full flex items-center space-x-3 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
          >
            <PlusIcon className="w-5 h-5 text-gray-600" />

            <span className="text-gray-700 font-medium">New</span>
          </button>

          {showNewMenu && (
            <div className="absolute top-12 left-0 w-full bg-white rounded-md shadow-lg border border-gray-200 z-50">
              <Link href={"/dashboard/newFolder"}>
                <button
                  onClick={() => {
                    setActiveTab("newFolder");
                    setShowNewMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
                >
                  <FolderPlusIcon className="w-4 h-4 text-blue-500" />
                  <span>Create new folder</span>
                </button>
              </Link>
              <button
                onClick={() => {
                  setActiveTab("uploadDoc");
                  setShowNewMenu(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2 border-t"
              >
                <CloudArrowUpIcon className="w-4 h-4 text-green-500" />
                <span>Upload document</span>
              </button>
            </div>
          )}
        </div>
      </div> */}

      <nav className="flex-1 px-3">
        <div className="space-y-1">
          <Link href="/dashboard">
            <button
              onClick={() => setActiveTab("myDrive")}
              className={`flex w-full items-center space-x-3 px-3 py-2 rounded-lg transition-colors cursor-pointer mt-4 ${
                activeTab === "myDrive"
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <FolderIcon className="w-5 h-5" />
              <span>My Drive</span>
            </button>
          </Link>
          <Link href="/dashboard/trash">
            <button
              onClick={() => setActiveTab("trash")}
              className={`flex w-full items-center space-x-3 px-3 my-2 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === "trash"
                  ? "text-blue-700 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <TrashIcon className="w-5 h-5" />
              <span>Trash</span>
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default LeftNavigation;
