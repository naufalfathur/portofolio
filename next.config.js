/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // allow next/image to optimize images coming from these remote hosts
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "images.pexels.com",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "generatif.co",
                port: "",
                pathname: "/**"
            }
        ],
        // optional: ensure Next serves modern formats where possible
        // formats: ['image/avif', 'image/webp'],
    }
};

module.exports = nextConfig;