import "../src/index.css";

function App() {
  return (
    <div className="pl-10 pt-10">
      <h1 className="text-3xl font-bold">Hello World!</h1>
      <br />
      <p className="font-mono">
        This is basic project made with react and tailwind. The tech stack is
        bundled together with vitejs.
      </p>
      <p>
        Made by{" "}
        <a
          target="_blank"
          href="https://stoicpushkar.com"
          className="text-blue-600 hover:underline"
        >
          Pushkar Singh
        </a>
      </p>
    </div>
  );
}

export default App;
