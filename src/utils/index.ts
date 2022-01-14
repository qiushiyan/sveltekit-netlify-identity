import netlifyIdentity from "netlify-identity-widget";
import { auth } from "../store/";

export const setupAuth = () => {
  netlifyIdentity.init();

  netlifyIdentity.on("init", () => {
    auth.ready();
  });

  netlifyIdentity.on("login", (user) => {
    const email = user.email;
    const username = user.user_metadata.full_name;
    const token = user.token.access_token;
    auth.login(username, email, token);
    netlifyIdentity.close();
  });

  netlifyIdentity.on("logout", () => {
    auth.logout();
    netlifyIdentity.close();
  });
};

export const fetchGuides = async (email: string, token: string) => {
  const res = await fetch(
    "/.netlify/functions/guides",
    email && {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // {msg} when error, {guides} when success

  const data = await res.json();
  return data;
};
