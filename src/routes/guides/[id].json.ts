import type { Request, RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({ params }: Request) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const guide = await res.json();

  if (res.ok && guide) {
    return {
      status: 200,
      body: {
        guide,
      },
    };
  }

  return { status: 404 };
};
