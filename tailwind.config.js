
/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          '2xl': '1536px',
        },
        container: {
          center: true,
          padding: '1rem',
          screens: {
            '2xl': '1750px',  // eller hvilken som helst anden værdi, du ønsker
          },
        },
      },
    },
    // add daisyUI plugin
    plugins: [require("daisyui")]
}