import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const credentialsRdx = useSelector(userData);

  let navigate = useNavigate();

  useEffect(() => {

    if (!credentialsRdx.credentials.token) {
      navigate("/");
    }
  }, []);

  return <div className="">I am profile</div>;
};
