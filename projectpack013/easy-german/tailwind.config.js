/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "#333",
            "> :first-child": { marginTop: "-" },
            "> :last-child": { marginBottom: "-" },
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            h1: {
              color: "#1a202c",
              fontWeight: "800",
            },
            h2: {
              color: "#1a202c",
              fontWeight: "700",
            },
            h3: {
              color: "#1a202c",
              fontWeight: "600",
            },
            strong: {
              color: "#1a202c",
            },
            "ol > li": {
              "&::before": {
                color: "#718096",
              },
            },
            "ul > li": {
              "&::before": {
                backgroundColor: "#718096",
              },
            },
            hr: {
              borderColor: "#e2e8f0",
            },
            blockquote: {
              color: "#1a202c",
              borderLeftColor: "#e2e8f0",
            },
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
            code: {
              color: "#1a202c",
              fontWeight: "600",
            },
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
            pre: {
              backgroundColor: "#f7fafc",
              color: "#1a202c",
            },
            thead: {
              color: "#1a202c",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
