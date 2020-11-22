const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        content: [
            './src/**/*.svelte',
            './src/**/*.js'
        ],
    },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                orange: colors.orange,
            }
        }
    }
}
