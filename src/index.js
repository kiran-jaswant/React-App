import {createRoot} from "react-dom/client"
import './index.css'


import Home from "./view/Home/Home"
import About from "./view/About/About"
import Contact from "./view/Contact/Contact"
import Books from "./view/Books/Books"



const root= createRoot(document.getElementById("root"))

const pathname=window.location.pathname

if (pathname=='/'){
    root.render(<Home></Home>)

}
 if(pathname=='/about'){
    root.render(<About></About>)
}
if(pathname=='/contact'){
    root.render(<Contact></Contact>)
}
if(pathname=='/books'){
    root.render(<Books></Books>)
}
