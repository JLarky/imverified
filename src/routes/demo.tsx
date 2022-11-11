import { A, unstable_island } from "solid-start";

const Counter = unstable_island(() => import("../components/Counter"));
const Hover = unstable_island(() => import("../components/Hover"));

export default function Demo() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Demo to show that this app is real
      </h1>
      <p class="my-4">
        You can see some state
        <br />
        <Counter />
      </p>
      <p class="mt-8">
        <A
          href="/demo2"
          class="text-sky-600 hover:underline"
          onMouseMove={() => {}}
        >
          Just a link
        </A>{" "}
        <Hover />
      </p>
    </main>
  );
}
