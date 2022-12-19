import { Title, unstable_island } from "solid-start";

const ShareText = unstable_island(() => import("../components/ShareText"));

export default function ShareUrl() {
  return (
    <main class="mx-auto text-gray-700 p-4">
      <Title>Share anything on Twitter without a ban</Title>
      <h1 class="text-center max-6-xs text-4xl text-sky-700 font-thin uppercase my-16">
        Share anything on Twitter without a ban
      </h1>
      <ShareText />
    </main>
  );
}
