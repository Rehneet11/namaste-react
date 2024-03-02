        import React from "react";
        import ReactDOM from "react-dom/client";
        const parent=React.createElement(
        "div",
        {id:"parent"},
        [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tag")]),


        React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("button",{},"I am a button")])
    ]);
        
        //parebt is a React Element i.e. it is an OBJECT it has some properties to it
        // During renderingnThis React becomes HTML which browser under stands
        
        const root =ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
    //heading is an  js object i.e a React Element
   
