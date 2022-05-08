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

Created with CodeSandbox
