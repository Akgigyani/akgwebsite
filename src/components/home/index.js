// import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import BWGif from '../../assets/images/b&w.gif';
import AKGgroup from "./../../assets/images/AKGgroup.PNG"
import './home.scss';

const Home = () => {
    return (
        <>
            <Navbar pageName="Home" pageFirstLink="/about" firstLink="About"/>
            <div className="container">
                <section className="growthGif">
                    <img className="growthImage" src={BWGif} alt="" />
                    <aside>
                        <h2>Meet</h2>
                        <img className="logoHero" src={AKGgroup} alt="" />
                        <h2>Vision Simplified.</h2>
                    </aside>
                </section>
            </div>
        </>
    )
}

export default Home;