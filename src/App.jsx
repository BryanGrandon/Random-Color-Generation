import "./App.css";
import Header from "./components/header/header";
import SelectColor from "./view/select-color/select-color";

function App() {
  SelectColor;
  return (
    <>
      <main className="main">
        <header className="container__header">
          <Header />
        </header>
        <SelectColor />
        <article>
          <h2>Gradients</h2>
        </article>
      </main>
    </>
  );
}

export default App;
