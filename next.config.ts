import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve image sources directly instead of routing every request through the
    // hosted `/_next/image` transformer. The transformer can return HTTP 402
    // when the deployment's image-optimization allowance is exhausted.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/I/**",
      },
    ],
  },
  env: {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_SECURE: process.env.SMTP_SECURE,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    EMAIL_TO: process.env.EMAIL_TO,
  },
};

export default nextConfig;
