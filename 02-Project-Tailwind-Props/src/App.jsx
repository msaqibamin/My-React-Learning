import Card from "./Components/Card";

function App() {
  return (
    <>
      <div className="border-2 border-green-200 rounded-3xl w-screen mx-auto p-10 ">
        <div className="flex gap-5 flex-wrap justify-center flex-col-reverse items-center">
          <h1 className="font-bold text-[2rem] bg-slate-600 mb-4 rounded-2xl px-9 text-white">
            Sample Card
          </h1>
          <Card title="Muhammad Saqib" btn="Click to check details" />
        </div>
      </div>
    </>
  );
}

export default App;
