export default function About() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <script
        src="https://code.jquery.com/jquery-3.6.1.slim.min.js"
        integrity="sha256-w8CvhFs7iHNVUtnSP0YKEg00p9Ih13rlL9zGqvLdePA="
        crossorigin="anonymous"
      ></script>
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        LOL
      </h1>
      <button class="p-2 bg-gray-200 rounded">Click me</button>
      <script>{`
        $(function() {
          $("button").on({
            mouseover: function() {
              $(this).css({
                position: "fixed",
                left: (Math.random() * 90) + "vw",
                top: (Math.random() * 90) + "vh",
              });
            }
          });
        });
      `}</script>
    </main>
  );
}
