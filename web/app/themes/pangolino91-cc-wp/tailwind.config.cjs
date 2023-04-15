// https://tailwindcss.com/docs/configuration
module.exports = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
    extend: {
      colors: {
        pinkish: '#EC2768',
        backgroundHero: '#FCF5F3'
      }, // Extend Tailwind's default colors
    },
  },
  plugins: [],
};
