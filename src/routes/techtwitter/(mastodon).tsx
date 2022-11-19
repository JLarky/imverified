import { For } from "solid-js";
import { Head, Meta, Title } from "solid-start";
import users_js from "../../data/twitter_js.json";
import users_js2 from "../../data/twitter_js2.json";

const [jlarky, ...rest] = users_js;
const users = [...rest, ...users_js2].sort(
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
      <details>
        <summary class="">Tell me more</summary>
        <p class="">
          Those are just some accounts that have a mastodon. But they got
          popular on twitter first, so you may or may not want to follow them.
        </p>
        <p class="">
          Saving your instance at{" "}
          <a
            href="https://mastodonprofile.web.app/"
            class="hover:underline text-blue-600"
          >
            mastodonprofile.web.app
          </a>{" "}
          will help you a lot :) See{" "}
          <a
            href="https://twitter.com/dev_elizabeth/status/1593511444389183489"
            class="hover:underline text-blue-600"
          >
            this tweet
          </a>{" "}
          for more info.
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
            href={`https://mastodonprofile.web.app/@${props.username}`}
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
