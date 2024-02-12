import { LoginBG } from "../utils/constants";
import Header from "./Header";
import SignSignUpForm from "./SignSignUpForm";

const Login = () => {
  
  return (
    <div className="relative h-screen w-full bg-black">
      <Header />
      <div>
        <img
          className="w-full h-screen object-cover hidden md:block"
          src={LoginBG}
          alt="bg-image"
        />
      </div>
      <SignSignUpForm/>
    </div>
  );
};

export default Login;
