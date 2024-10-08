import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "./Utils/appStrore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
