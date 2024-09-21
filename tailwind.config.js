// // module.exports = {
// //   content: [
// //     './index.html', 
// //     './src/**/*.{js,jsx,ts,tsx}',
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // };





// module.exports = {
//   content: [
//     './index.html', 
//     './src/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {
      
//       keyframes: {
//         'fade-in': {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         'fade-in-up': {
//           '0%': { opacity: '0', transform: 'translateY(10px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         'slide-in-left': {
//           '0%': { transform: 'translateX(-100%)' },
//           '100%': { transform: 'translateX(0)' },
//         },
//         'slide-in-right': {
//           '0%': { transform: 'translateX(100%)' },
//           '100%': { transform: 'translateX(0)' },
//         },
//       },
//       animation: {
//         'fade-in': 'fade-in 1s ease-in-out',
//         'fade-in-up': 'fade-in-up 1s ease-in-out',
//         'slide-in-left': 'slide-in-left 1s ease-in-out',
//         'slide-in-right': 'slide-in-right 1s ease-in-out',
//       },
//     },
//   },
// };






// module.exports = {
//   content: [
//     './index.html', 
//     './src/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'gradient-x': 'gradient-x 3s ease infinite',
//       },
//       keyframes: {
//         'gradient-x': {
//           '0%, 100%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//         },
//       },
//     },
//   },
// };






module.exports = {
  content: [
     './index.html', 
      './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        fadeInUp: 'fadeInUp 1s ease-out',
        slideDown: 'slideDown 0.8s ease-out',
      },
      boxShadow: {
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
}
