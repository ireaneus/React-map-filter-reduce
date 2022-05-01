import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import sermons from "./Sermons";

const newSermons = sermons.map(function (sermonEntry) {
  return sermonEntry.album;
});

console.log(newSermons);

ReactDOM.render(<App />, document.getElementById("root"));

//Map -Create a new array by doing something with each item in an array.
/*
const result = sermons.map(sermon => sermon.album === "Acts");
console.log(result);

(21) [false, false, false, false, false, false, false, false, false, false, …]
0: false
1: false
2: false
3: false
4: false
5: false
6: false
7: false
8: false
9: false
10: false
11: false
12: false
13: true
14: true
15: true
16: true
17: true
18: true
19: true
20: true
*/
/*
//Filter - Create a new array by keeping the items that return true.

const result = sermons.filter((sermon) => sermon.album === "Acts");
console.log(result);
*/
/*
8) [Object, Object, Object, Object, Object, Object, Object, Object]
0: Object
1: Object
2: Object
3: Object
4: Object
5: Object
6: Object
7: Object
*/
//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.
const result = sermons.find((sermon) => sermon.album);
console.log(result);
/* {title: "1 Corinthians Part 11", artist: "Pastor Jack Hurley", album: "1Corinthians", year: "1997", name: "1corinthians-part11.mp3"…} */

//FindIndex - find the index of the first item that matches.
