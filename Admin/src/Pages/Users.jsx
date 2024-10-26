import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { serverUrl } from "../../Config";
import Loading from "../Components/Loading";
import { IoClose } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";

const Users = ({ token }) => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${serverUrl}/api/user/users`, {
        headers: {
          token,
          "Content-Type": "application/json",
        },
      });
      const data = await response.data;
      if (data.success) {
        setUserList(data.user);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("User list fetch error:", error);
      toast.error("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleDelete = async (id) => {
    console.log("id", id);
  };
  const handleedit = async (id) => {
    console.log("id", id);
  };

  return (
    <div className="p-4">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="overflow-x-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold">
              User List : {userList.length}
            </h1>
            <button className="text-black border border-gray-400 bg-transparent hover:bg-black hover:text-white py-2 px-4 rounded-md duration-300">
              Add To Users
            </button>
          </div>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Serial No</th>
                <th className="px-4 py-2 border-b">Username</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Actions</th>
                <th className="px-4 py-2 border-b">Edit</th>
                <th className="px-4 py-2 border-b"> Admin Status</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b text-center">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {user.name}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="px-3 py-1 text-white bg-red-500 hover:bg-red-400 rounded"
                    >
                      <IoClose />
                    </button>
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    <button
                      onClick={() => handleedit(user._id)}
                      className="px-3 py-1 text-white bg-green-400 hover:bg-green-600 rounded"
                    >
                      <MdModeEditOutline />
                    </button>
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    <button className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-700 rounded">
                      False
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
