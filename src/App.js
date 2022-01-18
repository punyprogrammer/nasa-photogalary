import "./App.css";

import Images from "./components/Images/Images";
const apiKey = process.env.REACT_APP_NASA_KEY;
console.log(apiKey);
function App() {
  return (
    <>
      <div className="App">
        <Images />
      </div>
    </>
  );
}
export default App;
