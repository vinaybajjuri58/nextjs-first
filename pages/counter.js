import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>A dummy Counter Application</h2>
      <Text size="2xl">{counter}</Text>
      <Button onClick={() => setCounter((initial) => initial + 1)}>
        Increment
      </Button>
      <Button onClick={() => setCounter((initial) => initial - 1)}>
        Decrement
      </Button>
    </div>
  );
};
export default Counter;
