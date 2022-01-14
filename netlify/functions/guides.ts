import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    const guides = await res.json();
    if (res.ok && guides) {
      return {
        statusCode: 200,
        body: JSON.stringify(guides),
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };
    }
  }

  return { statusCode: 404 };
};
