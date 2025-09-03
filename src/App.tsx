import "./App.css";
import Header from "./components/Header.tsx";
import Body from "./components/Body.tsx";

const App = () => {
    return (
        <div className={'app'}>
            <Header/>
            <Body/>
        </div>
    );
};

export default App;