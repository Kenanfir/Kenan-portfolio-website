/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                bg: 'var(--bg)',
                surface: 'var(--surface)',
                text: 'var(--text)',
                muted: 'var(--muted)',
            },
            fontFamily: {
                'heading': ['Montserrat', 'sans-serif'],
                'body': ['Raleway', 'Roboto', 'sans-serif'],
                'mono': ['Fira Code', 'monospace'],
            },
        },
    },
    plugins: [],
}
