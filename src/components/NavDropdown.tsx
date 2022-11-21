import { createSignal, createEffect, createMemo } from "solid-js";

export default function NavDropdown() {
  const [show, setShow] = createSignal(false);
  const [username, setUsername] = createSignal("");
  createEffect(() => {
    let old = "";
    try {
      if (typeof localStorage !== "undefined") {
        old = localStorage.getItem("username") || "";
      }
    } catch (e) {
      console.error(e);
    }
    setUsername(old);
  });
  createEffect(() => {
    console.log("username", username());
    let suffix = "";
    if (username()) {
      const [, user, instance] = username().split("@");
      if (user && instance) {
        suffix = "&set=https://" + instance;
      }
    }
    document.querySelectorAll("a.account__display-name").forEach((el) => {
      const a = el as HTMLAnchorElement;
      a.href = a.dataset.href + suffix;
    });
  });
  // const iframUrl = createMemo(() => {
  //   if (username()) {
  //     const [, user, instance] = username().split("@");
  //     if (user && instance) {
  //       return `https://mastodon-redirect.deno.dev/?set=https://${instance}`;
  //     }
  //   }
  // });
  return (
    <>
      {/* {iframUrl() && <iframe src={iframUrl()} />} */}
      <button
        type="button"
        class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
        onClick={() => setShow(!show())}
      >
        <span class="sr-only">Open user menu</span>
        <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            class="absolute -left-1 w-12 h-12 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </button>
      <div
        class={`z-50 absolute right-10 ${
          show() ? "block" : "hidden"
        } my-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
        id="user-dropdown"
      >
        {username() && (
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">
              Your username is
            </span>
            <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
              {username()}
            </span>
          </div>
        )}
        <ul class="py-1" aria-labelledby="user-menu-button">
          {/* <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li> */}
          <li>
            <button
              id="set-username"
              onClick={() => {
                const username = prompt("Your username or profile link");
                if (username) {
                  const [, user, instance] = username.split("@");
                  let goodUsername = "";
                  if (user && instance) {
                    goodUsername = "@" + user + "@" + instance;
                  } else {
                    try {
                      const url = new URL(username);
                      const path = url.pathname.split("/");
                      if (path[1] && path[1][0] === "@") {
                        goodUsername = path[1] + "@" + url.hostname;
                      }
                    } catch (e) {
                      console.error(e);
                    }
                  }
                  if (goodUsername) {
                    setUsername(goodUsername);
                    localStorage.setItem("username", goodUsername);
                    return;
                  }
                }
                alert("Username has to be in a @jlarky@fosstodon.org format");
              }}
              class="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Set username
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                localStorage.removeItem("username");
                setUsername("");
              }}
              class="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </button>
          </li>
        </ul>
      </div>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </>
  );
}
