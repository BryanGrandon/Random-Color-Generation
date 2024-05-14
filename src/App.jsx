import "./App.css";
import ViewColorSaved from "./containers/view-colors-saved/view-colors-saved";
import ViewRandomColor from "./containers/view-random-color/view-random-color";

function App() {
  return (
    <>
      <main className="main">
        <ViewRandomColor />
        <ViewColorSaved />
      </main>
    </>
  );
}

export default App;
