import type { Config } from 'tailwindcss'; 

export default {
    content: [
        "./app/**/*.{ts, tsx}"
    ],
    theme: {
        extend: {
            colors: {
                lightHover: '#fdf4ff', 
                darkHover: '#2a004a',
            }
        },
    },
    plugins: []
}; 