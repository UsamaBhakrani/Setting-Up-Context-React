import { useNavContext } from "./Context";

const App = () => {
  const { value } = useNavContext();

  return <h2>{value.name}</h2>;
};

export default App;
