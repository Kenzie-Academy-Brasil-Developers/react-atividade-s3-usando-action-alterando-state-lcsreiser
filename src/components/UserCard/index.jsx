import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/action";
import "./style.css";

const UserCard = () => {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState("");

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <div className="divName">
      <h2>User name: {newName}</h2>
      <input type="text" onChange={(event) => setNewName(event.target.value)} />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
