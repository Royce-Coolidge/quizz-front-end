import React from "react";

import Question from "../Question";
import Answers from "../Answers";
import Footer from "../Footer";
import Complete from "../Complete";
import Header from '../Header';
//import Complete from "../Complete/Complete";


let Quiz = ( {counter} ) => (

    <>
        { counter >= 15 ? <Complete /> : 
        <> 
            <Header />
            <Question />
            <Answers />
            <Footer /> 
        </>
        } 
    </>
)

export default Quiz;