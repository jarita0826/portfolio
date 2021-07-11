const colors = require("tailwindcss/colors");
module.exports = {
    purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: {
                lightest: "#e5e5e5",
                lighter: "#7f7f7f",
                light: "#333333",
                default: "#000000",
            },
            blue: {
                default: "#5020EA",
            },
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
        },
        outline: {
            gray: ["2px solid #7f7f7f", "1px"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};