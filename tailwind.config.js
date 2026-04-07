/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ["var(--font-heading)", "ui-serif", "Georgia", "serif"],
                mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
            },
            colors: {
                charcoal: {
                    950: "#020617",
                    900: "#0B1220",
                    800: "#0F172A",
                },
                electric: {
                    blue: "#38BDF8",
                    lime: "#22C55E",
                },
            },
        },
    },
    plugins: [],
};
