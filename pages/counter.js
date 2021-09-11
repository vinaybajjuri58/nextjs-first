import { Button, Text } from "@chakra-ui/react";
import { useData } from "../Context";
const Counter = () => {
  const { DataState, dispatch } = useData();
  return (
    <div>
      <h2>A dummy Counter Application</h2>
      <Text size="2xl">{DataState.counter}</Text>
      <Button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</Button>
      <Button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</Button>
    </div>
  );
};
export default Counter;
