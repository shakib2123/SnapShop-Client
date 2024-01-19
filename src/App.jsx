import Customizer from "./Pages/Customizer/Customizer";
import Home from "./Pages/Home/Home";
import Canvas from "./canvas";

const App = () => {
  return (
    <div className="app overflow-hidden min-h-screen transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </div>
  );
};

export default App;
