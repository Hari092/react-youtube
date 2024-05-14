import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { getDatabase, ref, update, onValue } from "firebase/database";
import { removeUser } from "../utilities/userSlice";
import { auth } from "../utilities/firebase-config";

function UserDetails() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const db = getDatabase();

  const toggleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        dispatch(removeUser());
        console.log("User signed out", user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const userRef = ref(db, `users/-NxmmEd52erBagh3qZlj`);
    onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      console.log(userData);
      setUserData(userData);
    });
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      const newData = {
        userName: userNameRef.current.value,
        lastName: lastNameRef.current.value,
        nickName: nickNameRef.current.value,
        phoneNumber: phoneRef.current.value,
        userAddress: addressRef.current.value,
      };
      writeUserData(newData);
    }
  };

  const writeUserData = (newData) => {
    const userRef = ref(db, `users/-NxmmEd52erBagh3qZlj`);
    update(userRef, newData)
      .then(() => {
        console.log("Data updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating data: ", error);
      });
  };

  const userNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const nickNameRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);

  return (
    <div className="flex justify-center items-center sm:m-auto w-full sm:w-6/12 max-h-max flex-col gap-5 shadow-xl rounded-xl bg-zinc-300 m-3">
      <h1 className="font-extrabold text-3xl my-3">USER DETAILS</h1>
      <div className="flex gap-5 flex-col sm:flex-row">
        <input
          type="text"
          ref={userNameRef}
          disabled={!isEditing}
          className="border-2 border-blue-500 rounded-md text-gray-600 px-3"
          placeholder="First Name"
          defaultValue={userData.userName}
          required
        />
        <input
          type="text"
          ref={lastNameRef}
          disabled={!isEditing}
          className="border-2 border-blue-500 rounded-md text-gray-600 px-3"
          placeholder="Last Name"
          defaultValue={userData.lastName}
          required
        />
      </div>
      <div className="flex gap-5 flex-col sm:flex-row">
        <input
          type="text"
          ref={phoneRef}
          disabled={!isEditing}
          className="border-2 border-blue-500 rounded-md text-gray-600 px-3"
          placeholder="Phone Number"
          maxLength={10}
          defaultValue={userData.phoneNumber}
          required
        />
        <input
          type="text"
          ref={nickNameRef}
          disabled={!isEditing}
          className="border-2 border-blue-500 rounded-md text-gray-600 px-3"
          placeholder="Display Name"
          defaultValue={userData.nickName}
          required
        />
      </div>
      <div>
        <textarea
          ref={addressRef}
          disabled={!isEditing}
          className="rounded-md resize-none sm:h-24 sm:w-[27rem] w-52 border-blue-500 border-2 p-2"
          placeholder="Enter Address"
          defaultValue={userData.userAddress}
          required
        />
      </div>

      <div className="flex my-10">
        <button onClick={handleEdit} className="text-white bg-black p-2 m-2">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          className="text-white bg-black p-2 m-2"
          onClick={toggleSignOut}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserDetails;
