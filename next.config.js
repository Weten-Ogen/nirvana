/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    images:{
        domains:["www.si.com"],
        remotePatterns:[
            {
                protocol:"https",
                hostname:"**",
            },
            {
                protocol:"http",
                hostname:"**",
            },
        ]
    },
    eslint:{
        ignoreDuringBuilds:true,
    },
}

module.exports = nextConfig
