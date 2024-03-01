
        const parent=React.createElement(
        "div",
        {id:"parent"},
        [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tag")]),


        React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("button",{},"I am a h2 tag")])
    ]);
        
        //parebt is a React Element i.e. it is an OBJECT it has some properties to it
        // During renderingnThis React becomes HTML which browser under stands
        
        const heading=React.createElement("h1",{id:"heading"},'Hello World From React');
        const root =ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
    //heading is an  js object i.e a React Element
    console.log(parent)
        const heading1=React.createElement("h2",{},"Hello part-2 from React !");
        const root1=ReactDOM.createRoot(document.getElementById("root1"));
        //root1.render(heading1);
