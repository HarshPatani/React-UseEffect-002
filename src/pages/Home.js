import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/search?q=avengers");
  });
  return <></>;
};

export default Home;
