import BestSeller from "../components/BestSeller/BestSellers";
import Hero from "../components/Hero/Hero";
import LatestCollections from "../components/LatestCollections/LatestCollections";


const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollections/>
            <BestSeller/>
        </div>
    );
};

export default Home;