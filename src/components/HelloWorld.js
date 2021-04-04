import React, { useState } from 'react';

const HelloWorld = (props) => {

    const [msj, setMsj] = useState("");

    return (
        <div className="App-header">
            
            <h1 id="helloText">Hello {props.text} {msj}</h1>
            <div>
                <button onClick={() => setMsj("(from changed state)") }>Click Me!</button>
            </div>
      
            
        </div>
    );
};


export default HelloWorld;