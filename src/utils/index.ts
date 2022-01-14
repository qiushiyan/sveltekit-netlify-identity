import netlifyIdentity from "netlify-identity-widget";
import { auth } from "../store/";

export const setupAuth = () => {
  netlifyIdentity.init();

  netlifyIdentity.on("init", () => {});

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
