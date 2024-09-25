import Header from "./layout/Header/Header";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBanner from "./layout/HeroBanner/HeroBanner";
import SearchHome from "./components/SearchHome/SearchHome";
import Informations from "./layout/Informations/Informations";
import Job from "./layout/Job/Job";
import Formations from "./layout/Formations/Formations";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <HeroBanner />
                <SearchHome />
                <Informations />
                <Job />
                <Formations />
            </main>
        </>
    );
};

export default App;
