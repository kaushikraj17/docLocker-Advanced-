"use client";

import React, { useEffect, useState } from "react";
import {
  TrashIcon,
  XMarkIcon,
  ArrowPathIcon,
  FolderIcon,
  DocumentIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const TrashPage = () => {
  const [trashItems, setTrashItems] = useState([]);

  const fetchAll = async () => {
    console.log("[TrashPage] Fetching all trash items...");

    try {
      const res = await fetch("/api/files/recycle", {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();
      console.log("[TrashPage] API Response:", result);

      // Combine folders and documents into a single array
      const allItems = [
        ...(result.folders || []),
        ...(result.documents || [])
      ];

      setTrashItems(allItems);
    } catch (error) {
      console.error("[TrashPage] Failed to fetch trash items:", error);
    }
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "folder":
        return <FolderIcon className="w-5 h-5 text-blue-500 inline-block mr-2" />;
      case "pdf":
        return <DocumentIcon className="w-5 h-5 text-red-500 inline-block mr-2" />;
      case "image":
        return <PhotoIcon className="w-5 h-5 text-green-500 inline-block mr-2" />;
      default:
        return <DocumentIcon className="w-5 h-5 text-gray-500 inline-block mr-2" />;
    }
  };

  const handleTrashAction = async (action, item) => {
    console.log(`[TrashPage] ${action} action on`, item);

    // Implement API calls for restore or permanent delete
    try {
      const res = await fetch(`/api/files/recycle/${item.id}/${action}`, {
        method: "PATCH",
      });

      if (!res.ok) {
        throw new Error(`Failed action ${action}. Status: ${res.status}`);
      }

      const result = await res.json();
      console.log("[TrashPage] Action result:", result);

      // Refresh list after action
      fetchAll();
    } catch (error) {
      console.error("[TrashPage] Error performing action:", error);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="p-6 w-[60vw] mx-auto my-16">
      <h2 className="text-2xl font-bold mb-4">Trash</h2>

      <table className="w-full border-collapse bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Deleted Date</th>
            <th className="p-3">Remaining Days</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {trashItems.map((item) => (
            <tr
              key={item.id}
              className="border border-opacity-20 border-gray-100 hover:bg-gray-50"
            >
              <td className="p-3">
                {getFileIcon(item.type)}
                <span className="line-through text-gray-800 font-medium">
                  {item.name}
                </span>
              </td>

              <td className="p-3 text-gray-600">{item.deletedDate || item.modified}</td>
              <td className="p-3 text-gray-600 pl-8">{item.remainingDays || 'N/A'} days</td>

              <td className="p-3">
                <button
                  onClick={() => handleTrashAction("restore", item)}
                  className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 mr-2"
                  title="Restore"
                >
                  <ArrowPathIcon className="w-4 h-4 inline mr-1" />
                  Restore
                </button>

                <button
                  onClick={() => handleTrashAction("parmanentDelete", item)}
                  className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200"
                  title="Delete Forever"
                >
                  <XMarkIcon className="w-4 h-4 inline mr-1" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {trashItems.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          <TrashIcon className="w-12 h-12 mx-auto mb-3 text-gray-400" />
          <p className="text-lg">Trash is empty</p>
          <p className="text-sm text-gray-400">
            Items you delete will appear here
          </p>
        </div>
      )}
    </div>
  );
};

export default TrashPage;