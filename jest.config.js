module.exports = {
  setupFiles: ['<rootDir>/src/jest-setup.js'],
  moduleNameMapper: {
    '.+\\.(png|jpg|css|svg)$': 'identity-obj-proxy'
  }
};
