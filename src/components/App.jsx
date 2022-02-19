import DiceProvider from "/src/components/DiceProvider";
import DiceRoller from "/src/components/DiceRoller";
import DiceResults from "/src/components/DiceResults";

const App = () => {
  return (
    <DiceProvider>
      <DiceResults />
      <DiceRoller />
    </DiceProvider>
  );
};

export default App;
