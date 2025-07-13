import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["portfolio-peach-mu-55.vercel.app", "fastly.picsum.photos"],
  },
};

export default withNextIntl(nextConfig);
