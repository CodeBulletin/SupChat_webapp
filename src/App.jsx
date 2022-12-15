import MainNavbar from "./MainNavbar";
import SideWindow from "./Windows/SideWindow";
import MainWindow from "./Windows/MainWindow";

let App = () => {
    return (
        <div className="App">
            <MainNavbar />
            <SideWindow />
            <MainWindow />
        </div>
    );
}

export default App;
