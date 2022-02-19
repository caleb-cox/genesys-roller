import "/src/styles/App.scss";

import DiceProvider from "/src/components/DiceProvider";
import DiceResults from "/src/components/DiceResults";
import DiceBox from "/src/components/DiceBox";
import DiceControls from "/src/components/DiceControls";

const App = () => {
  return (
    <div className="App">
      <DiceProvider>
        <DiceResults />
        <DiceBox />
        <DiceControls  />
      </DiceProvider>
    </div>
  );
};

export default App;
