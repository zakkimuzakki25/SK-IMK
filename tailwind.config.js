/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#45B08C',
        primary2: '#48BCD1',
        accent: '#15998E',
        backgroundsolid: '#C0DCEC',
        teks: '#333333',
        redpallete: '#C51414'
      },
      backgroundImage: {
        backgroundlinear: 'linear-gradient(to left top, rgba(192, 220, 236, 1) , rgba(255, 255, 255, 0) 100%)',
        backgroundlinear2: 'linear-gradient(to top, #15998E , rgba(255, 255, 255, 0) 100%)',
        backgroundlinear3: 'linear-gradient(to top, #15998E, rgba(0, 0, 0, 0.2) 90%)',
        bgAuth: 'url("src/assets/images/bg-auth.jpg")',
      },
      fontFamily: {
        inter: 'Inter'
      },
    },
  },
  plugins: [],
}

