
import { Button } from "../../lib/components/button";
import "./home.css";

export const Home = () => {
  return <div data-page="home">
    <div data-section="hero">
      <h1>The Component Library for Solid.js</h1>
      <span>Hati is a plug and play component library, that gives you the head start in building super charged Solid.js apps</span>
      <Button>Get Started</Button>
    </div>
  </div>;
};