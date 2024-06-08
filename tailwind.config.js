/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-img":
          "url('https://ik.imagekit.io/0y99xuz0yp/images/cloth%20mockup%20black1%20(1).jpg?updatedAt=1717291760493')",
      },
      boxShadow: {
        right: "10px 0 10px -5px rgba(0, 0, 0, 0.3)",
        left: "-10px 0 10px -5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        blackletter: ["Blackletter Shadow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
