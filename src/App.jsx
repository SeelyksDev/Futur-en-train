import Header from "./layout/Header/Header";
import "./App.css";
import HeroBanner from "./layout/HeroBanner/HeroBanner";
import WrapDiscover from "./components/WrapDiscover/WrapDiscover";
import Informations from "./layout/Informations/Informations";
import Job from "./layout/Job/Job";
import Formations from "./layout/Formations/Formations";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <HeroBanner />
                <WrapDiscover />
                <Informations />
                <Job />
                <Formations />
            </main>
        </>
    );
};

export default App;
