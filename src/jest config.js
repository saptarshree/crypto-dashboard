export default {
    preset: 'ts-jest', // Adjust the preset as needed (e.g., 'react', 'node')
    testEnvironment: 'node',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  };
  

