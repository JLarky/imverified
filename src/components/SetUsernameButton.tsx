export default function SetUsernameButton() {
  return (
    <button
      class="text-blue-300 hover:text-blue-500 underline"
      onClick={() => {
        (document.getElementById("set-username") as HTMLAnchorElement).click();
        console.log(document.getElementById("set-username"));
      }}
    >
      set your username
    </button>
  );
}
