import { RegisterComponent } from "../components";

const Register = () => {
  return (
    <div className="max-w-screen-xl w-full min-h-screen mx-auto relative">
      <img
        src="/assets/auth-bg-2.svg"
        alt="Login-Bg"
        className="fixed left-0 right-0 top-0 bottom-0 h-screen w-full -z-10 object-cover"
      />
      <RegisterComponent />
    </div>
  );
};

export default Register;