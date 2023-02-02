/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './src/**/**.*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './src/**/**/**.*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            width: {
                'img-w': '18rem',
            },
            height: {
                'img-h': '32rem',
            },
            fontSize: {
                p: ['1rem', '1.5rem'],
                h6: ['1.125rem', '1.68rem'],
                h5: ['1.375rem', '2.06rem'],
                h4: ['1.5rem', '2.25rem'],
                h3: ['1.75rem', '2.625rem'],
                h2: ['2rem', '3rem'],
                h1: ['2.25rem', '3.375rem'],
            },
        },
        screens: {
            sm: '640px',
            md: '1024px',
            lg: '1536px',
        },
    },
    plugins: [],
}
