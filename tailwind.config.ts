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
                darkTheme: '#11001F'
            },
            fontFamily: {
                Outfit: ['Outfit', 'sans-serif'],
                Ovo: ['Ovo', 'serif']
            }
        },
    },
    plugins: []
}; 