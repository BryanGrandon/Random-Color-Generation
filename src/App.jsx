import "./App.css";
import ViewRandomColor from "./containers/view-random-color/view-random-color";

function App() {
  return (
    <>
      <main className="main">
        <ViewRandomColor />

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
