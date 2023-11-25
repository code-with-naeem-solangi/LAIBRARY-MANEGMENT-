import { Button } from "antd";

import "./index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/indexslice";
const Head = () => {
  const user = useSelector((e) => e.user);
  console.log(user)
  const recive = useDispatch();
  return (
    <div className="flex">
      <div>
        <h1>LIBRARY MANAGEMENT</h1>
      </div>

      <div className="pdng">
        {user ? (
          <Button type="primary" onClick={() => recive(logout())}>
            Logout
          </Button>
        ) : (
          <>
            <Link to={"/"}>
              <Button>LOGIN</Button>
            </Link>
            <Link to={"/singup"}>
              <Button type="primary">SING UP</Button>
            </Link>
            </>
          )}
         
      </div>
    </div>
  );
};
export default Head;
