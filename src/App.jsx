import React from "react";
import tail from "lodash/tail";
import times from "lodash/times";
import uniq from "lodash/uniq";
// import {tail, times, uniq} from "lodash"

const numbers = [1, 5, 8, 10, 1, 5, 15, 42, 5];
const uniqNumbers = uniq(numbers);
console.log("🚀 ~ file: App.jsx ~ line 6 ~ uniqNumbers", uniqNumbers);

const tailNumbers = tail(numbers);
console.log("🚀 ~ file: App.jsx ~ line 9 ~ tailNumbers", tailNumbers);

const getRandomNumber = () => {
  return Math.round(Math.random() * 100);
};

const randomNumbers = times(8, getRandomNumber);
console.log("🚀 ~ file: App.jsx ~ line 16 ~ randomNumbers", randomNumbers);

const App = () => {
  return <div>React app component</div>;
};

export default App;
