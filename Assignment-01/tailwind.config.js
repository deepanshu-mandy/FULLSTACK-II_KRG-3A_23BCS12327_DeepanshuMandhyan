export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#4f46e5",
        glass:"rgba(255,255,255,0.2)"
      },
      backdropBlur:{
        glass:"12px"
      }
    },
  },
  plugins: [],
}