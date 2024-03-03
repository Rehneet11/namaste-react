        import React from "react";
        import ReactDOM from "react-dom/client";
        // React Element
        //const ele=<span>React Element </span>
        const Title = ()=>(
            <h1 className="head" tabIndex="5"> 
            This is a JSX Functional Component 
            </h1>
        );  
        // const Title =function(){
        //     return <h1 className="head" tabIndex="5"> 
        //     This is a JSX Functional Component 😍
        //     </h1>
        // };  
        // const HeadingComponent2=()=>{
        //     return <h1>This is a Functional Component</h1>;
        // };
        //Also called component Composition => Component k andr Component
        const data=10000;
        const HeadingComponent=()=>(
            <div id="container" >
                {data}
                <Title/>
                <h1 className="heading">
                This is also a functional Component
                </h1>
            </div>    
        );
        const root=ReactDOM.createRoot(document.getElementById("root"))
        root.render(<HeadingComponent/>);
