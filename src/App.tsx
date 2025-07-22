import { WalkthroughProvider } from "trail-js";
import LandingPage from "./components/LandingPage";
import "./App.css";
import { walkthroughSteps } from "./data/walkthroughSteps";

function App() {
  return (
    <WalkthroughProvider steps={walkthroughSteps}>
      <LandingPage />
    </WalkthroughProvider>
  );
}

export default App;
