/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{html,tsx,ts}'],
   theme: {
      extend: {
         fontFamily: {
            sora: ['Sora'],
            san3: ['Source Sans 3'],
         },
         backgroundColor: {
            gr: ['rgba(0, 68, 3, 1)'],
            deepGreen: ['#016134'],
            lightGreen: ['#D2DDEE'],
            Orange: ['#F59E3E'],
            deepGray: ['#636363'],
         },
         color: {
            gr: ['rgba(0, 68, 3, 1)'],
            deepGreen: ['#016134'],
            lightGreen: ['#D2DDEE'],
            Orange: ['#F59E3E'],
            deepGray: ['#636363'],
         },
      },
   },
   plugins: [],
};
