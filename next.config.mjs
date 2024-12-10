/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  output: "standalone",
  images: {
    domains: [
      "https://s3.ap-east-1.amazonaws.com",
      "s3.ap-east-1.amazonaws.com",
    ],
  },
};

export default withNextIntl(nextConfig);
