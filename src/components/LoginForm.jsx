import { useRef, useState } from "react";
import { checkValidity } from "../utilities/Valid";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utilities/firebase-config";
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const navigate = useNavigate()
  const [signIn, setSignIn] = useState(false);
  const [message, setMessage] = useState("");
  const username = useRef(null);
  const password = useRef(null);
  const email = useRef(null);
  const handleSignIn = () => {
    setSignIn(!signIn);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidity(email.current.value, password.current.value);
    setMessage(message);

    if (message) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/user")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode, errorMessage);
          setMessage(errorCode + "  " + errorMessage);
        });
    }else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/user')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        setMessage(errorCode + "  " + errorMessage);
        
      });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center sm:mx-auto bg-violet-300 sm:my-auto h-[19.5rem] p-5 py-6 shadow-2xl my-12 mx-auto">
      <h1 className="mb-3 text-2xl font-extrabold">
        {!signIn ? "Sign Up" : "sign In"}
      </h1>
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        {!signIn && (
          <input
            ref={username}
            type="text"
            placeholder="Username"
            className="px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md"
            required
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="EmailId"
          className="px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md"
          required
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md"
          required
        />
        <button
          className=" bg-white px-2 font-medium rounded-md"
          onClick={handleSubmit}
        >
          {!signIn ? "Create User" : "Login"}
        </button>
      </form>
      <p className=" font-bold text-xs pt-1 text-red-600 w-52 text-center">{message}</p>
      <p
        onClick={handleSignIn}
        className="p-2 font-semibold hover:underline cursor-pointer"
      >
        {!signIn ? "Already user? Login" : "New user? Register Now"}
      </p>
    </div>
  );
}

export default LoginForm;
