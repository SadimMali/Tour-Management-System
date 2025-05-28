import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  //remove after testing
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "images.unsplash.com",
      port: ""
    }],
  }
  /* config options here */
};

export default nextConfig;
