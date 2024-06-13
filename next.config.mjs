/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                hostname: "188.166.240.174"
            }
        ]
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = {fs : false};

        return config;
    }
};

export default nextConfig;
