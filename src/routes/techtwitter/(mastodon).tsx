import { For } from "solid-js";
import { Head, Meta, Title } from "solid-start";
import users_js from "../../data/twitter_js.json";
import users_js2 from "../../data/twitter_js2.json";
import users_js3 from "../../data/twitter_js3.json";
import { unstable_island } from "solid-start";

// import Counter from "../../components/Counter";
const Counter = unstable_island(() => import("../../components/Counter"));

const [jlarky, ...rest] = users_js;
const users = [...rest, ...users_js2, ...users_js3].sort(
  (a, b) => b.twitterFollowers - a.twitterFollowers
);

export default function Mastodon() {
  return (
    <main class="mx-auto text-[#d9e1e8] p-4 bg-[#282c37]">
      <Head>
        <Title>Tech twitter codex</Title>
        <Meta
          name="description"
          content="How do you find all those people you used to get recommended by twitter algo"
        />
      </Head>
      <h1 class="text-center max-6-xs text-2xl text-[#d9e1e8] my-16">
        If you are fleeting from #techtwitter, this resource could be helpful
        for you.
      </h1>
      {1 && <Counter />}
      <details>
        <summary class="">Tell me more</summary>
        <p class="">
          Those are just some accounts that have a mastodon. But they got
          popular on twitter first, so you may or may not want to follow them.
        </p>
        <p class="">
          We are using mastodon-redirect.deno.dev to redirect you to the
          instance that you are logged in. Please{" "}
          <button
            class="text-blue-300 hover:text-blue-500 underline"
            onclick="javascript:document.getElementById('set-username').click()"
          >
            set your username
          </button>{" "}
          for it to work correctly.
        </p>
      </details>
      <p class="my-4">That's just me, lol</p>
      <div role="feed" class="border border-[#393f4f] border-b-0">
        <MyMastodonUser />
      </div>
      <p class="my-4">Popularity contest:</p>
      <div role="feed" class="border border-[#393f4f] border-b-0">
        <For each={users}>
          {(user) => (
            <MastodonUser
              username={user.username}
              displayName={user.displayName}
              avatar={user.avatar}
            />
          )}
        </For>
      </div>
      <style>
        {`html {
          background-color: #282c37;
        }`}
      </style>
    </main>
  );
}

const MyMastodonUser = () => {
  return (
    <MastodonUser
      username={jlarky.username}
      displayName={jlarky.displayName}
      avatar={jlarky.avatar}
    />
  );
};

const MastodonUser = (props: {
  username: string;
  displayName: string;
  avatar: string;
}) => {
  return (
    <article
      aria-posinset="1"
      aria-setsize="18"
      data-id="109366390715807512"
      tabindex="0"
    >
      <div class="account p-4 border-b border-[#393f4f]">
        <div class="account__wrapper flex gap-[10px]">
          <a
            target="_blank"
            class="account__display-name flex items-center flex-auto text-sm overflow-hidden no-underline gap-2"
            title={props.username}
            data-href={`https://mastodon-redirect.deno.dev/?redirect=@${props.username}`}
            href={`https://mastodon-redirect.deno.dev/?redirect=@${props.username}`}
          >
            <div class="account__avatar-wrapper">
              <div
                class="account__avatar"
                style={{ width: "46px", height: "46px" }}
              >
                <img src={props.avatar} alt={props.username} />
              </div>
            </div>
            <span class="display-name block max-w-full truncate text-[#9baec8]">
              <bdi>
                <strong class="display-name__html block overflow-hidden font-medium text-white">
                  {props.displayName}
                </strong>
              </bdi>{" "}
              <span class="display-name__account">@{props.username}</span>
            </span>
          </a>
          <div class="account__relationship hidden">we don't know</div>
        </div>
      </div>
    </article>
  );
};
