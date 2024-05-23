import "./App.css";
import Header from "./components/header/header";
import ColorSaved from "./view/color-saved/color-saved";
import SelectColor from "./view/select-color/select-color";
import { isOnline } from "./app-function";
import Gradient from "./view/gradient/gradient";

function App() {
  window.addEventListener("online", () => isOnline());
  window.addEventListener("offline", () => isOnline());
  return (
    <>
      <header className="main_header">
        <Header />
      </header>
      <main className="container">
        <article className="container__main">
          <SelectColor />
          <Gradient />
        </article>
        <aside className="container__aside">
          <ColorSaved />
        </aside>
      </main>
    </>
  );
}

export default App;
