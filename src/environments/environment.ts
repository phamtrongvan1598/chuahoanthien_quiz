// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URL: 'http://localhost:8080',
  firebaseConfig: {
    apiKey: 'AIzaSyDaOXGFeOks81o_f3qnw7BeyvhvM02am5s',
    authDomain: 'mind-sticker.firebaseapp.com',
    databaseURL: 'https://mind-sticker.firebaseio.com',
    projectId: 'mind-sticker',
    storageBucket: 'mind-sticker.appspot.com',
    messagingSenderId: '178051942882',
    appId: '1:178051942882:web:5810226dc82c2fb7'
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
