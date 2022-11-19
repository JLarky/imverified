import { createEffect, createMemo, createSignal, For } from "solid-js";
import type { DocumentNode } from "ultrahtml";
import { TEXT_NODE } from "ultrahtml";
import { ELEMENT_NODE } from "ultrahtml";
import { parse, DOCUMENT_NODE, walkSync } from "ultrahtml";
import type { MastodonUserType } from "./MastodonUser";
import { MastodonUser } from "./MastodonUser";

export default function Import() {
  let old = "";
  try {
    if (typeof localStorage !== "undefined") {
      old = localStorage.getItem("import_html") || "";
    }
  } catch (e) {
    console.error(e);
  }
  const [html, setHTML] = createSignal(old);
  createEffect(() => {
    localStorage.setItem("import_html", html());
  });
  const [isClient, setIsClient] = createSignal(false);
  createEffect(() => {
    setIsClient(true);
  });
  const users = createMemo(() => {
    if (!isClient()) return [];
    const ast = parse(html()) as DocumentNode;
    if (ast.type === DOCUMENT_NODE) {
      const newUsers: MastodonUserType[] = [];
      walkSync(ast, (node) => {
        if (node.type === ELEMENT_NODE) {
          if (
            node.name === "a" &&
            node.attributes.class === "account__display-name"
          ) {
            const user: MastodonUserType = {
              username: "",
              displayName: "",
              avatar: "",
              twitterFollowers: 0,
              tags: [],
              isVerified: false,
              isActive: false,
            };
            walkSync(node, (n) => {
              if (n.type === ELEMENT_NODE) {
                if (
                  n.name === "img" &&
                  "account__avatar" === n.parent.attributes.class
                ) {
                  user.username = n.attributes.alt;
                  user.avatar = n.attributes.src;
                }
              }
            });
            walkSync(node, (n) => {
              if (n.type === TEXT_NODE) {
                if ("display-name__html" === n.parent.attributes.class) {
                  user.displayName = n.value;
                }
              }
            });
            newUsers.push(user);
          }
        }
      });
      return newUsers;
    }
    return [];
  });
  return (
    <>
      <p>Input:</p>
      <textarea
        class="w-full h-20 text-black"
        placeholder="Paste your buffer here"
        value={html()}
        onInput={(e) => {
          setHTML(e.currentTarget.value);
        }}
      />
      <p>Output:</p>
      <textarea
        readOnly
        class="w-full h-20 text-black"
        placeholder="Wait for it..."
        value={JSON.stringify(users(), null, 2)}
        onClick={(e) => {
          e.currentTarget.setSelectionRange(0, e.currentTarget.value.length);
        }}
      />
      <p>Preview: ({users().length})</p>
      <For each={users()}>
        {(user) => (
          <MastodonUser
            username={user.username}
            displayName={user.displayName}
            avatar={user.avatar}
          />
        )}
      </For>
    </>
  );
}
