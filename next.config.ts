import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
    remotePatterns: [new URL('https://developers.google.com/identity/images/g-logo.png')],
	},
};

export default nextConfig;