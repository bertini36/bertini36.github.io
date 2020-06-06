module.exports = {
    purge: {
        content: [
            "../templates/**/*.html",
            "./src/**/*.svelte",
            "./src/**/*.js"
        ],
    },
    theme: {
        fontFamily: {
            display: ["Roboto"],
            body: ["Roboto"]
        },
        maxWidth: {
            "1/4": "25%",
            "1/2": "50%",
            "3/4": "75%",
        },
        extend: {
            colors: {
                yellow: "#FD9010",
                light_yellow: "#FD9B27",
                black: "#212121"
            },
        }
    }
}
