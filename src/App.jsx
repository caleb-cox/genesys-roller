import DiceProvider from "./DiceProvider";
import DiceRoller from "./DiceRoller";
import DiceResults from "./DiceResults";

const App = () => {
  return (
    <DiceProvider>
      <DiceRoller />
      <DiceResults />
    </DiceProvider>
  );
};

export default App;
