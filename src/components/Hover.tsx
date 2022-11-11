import { createSignal } from "solid-js";
import { A } from "solid-start";

export default function Hover() {
  const [hover, setHover] = createSignal(false);
  return (
    <A
      href="/demo2"
      class="text-sky-600 hover:underline"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      Special link {hover() ? "huh?" : "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}
    </A>
  );
}
