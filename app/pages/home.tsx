import { Button } from "../../lib/components/button";
import "./home.css";
import { useNavigate } from "@solidjs/router";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div data-page="home">
      <div data-section="hero">
        <h1>The Component Library for Solid.js</h1>
        <span>
          Hati is a plug and play component library, that gives you the head
          start in building super charged Solid.js apps
        </span>
        <Button onClick={() => navigate("/docs/getting-started")}>
          Get Started
        </Button>
      </div>
    </div>
  );
};
