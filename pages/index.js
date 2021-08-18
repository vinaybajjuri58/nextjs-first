import { Text } from "@chakra-ui/react";
import { Header } from "../components/HeaderComponent";
function Home() {
  return (
    <div>
      <Header title="Trying NextJS" />
      <Text fontSize="2xl">First NextJS App</Text>
    </div>
  );
}
export default Home;
