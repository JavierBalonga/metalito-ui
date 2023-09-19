/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00f593",
        "primary-dark": "#00a362",
        "primary-light": "#47ffb6",

        error: "#dc2626",
        "error-dark": "#b91c1c",
        "error-light": "#ef4444",

        success: "#34d399",
        "success-dark": "#059669",
        "success-light": "#10b981",

        warning: "#facc15",
        "warning-dark": "#b45309",
        "warning-light": "#f59e0b",
      },
    },
  },
  plugins: [],
};
