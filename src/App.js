import "./App.css";
import Topbar from "./components/Navbar";
import MainCon from "./components/MainCon";

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <body>
                <Topbar />
                <MainCon />
            </body>
        </div>
    );
}

export default App;
