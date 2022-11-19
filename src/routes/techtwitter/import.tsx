import { unstable_island } from "solid-start";

const Import = unstable_island(() => import("../../components/Import"));

export default function MastodonImport() {
  return (
    <main class="mx-auto text-[#d9e1e8] p-4 bg-[#282c37]">
      <h1 class="text-center max-6-xs text-2xl text-[#d9e1e8] my-16">
        If you are fleeting from #techtwitter, this resource could be helpful
        for you.
      </h1>
      <p>
        Run this on a page with users, and paste into textarea, keep in mind
        that only visible users are going to get copied, so try to make your
        zoom smaller
      </p>
      <pre class="m-2">
        copy(document.querySelector(".item-list").innerHTML)
      </pre>
      <Import />
      <style>
        {`html {
            background-color: #282c37;
          }`}
      </style>
    </main>
  );
}
