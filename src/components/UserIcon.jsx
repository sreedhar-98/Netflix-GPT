import React from 'react'
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from "../utils/userSlice";

const UserIcon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignOut = async () => {
        const signOutUser = await signOut(auth);
        dispatch(removeUser);
        navigate("/");
      };
  return (
    <div className="pr-4 md:pr-8 group relative duration-200">
          <div
            className="bg-red-500 text-white font-bold p-1 text-xs md:text-md md:px-4 md:py-2 rounded-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <div className="absolute hidden group-hover:block -left-5">
          <p className="text-red-200 -mb-2 ml-5 border-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffebee"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </p>
          <div className="w-16 md:w-32 sm:w-24 bg-red-100 rounded-xl">
            <ul className="flex flex-col items-center justify-between list-none text-xs sm:text-sm">
            <li className="md:p-2 p-1 text-red-500 font-bold border-b border-red-400 cursor-pointer hover:scale-105 hover:text-red-600">Account</li>
            <li className="md:p-2 p-1 text-red-500 font-bold border-b border-red-400 cursor-pointer hover:scale-105 hover:text-red-600">Setting</li>
            <li className="md:p-2 p-1 text-red-500 font-bold cursor-pointer hover:scale-105 hover:text-red-600" onClick={handleSignOut}>Logout</li>
            </ul>
          </div>
          </div>
        </div>
  )
}

export default UserIcon