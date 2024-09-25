import Header from "./layout/Header/Header";
import "./App.css";
import HeroBanner from "./layout/HeroBanner/HeroBanner";
import SearchHome from "./components/SearchHome/SearchHome";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <HeroBanner />
                <SearchHome />
            </main>
        </>
    );
};

export default App;
