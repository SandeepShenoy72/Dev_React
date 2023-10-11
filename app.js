
const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"Hello from Parent"),React.createElement("h2",{},"Hello from Child")]))


const heading = React.createElement("h1",{id:"head",class:"toby"},"Hello World from React")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)