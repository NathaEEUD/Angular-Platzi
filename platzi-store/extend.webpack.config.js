const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

module.exports = {
  plugins: [
    new GuessPlugin({
      // Alternatively you can provide a Google Analytics View ID
      // ID de la Vista
      GA: 'XXXXXX',
      // reportProvider() {
      //   return Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json')));
      // },
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    })
  ]
};

// Adding a file with the logic of Markov Chains
// module.exports = {
//   plugins: [
//     new GuessPlugin({
//       reportProvider() {
//         return Promise.resolve(JSON.parse(require('fs').readFileSync('./routes.json')));
//       },
//       runtime: {
//         delegate: false
//       },
//       routeProvider() {
//         return parseRoutes('.');
//       }
//     })
//   ]
// };
