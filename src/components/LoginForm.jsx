import { useState } from "react";

function LoginForm() {
  const [signIn, setSignIn] = useState(false);
  const handleSignIn = () => {
    setSignIn(!signIn);
  };
  const handleSubmit = () => {};
  return (
    <div className="flex flex-col justify-center items-center mx-auto bg-violet-300 my-auto h-[17rem] p-5">
      <h1 className="mb-3 text-2xl font-extrabold">
        {!signIn ? "Sign Up" : "sign In"}
      </h1>
      <div className="flex flex-col gap-5">
        {!signIn && (
          <input
            type="text"
            placeholder="Username"
            className="px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md"
            required
          />
        )}

        <input
          type="email"
          placeholder="EmailId"
          className="px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md"
          required
        />
      </div>
      <button
        className="mt-3 bg-white px-2 font-medium rounded-md"
        onClick={handleSubmit}
      >
        {!signIn ? "Create User" : "Login"}
      </button>
      <p
        onClick={handleSignIn}
        className="mt-2 p-2 font-semibold hover:underline cursor-pointer"
      >
        {!signIn ? "Already user? Login" : "New user? Register Now"}
      </p>
    </div>
  );
}

export default LoginForm;
