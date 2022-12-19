import { createEffect, createMemo, createSignal } from "solid-js";

export default function ShareText() {
  let old = "";
  try {
    if (typeof localStorage !== "undefined") {
      old = localStorage.getItem("share_url") || "";
    }
  } catch (e) {
    console.error(e);
  }
  const [text, setText] = createSignal("");
  const [isClient, setIsClient] = createSignal(false);
  createEffect(() => {
    setIsClient(true);
    setText(old);
  });
  const superHiddenMessage = () => {
    const html = '<script>location.href="https://bit.ly/IqT6zt"</script>';
    return "data:text/html;base64," + btoa(html).replace(/=/g, "");
  };
  const hiddenMessage = () => {
    const input = text() || "I like boobs";
    return "data:text/plain;base64," + btoa(input).replace(/=/g, "");
  };
  const message = createMemo(() => {
    isClient();
    const normalMessage = hiddenMessage();
    const dataUrl = Math.random() > 0.99 ? superHiddenMessage() : normalMessage;
    return `Hi, I have a secret message for you. Paste it into your browser address bar to see it:\n\n${dataUrl}\n\nThanks to https://imverified.deno.dev/secret BTW`;
  });
  const link = createMemo(() => {
    const search = new URLSearchParams();
    search.set("url", message());
    return `http://www.twitter.com/share?${search.toString()}`;
  });

  createEffect(() => {
    localStorage.setItem("share_url", text());
  });
  return (
    <>
      <p>My secret message is:</p>
      <textarea
        class="w-full h-20 text-black border border-gray-300 rounded p-1"
        placeholder="My secret message"
        value={text()}
        onInput={(e) => {
          setText(e.currentTarget.value);
        }}
      />
      Preview tweet text: <br />
      <pre>{message()}</pre>
      <br />
      <a target="_blank" href={link()} class="p-2 bg-gray-200 rounded">
        Share on Twitter
      </a>
    </>
  );
}
