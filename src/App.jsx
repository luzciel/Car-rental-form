import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux";
import { Provider } from "react-redux";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import ListPage from "./pages/List";
import HomePage from "./pages/Home";
import GlobalStyles from "./GlobalStyles";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{}}>
        <Router>
          <div>
            <div>
              <Header />
            </div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/list" element={<ListPage />} />
            </Routes>
            <GlobalStyles />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
