/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{ 
        remotePatterns:[
            {
                protocol:"https",
                hostname:"**",
                pathname:"**",
                port : ''
            },
            {
                protocol:"http",
                hostname:"**",
                pathname:"**"
            }
        ],
    }
}

module.exports = nextConfig
