module.exports = {
    plugins: [
        require.resolve('prettier-plugin-astro'),
        'prettier-plugin-svelte',
        'prettier-plugin-tailwindcss',
    ],
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
}
