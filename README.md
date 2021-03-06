# React-map-filter-reduce
## App.js
```js
import React from "react";
import Entry from "./Entry";
import sermons from "../Sermons";

function createEntry(sermonEntry) {
  return (
    <Entry
      key={sermonEntry.title}
      artist={sermonEntry.artist}
      name={sermonEntry.name}
      description={sermonEntry.title}
      year={sermonEntry.year}
      album={sermonEntry.album}
      path={sermonEntry.path}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Pastor Jack's Sermons</span>
      </h1>
      <dl>{sermons.map(createEntry)}</dl>
    </div>
  );
}

export default App;
```
## ../Sermons.js
```js
const sermons = [
  {
    title: "1 Corinthians Part 11",
    artist: "Pastor Jack Hurley",
    album: "1Corinthians",
    year: "1997",
    name: "1corinthians-part11.mp3",
    path: "sermons/1cor/"
  },
```
## Entry.js
```js
import React from "react";

function Entry(props) {
  return (
    <div>
      <h2>{props.album}</h2>
      <h3>{props.description}</h3>
      <p>{props.year}</p>
      <a href="{props.path}{props.name}">{props.name}</a>
    </div>
  );
}
export default Entry;
```

Created with CodeSandbox
