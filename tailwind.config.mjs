// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         satoshi: ['Satoshi', 'sans-serif'],
//         inter: ['Inter', 'sans-serif'],
//       },
//       colors: {
//         'primary-orange': '#FF5722',
//       }
//     },
//   },
//   plugins: [],
// }


// test
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
}


// animations
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         'fade-in-up': {
//           '0%': {
//             opacity: '0',
//             transform: 'translateY(20px)'
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'translateY(0)'
//           }
//         }
//       },
//       animation: {
//         'fade-in-up': 'fade-in-up 0.5s ease-out forwards'
//       }
//     }
//   }
// };