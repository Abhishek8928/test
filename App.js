import react from 'react';
import ReactDOM from 'react-dom';

let h1Tag = React.createElement("h1", {},
    "hello world")

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h1Tag);
