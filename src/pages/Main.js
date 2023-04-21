import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Main = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/Login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <div className="main">
      <div className="button-right">
        <Button className = "Main_btn" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      <div className="main_body">
      <div className="text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      </div>
    </div>
    </>
  );
};

export default Main;