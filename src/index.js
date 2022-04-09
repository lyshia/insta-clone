// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import FirebaseContext from './context/firebase';
// // eslint-disable-next-line import/named
// import { firebase, FieldValue } from './lib/firebase';

import { createRoot } from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>
);

// ReactDOM.render(
//   <FirebaseContext.Provider value={{ firebase, FieldValue }}>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById('root')
// );
