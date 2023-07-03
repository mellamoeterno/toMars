/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#272727",
          "200": "#1a1a1a",
        },
        "background-secondary": "#3b3b3b",
        lightgray: "#ccc",
        "caption-label-text": "#858584",
        text: "#fff",
        darkslateblue: "#043c8a",
        background: "#2b2b2b",
        darkgray: "#999",
        black: "#000",
        darkslategray: "rgba(59, 59, 59, 0.5)",
        "call-to-action": "#a259ff",
      },
      fontFamily: {
        "caption-work-sans": "'Work Sans'",
        "h5-space-mono": "'Space Mono'",
        taprom: "Taprom",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      "3xl": "22px",
      "19xl": "38px",
      xl: "20px",
      "32xl": "51px",
      "9xl": "28px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
