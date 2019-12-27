import ReactJson from 'react-json-view';
import React from 'react';

import './App.css';

function App() {
    let [ response, setResponse ] = React.useState([]);
    React.useEffect(() => {
        fetch('https://seanhaneberg.com/blog/wp-json')
            .then(res => res.json())
            .then((data) => {
                setResponse(data);
            });
    });

    return (
        <div className="App">
            <header className="App-header"/>
            <ReactJson src={response} enableClipboard={false} collapsed={3}/>
        </div>
        );
}

export default App;
