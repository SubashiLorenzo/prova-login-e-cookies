import { useEffect, useState } from "react";
export default function Header({ visibility }) {
  const [user, setUser] = useState("");
  const [userLogged, setUserLogged] = useState(false);

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

  return (
    <div>
      {userLogged && (
        <div>
          <p>{user}</p>
          <button>LOGOUT</button>
        </div>
      )}
    </div>
  );
}
