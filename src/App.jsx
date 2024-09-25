import Header from "./layout/Header/Header";
import "./App.css";
import HeroBanner from "./layout/HeroBanner/HeroBanner";
import SearchHome from "./components/SearchHome/SearchHome";
import Informations from "./layout/Informations/Informations";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <HeroBanner />
                <SearchHome />
                <Informations />
            </main>
        </>
    );
};

export default App;
