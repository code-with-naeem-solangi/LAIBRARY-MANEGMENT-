import { useSelector } from "react-redux";
import Books from "../books";
import Login from "../login";

const Home =()=>{
    const user = useSelector((e) => e.user)
    return(
        <>
        {
            user? <Books/> : <Login/>
        }
        </>
    )
}
export default Home;