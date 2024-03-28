import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export default function Header({ visibility }) {
  const [user, setUser] = useState("");
  const [userLogged, setUserLogged] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function username() {
      let res = await fetch("http://localhost:3001/sessions", {
        credentials: "include",
      });
      let json = await res.json();
      if (res.status === 200) {
        setUser(json.username);
        setUserLogged(true);
      } else {
        setUserLogged(false);
      }
    }
    username();
  }, [visibility]);
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      {userLogged && (
        <div>
          <p>{user}</p>
          <button onClick={handleClick}>LOGOUT</button>
        </div>
      )}
    </div>
  );
}
