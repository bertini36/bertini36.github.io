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
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            orange: colors.orange,
            yellow: colors.amber,
            green: colors.green,
            blue: colors.blue,
        }
    }
}
