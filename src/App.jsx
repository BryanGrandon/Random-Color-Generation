import "./App.css";
import Header from "./components/header/header";
import ColorSaved from "./view/color-saved/color-saved";
import SelectColor from "./view/select-color/select-color";
import Gradient from "./view/gradient/gradient";
import { isOnline } from "./app-function";

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
          <ColorSaved />
          <Gradient />
        </article>
      </main>
    </>
  );
}

export default App;
