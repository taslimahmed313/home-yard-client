const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layouts/Main/Main");

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                
            }
        ]
    }
])