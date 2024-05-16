import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <main className="main">
        <header className="container__header">
          <Header />
        </header>
        <article>
          <h2>Saved colors</h2>
        </article>
        <article>
          <h2>Gradients</h2>
        </article>
      </main>
    </>
  );
}

export default App;
