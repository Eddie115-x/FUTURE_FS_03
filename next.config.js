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
      'res.cloudinary.com',
      'www.youtube.com'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  
  // Allow YouTube and Spotify embeds
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              'frame-src www.youtube.com youtube.com https://www.youtube.com https://youtube.com open.spotify.com https://open.spotify.com https://i.scdn.co *.spotify.com; media-src *.spotify.com \'self\';'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
