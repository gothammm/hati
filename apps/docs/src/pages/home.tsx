import "./home.css";
import { Button } from "@gothammm/hati";
import { useNavigate } from "@solidjs/router";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div data-page="home">
      <div data-section="hero">
        <h1>The Component Library for Solid.js</h1>
        <span>
          <strong>Hati</strong> is a plug and play component library, that gives
          you the head start in building super charged Solid.js apps
        </span>
        <Button onClick={() => navigate("/docs")}>Get Started</Button>
      </div>
    </div>
  );
};
