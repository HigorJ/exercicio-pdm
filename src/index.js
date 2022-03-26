import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const App = () => {
    const estiloBotao = { marginTop: 12, paddingTop: 8, paddingBottom: 8, 
        backgroundColor: 'blueviolet', color: 'white', border: 'none', 
        borderRadius: 8, width: '100%', cursor: 'pointer' }
    
    const textoDoRotulo = 'Nome:';

    const obterTextoDoBotao =() => "Enviar";

    return (
        <div className="div-principal">
            <label htmlFor="nome" style={{ display: 'block', marginBottom: 4 }}>
                { textoDoRotulo }
            </label>
            <input 
                id="nome" 
                style={{ paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', 
                    outline: 'none', width: '100%', borderRadius: 8, boxSizing: 'border-box' }} />
        
            <button style={estiloBotao}>
                    { obterTextoDoBotao() }
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
