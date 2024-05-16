import "./App.css";
import ViewColorSaved from "./containers/view-colors-saved/view-colors-saved";
import ViewGradient from "./containers/view-gradient/view-gradient";
import ViewRandomColor from "./containers/view-random-color/view-random-color";

function App() {
  return (
    <>
      <main>
        <header>
          <nav></nav>
          <h1></h1>
          <section></section>
        </header>
        <article>
          <h2>Saved colors</h2>
        </article>
        <article>
          <h2>Gradients</h2>
        </article>
      </main>

      <main className="main">
        <ViewRandomColor />
        <ViewColorSaved />
        <ViewGradient />
      </main>
    </>
  );
}

export default App;
