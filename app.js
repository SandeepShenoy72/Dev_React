import React from "react"
import ReactDOM from "react-dom/client"

//Code for JSX
const HeadingComponent = () => (
    <div>
    <h1>
        Functional Component
    </h1>
    <h2>
        Second
    </h2>
    </div>

)

const title = (
    <h1>Inside Component</h1>
)

const TitleComponent = () => (
    <div>
    <h1>Main Component</h1>
    {title}
    <HeadingComponent/>
    </div>
)
//Code for React Root

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<TitleComponent />)