const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        content: [
            './src/**/*.svelte',
            './src/**/*.js'
        ],
    },
    theme: {
        extend: {
            colors: {
                orange: colors.orange,
            }
        }
    }
}
