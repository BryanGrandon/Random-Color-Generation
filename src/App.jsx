import "./App.css";
import Header from "./components/header/header";
import ColorSaved from "./view/color-saved/color-saved";
import SelectColor from "./view/select-color/select-color";

function App() {
  return (
    <>
      <main className="main">
        <header className="container__header">
          <Header />
        </header>
        <SelectColor />
        <ColorSaved />
        <article>
          <h2>Gradients</h2>
        </article>
      </main>
    </>
  );
}

export default App;
