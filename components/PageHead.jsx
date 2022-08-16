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
        content="Muhammad Razan Fawwaz, an undergraduate student at Universitas Syiah Kuala. Portfolio Website."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://razanfawwaz.xyz/" />
      <meta property="og:title" content={`${pagetitle} | ramzanfawwaz.xyz`} />
      <meta
        property="og:description"
        content="THALASSIC is back to bring together the youth generation, particularly high schoolers, in order to strengthen and enhance collaborative and competitive skills."
      />
      <meta
        property="og:image"
        content="https://thalassic.id/Assets/Meta.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://thalassic.id/" />
      <meta
        property="twitter:title"
        content={`${pagetitle} | Thalassic 2022: Unleash the Utopia Fiesta`}
      />
      <meta
        property="twitter:description"
        content="THALASSIC is back to bring together the youth generation, particularly high schoolers, in order to strengthen and enhance collaborative and competitive skills."
      />
      <meta
        property="twitter:image"
        content="https://thalassic.id/Assets/Meta.jpg"
      />
      <script async src="https://cdn.splitbee.io/sb.js"></script>
    </Head>
  );
}
