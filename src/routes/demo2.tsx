import { A } from "solid-start";

export default function Demo2() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        This one does nothing, go back
      </h1>
      <p class="mt-8">
        <A
          href="/demo"
          class="text-sky-600 hover:underline"
          onMouseMove={() => {}}
        >
          Go back
        </A>
      </p>
    </main>
  );
}
