import netlifyIdentity from "netlify-identity-widget";
import { auth } from "../store/";

export const setupAuth = () => {
  netlifyIdentity.init();
  netlifyIdentity.on("login", (user) => {
    const email = user.email;
    const username = user.user_metadata.full_name;
    auth.login(username, email);
    netlifyIdentity.close();
  });
};
