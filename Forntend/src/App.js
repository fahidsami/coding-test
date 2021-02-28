import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Axios from "./Axios";
import Loader from "./components/loader/loader";
import MultimediaCard from "./components/MutimediaCard/MultimediaCard";
import MultimediaLists from "./components/MultimediaLists/MultimediaLists";

const App=()=> {
    const [hero, setHero]=useState({
        titles: []
    });
    useEffect(async () => {
        const heroBanner = await Axios.get('/films');
        setHero(heroBanner.data)
        console.log(hero)
    },[])
    console.log(hero)
    return (
        <div className="App">
            <Navbar/>
            { hero.titles.length ?
                <div>
                    <Slider titles={hero.titles[0] || {}}/>
                    {hero.titles.map((title, index) => {
                        if(!index)
                            return
                        return <MultimediaLists titles={title} heading={title.title}/>
                    })
                    }
                </div>
                : <Loader/>
            }

        </div>
    );
}

export default App;
