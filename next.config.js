/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@react-three/drei'],
    images: {
        domains: ['randomuser.me'],
    },
};

module.exports = nextConfig;
