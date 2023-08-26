import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  // ! Here we know that the user's value will be set using useEffect hook and will never be null so we tell TS compiler that treat {} as AuthUser type and it contains name and email => i.e. we tell it to treat as a AuthUser type and hence it does not throw an error.

  // ! Now we can use user.email without optional chaining. This is called "type Assertion"

  const handleLogin = () => {
    setUser({
      name: "Jagrut",
      email: "example@email.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.email}</div>
      <div>User email is {user.name}</div>
    </div>
  );
};
