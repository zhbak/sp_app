/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./sp_app/templates/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./sp_app/reuseable/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

