module.exports = {
    preset: 'ts-jest',
    "moduleNameMapper": {
      "\\.(css|less)$": "identity-obj-proxy"
    },
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
      // "\\.css$": "custom-transformer",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js"  
    }
  };