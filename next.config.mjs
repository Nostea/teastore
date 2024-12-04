/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID
    },
    images: {
        domains: ['cdn.sanity.io', 'via.placeholder.com']
    }
}

export default nextConfig
