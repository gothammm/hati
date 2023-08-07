import { Button } from "@gothammm/hati";

export const TestButton = () => (
  <Button
    variant="secondary"
    data-type="action"
    onClick={() => {
      alert("test");
    }}
  >
    Get Started
  </Button>
);
