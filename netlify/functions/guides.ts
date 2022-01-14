import { Handler } from "@netlify/functions";
import fetch from "node-fetch";

// not used, cannot access store value in context=module, so cannot send user along with request
// context.clientContext.user is always undefined
export const handler: Handler = async (event, context) => {
  if (!context.clientContext.user)
    return {
      statusCode: 401,
      body: JSON.stringify({ msg: "you need to be logged in to see this" }),
    };

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const guides = await res.json();
  if (res.ok) {
    return {
      statusCode: 200,
      body: JSON.stringify({ guides }),
    };
  }
};
