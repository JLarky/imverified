export type MastodonUserType = {
  username: string;
  displayName: string;
  avatar: string;
  twitterFollowers: number;
  tags: string[];
  isVerified: boolean;
  isActive: boolean;
};

export const MastodonUser = (props: {
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
