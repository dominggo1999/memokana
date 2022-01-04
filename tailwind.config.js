const colors = {
  primary: '#212B42',
  secondary: '#1D263B',
  accent: '#ADD7FF',
  accentHover: '#e4eefa',
};

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
