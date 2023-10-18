 import { Link } from "react-router-dom"
 
 
 function ErrorInstance(){
    return(
        <>
        <h1>there was an error</h1>
        <p id="e-homepage"><Link to="/"><b>Home Page</b></Link></p>
        </>
    )
 }
 export default ErrorInstance