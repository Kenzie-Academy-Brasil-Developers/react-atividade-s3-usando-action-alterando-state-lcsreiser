import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/action";
import "./style.css";

const UserCard = () => {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState("");

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  const { name } = useSelector((state) => state.user);

  return (
    <div className="divName">
      <h2>User name: {name}</h2>
      <input type="text" onChange={(event) => setNewName(event.target.value)} />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
