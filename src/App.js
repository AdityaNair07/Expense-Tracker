import { Provider } from "react-redux";
import "./App.css";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Main from "./containers/Main";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}

export default App;
