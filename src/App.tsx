import React, {useState} from 'react';
import './App.css';
import {NextUIProvider} from '@nextui-org/react';
import MainContent from "./components/MainContent";
import Header from "./components/Header";


const App = () => {

    const [isSliderOpen, setIsSliderOpen] = useState(false);

    return (
        <NextUIProvider>
            <div className="App">
                <Header
                    isSliderOpen={isSliderOpen}
                    setIsSliderOpen={setIsSliderOpen}/>
                <MainContent
                    isSliderOpen={isSliderOpen}
                />
            </div>
        </NextUIProvider>
    );
}

export default App;
