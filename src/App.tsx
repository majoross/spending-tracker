import "./App.scss";
import SpendingForm from "./components/spendingForm/spendingForm.component";
import FilterBar from "./components/filterBar/filterBar.component";
import Spendings from "./components/spendings/spendings.component";
import SpendingProvider from "./context/spendingsContext";

const App = () => {
  return (
    <SpendingProvider>
      <div data-testid="app-testid" className="App">
        <SpendingForm />
        <FilterBar />
        <Spendings />
      </div>
    </SpendingProvider>
  );
};

export default App;
