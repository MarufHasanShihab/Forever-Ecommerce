import BestSeller from "../components/BestSeller/BestSellers";
import Hero from "../components/Hero/Hero";
import LatestCollections from "../components/LatestCollections/LatestCollections";
import OurPolicy from "../components/OurPolicy/OurPolicy";


const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollections/>
            <BestSeller/>
            <OurPolicy/>
        </div>
    );
};

export default Home;