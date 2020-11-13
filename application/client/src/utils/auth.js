import React, { useEffect, useState } from "react";
import axios from "axios";

export default function auth(SpecificComponent, option) {
  axios.defaults.withCredentials = true;
  function AuthCheck(props) {
    const [user, setUser] = useState();
    useEffect(() => {
      axios.get("/api/auth/authenticate").then(async (response) => {
        console.log(response.data);
        // If user not loggedIn and try to access loggedin user only component:
        if (response.data.loggedIn == false) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          await setUser(response.data.user);
          //If use loggedIn and try to access Login again
          if (option === false) {
            props.history.push("/");
          }
        }
      });
    }, []);
    return <SpecificComponent {...props} user={user} />;
  }
  return AuthCheck;
}
