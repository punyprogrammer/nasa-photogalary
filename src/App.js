import "./App.css";
import Header from "./components/Header/Header";
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
