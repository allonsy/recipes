import { Router, Route } from "@solidjs/router";
import { HomePage } from "./pages/HomePage";
import { GlobalLayout } from "./components/GlobalLayout";

function App() {
  return (
    <>
      <Router root={GlobalLayout}>
        <Route path={"/"} component={HomePage} />
      </Router>
    </>
  );
}

export default App;
