/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com', 
      'i.scdn.co',
      'media.pitchfork.com',
      'static.wikia.nocookie.net',
      'www.billboard.com',
      'i.ytimg.com',
      'images.genius.com',
      'upload.wikimedia.org',
      'res.cloudinary.com'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
