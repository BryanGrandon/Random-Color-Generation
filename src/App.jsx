import "./App.css";
import RandomColor from "./containers/random-color/random-color";

function App() {
  return (
    <>
      <main className="main">
        <RandomColor />

        <article>
          <h2>Colors Saved</h2>
          <section>
            <section>
              <span>color</span>
              <p>#1f1234</p>
              <button>x</button>
            </section>
          </section>
        </article>
      </main>
    </>
  );
}

export default App;
