import Header from "./layout/Header/Header";
import "./App.css";
import HeroBanner from "./layout/HeroBanner/HeroBanner";
import SearchHome from "./components/SearchHome/SearchHome";
import Informations from "./layout/Informations/Informations";
import Job from "./layout/Job/Job";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <HeroBanner />
                <SearchHome />
                <Informations />
                <Job />
            </main>
        </>
    );
};

export default App;
