import "./App.css";
import Header from "./components/header/header";
import ColorSaved from "./view/color-saved/color-saved";
import SelectColor from "./view/select-color/select-color";

function App() {
  return (
    <>
      <header className="main_header">
        <Header />
      </header>
      <main className="container">
        <article className="container__main">
          <SelectColor />
        </article>
        <aside className="container__aside">
          <ColorSaved />
        </aside>
      </main>
    </>
  );
}

export default App;
