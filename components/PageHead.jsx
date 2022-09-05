import React from "react";
import Head from "next/head";

export default function PageHead({ pagetitle }) {
  return (
    <Head>
      <title>{`${pagetitle} | razanfawwaz.xyz`}</title>
      <meta
        name="title"
        content={`${pagetitle} | Muhammad Razan Fawwaz, an undergraduate student at Universitas Syiah Kuala.`}
      />
      <meta
        name="description"
        content="Muhammad Razan Fawwaz, an undergraduate student at Universitas Syiah Kuala. Personal Website."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://razanfawwaz.xyz/" />
      <meta property="og:title" content={`${pagetitle} | razanfawwaz.xyz`} />
      <meta
        property="og:description"
        content="Muhammad Razan Fawwaz, an undergraduate student at Universitas Syiah Kuala. Personal Website."
      />
      <meta property="og:image" content="https://razanfawwaz.xyz/meta.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@razanfawwaz" />
      <meta
        property="twitter:title"
        content={`${pagetitle} | razanfawwaz.xyz`}
      />
      <meta
        property="twitter:description"
        content="Muhammad Razan Fawwaz, an undergraduate student at Universitas Syiah Kuala. Personal Website."
      />
      <meta
        property="twitter:image"
        content="https://razanfawwaz.xya/meta.jpg"
      />

      <script async src="https://cdn.splitbee.io/sb.js"></script>
    </Head>
  );
}
