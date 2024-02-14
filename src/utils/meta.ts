import { Metadata } from "next";

const siteName = "Hatim App";
const title = `${siteName} - Next.js Starter`;
const description = "Hatim Takip ve Kur'an-ı Kerim Uygulaması";
const author = "Emrah Atalay";
const publisher = "Emrah Atalay";
const keywords = "hatim, hatim app, hatim takip, kur'an-ı kerim";
const url =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://hatim.app";

const locale = "tr-TR";

export const siteMetadata: Metadata = {
    title: title,
    description: description,
    keywords: keywords,
    robots: "noindex, nofollow",
    authors: {
        name: author,
        url: url,
    },
    publisher: publisher,
    openGraph: {
        type: "website",
        locale: locale,
        url: url,
        title: title,
        description: description,
        siteName: siteName,
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        creator: "@emrhatalay",
    },
};
