// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com/products/',
  firebase: {
    apiKey: 'AIzaSyDOH_F_FWeu29E9so44-b1bjdlBTkIi50c',
    authDomain: 'angularplatzi-11c1d.firebaseapp.com',
    databaseURL: 'https://angularplatzi-11c1d.firebaseio.com',
    projectId: 'angularplatzi-11c1d',
    storageBucket: 'angularplatzi-11c1d.appspot.com',
    messagingSenderId: '544360214682',
    appId: '1:544360214682:web:c4e64c1f43f3a723e96f23'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
