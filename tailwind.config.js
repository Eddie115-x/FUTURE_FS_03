/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core dark tones - maintain the cinematic NF feel
        obsidian: "#121212",   // Deepest background, slightly softened from pure black
        charcoal: "#262626",   // Secondary backgrounds, slightly warmer than before
        
        // Earth & stone tones - add spiritual depth
        slate: "#2D3142",      // Deep navy/slate - symbolizes depth and reflection
        stone: "#48494B",      // Warm stone gray - grounding element
        clay: "#7C6C77",       // Muted mauve/clay - subtle earth tone with depth
        
        // Light tones - symbolize hope and redemption
        parchment: "#F0EAE0",  // Warm off-white - sacred manuscripts, clean but warm
        ghost: "#F4F4F5",      // Cool white - maintains contrast for UI elements
        
        // Accent colors - represent faith, royalty, sacrifice
        crimson: "#96343C",    // Deeper, more muted crimson - sacrifice, intensity
        gold: "#9A7D46",       // Muted gold - subtle royalty, truth, value
        ember: "#A34730",      // Warm reddish-brown - passion with restraint
        
        // Text colors
        silver: "#A8A8A8",     // Neutral silver for body text
        
        // Utility/atmosphere colors
        smoke: "#2F2F33",      // Subtle darker elements
        ash: "#3F3F46",        // Mid-tone accents
        
        // Base colors for compatibility
        black: "#121212",
        white: "#F0EAE0",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],          // Clean, modern body text
        'display': ['"Maven Pro"', 'Inter', 'sans-serif'], // Cinematic, professional display font
        'heading': ['"Maven Pro"', 'sans-serif'],  // Replaces Bebas Neue with Maven Pro
        'bebas': ['"Maven Pro"', 'sans-serif']     // For backward compatibility
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 1s ease-out forwards',
        'slide-down': 'slideDown 1s ease-out forwards',
        'slide-left': 'slideLeft 1s ease-out forwards',
        'slide-right': 'slideRight 1s ease-out forwards',
        'zoom': 'zoom 0.5s ease-out forwards',
        'flicker': 'flicker 3s linear infinite',
        'text-reveal': 'textReveal 2s ease forwards',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        zoom: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        textReveal: {
          '0%': { 
            'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
            opacity: '0', 
            transform: 'translateY(10px)'
          },
          '100%': { 
            'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: '1', 
            transform: 'translateY(0)'
          },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' }
        },
      },
      boxShadow: {
        'inner-highlight': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'neon': '0 0 15px rgba(220, 38, 38, 0.5)',
        'intense': '0 0 30px rgba(0, 0, 0, 0.8)',
        'text': '0 1px 2px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 10px rgba(255, 255, 255, 0.1)',
        'crimson-glow': '0 0 20px rgba(220, 38, 38, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'noise': 'url("/noise.png")',
        'grain': 'url("/grain.png")',
        'vignette': 'radial-gradient(circle, transparent 50%, rgba(0, 0, 0, 0.7) 150%)',
      },
      textShadow: {
        'sm': '0 1px 2px var(--tw-shadow-color)',
        'md': '0 2px 4px var(--tw-shadow-color)',
        'lg': '0 8px 16px var(--tw-shadow-color)',
      },
      letterSpacing: {
        'widest': '0.25em',
        'ultra': '0.35em',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
        },
        '.text-shadow-md': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
        },
        '.text-shadow-crimson': {
          textShadow: '0 0 10px rgba(220, 38, 38, 0.5)'
        },
        '.clip-text': {
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent'
        },
        '.backdrop-blur-xs': {
          'backdrop-filter': 'blur(2px)'
        },
        '.backdrop-blur-4xl': {
          'backdrop-filter': 'blur(64px)'
        },
      }
      addUtilities(newUtilities)
    }
  ],
}