import { createEffect, createResource, createSignal } from "solid-js";

async function createQR(url: string) {
  const QRCode = await import("qrcode");
  return await QRCode.toDataURL(url, {
    color: { dark: "#1d9bf0", light: "#fff" },
  });
}

const transparentGif =
  "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

export default function QRCode(props: { url: string }) {
  const [isClient, setIsClient] = createSignal(false);
  createEffect(() => {
    setIsClient(true);
  });
  const [data] = createResource(isClient, () => createQR(props.url));

  return (
    <img
      height="164"
      width="164"
      src={data() ?? transparentGif}
      alt={props.url}
    />
  );
}
