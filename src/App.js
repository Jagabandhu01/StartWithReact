import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import resList from "./utils/mockData";
// // JSX - HTML-like or XML -Like syntax,


// not using keys (not acceptiable ) <<<< index as key <<< unique id (best approach)



    
   
const Applayout = () =>{
    return(
    <div className="app">
        <Header/>
        <Body />
    </div>
    );
};
// React functional component :::::::::::
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)






