import JSONFormatter from 'json-formatter-js'
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

    let formatter = new JSONFormatter(response);
    let renderedResult = {__html: formatter.render().innerHTML };

    return (
        <div className="App">
            <header className="App-header"/>
            <div dangerouslySetInnerHTML={renderedResult}>
            </div>
        </div>
        );
}

export default App;
