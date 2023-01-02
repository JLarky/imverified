import { createHandler } from "solid-start/entry-server";

export default createHandler(({ forward }) => {
  return (event) => {
    if (event.request.method === "GET") {
      const url = new URL(event.request.url);
      const newHost = "https://imverified.deno.dev/";
      const newUrl = new URL(url.pathname, newHost);
      newUrl.search = url.search;
      return new Response(null, {
        status: 301,
        headers: {
          Location: newUrl.toString(),
        },
      });
    }
    return forward(event);
  };
});
