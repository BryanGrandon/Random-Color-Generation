import "./App.css";

function App() {
  return (
    <>
      <main className="main">
        <article className="generation">
          <h2 className="title">Random Color Generation</h2>
          <section className="color"></section>
          <section className="generation__section">
            <label className="label">
              Select Color:
              <input type="color" name="" className="input" />
            </label>
            <button>Save</button>
          </section>
          <button className="button">Random</button>
        </article>

        <article>
          <h2>Colors Saves</h2>
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
