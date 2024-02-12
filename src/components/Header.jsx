import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import UserIcon from "./UserIcon";
import { toggleGPTSearchValue } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((store) => store.user);
  const isGPTSearch = useSelector((store) => store.gpt.showGPTSearch)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGPTSearchButton =()=>{
    dispatch(toggleGPTSearchValue())
  }

  return (
    <div className="flex md:flex-row items-center md:px-6 py-1 w-full absolute bg-gradient-to-b from-black justify-between z-50">
      <img className="w-20 h-16 md:w-32 md:h-20" src={LOGO} alt="logo" />
      {selector &&<div className="flex gap-4 items-center">
      <button className="p-1 text-xs md:text-md md:px-4 md:py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800" onClick={handleGPTSearchButton}>{!isGPTSearch?"GPT Search":"HomePage"}</button>
        <UserIcon />
        </div>}
    </div>
  );
};

export default Header;
