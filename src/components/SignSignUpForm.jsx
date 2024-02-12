import React, { useState } from "react";
import { validateForm } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const SignSignUpForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validationMessage, setValdationMessage] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle form validation
    const message = validateForm(email, password);
    setValdationMessage(message);

    if (validationMessage) return;

    // if validation is successful then signIn/signUp
    if (!isSignIn) {
      // Sign up logic here
      try {
        const authenticate = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = authenticate.user;
        updateProfile(user, {
          displayName: name,
        }).then(()=>{
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName }));
        });
        
        setEmail("");
        setPassword("");
        setName("");
      
      } catch (error) {
        console.log(error.message);
        setValdationMessage(error.code + " : " + error.message);
      }
    } else {
      // Sign Logic here
      try {
        const authenticate = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = authenticate.user;

        // console.log(user)
        setEmail("");
        setPassword("");

      } catch (error) {
        console.log(error.message);
        setValdationMessage(error.code + " : " + error.message);
      }
    }
  };

  return (
    <form
      className="flex flex-col mt-28 mx-auto w-[80%] sm:w-[35%] p-12 bg-black/60 absolute inset-0 rounded-md gap-6"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-semibold text-white">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>
      <p className="text-red-400 text-sm p-1 -my-4">{validationMessage}</p>
      <div className="flex flex-col gap-6">
        {!isSignIn && (
          <input
            className="bg-[#333] p-4 w-full text-gray-300 rounded-md"
            type="text"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        )}
        <input
          className="bg-[#333] p-4 w-full text-gray-300 rounded-md"
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email or phone number"
          name="email"
        />
        <input
          className="bg-[#333] p-4 w-full text-gray-300 rounded-md"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          name="email"
        />
      </div>
      <button className="bg-[#e50914] font-semibold p-4 w-full text-white rounded-md">
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>
      {isSignIn && (
        <div className="flex items-center -mt-5 text-[#333] justify-between text-sm sm:flex-row flex-col">
          <div className="flex items-center gap-1">
            <input
              className="bg-gray-500"
              type="checkbox"
              name="checkbox"
              id=""
            />
            <span className="text-gray-300">Remember Me</span>
          </div>
          <span className="text-gray-300">Need Help?</span>
        </div>
      )}
      {isSignIn ? (
        <div className="flex gap-1 items-center flex-col sm:flex-row">
          <span className="text-gray-500">New to Netflix?</span>
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={() => setIsSignIn(false)}
          >
            Sign up now
          </span>
        </div>
      ) : (
        <div className="flex gap-1 items-center flex-col sm:flex-row">
          <span className="text-gray-500">Already a Netflix User?</span>
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            Sign in
          </span>
        </div>
      )}
    </form>
  );
};

export default SignSignUpForm;
