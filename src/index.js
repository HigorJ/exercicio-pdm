import React from 'react';
import ReactDOM from 'react-dom';

import Image1 from './images/image1.png';

import './styles.css';

const App = () => {
    const estiloContainer = () => {
        return {
            width: '90%',
            heigth: '100%',
            backgroundColor: '#eee',
            margin: 'auto',
            border: '1px solid #888',
            borderRadius: 8,
            textAlign: 'center',
            fontFamily: 'Arial'
        }
    }

    const nomes = {
        medico1: 'Fernando Silva',
        medico2: 'Mairiana Oliverira',
        medico3: 'Marcia Santana'
    }

    return (
        <div className="container" style={estiloContainer()}>
            <h1>Profissionais de saúde</h1>
            <div className="card-list" style={{ display: 'flex', justifyContent: 'space-around', margin: '10px', border: '1px solid #ddd', borderRadius: 4, padding: '15px' }}>
                <div className="card">
                    <img src={Image1} className="image" alt="doctor 1" />
                    <p>{ nomes.medico1 }</p>                
                </div>

                <div className="card">
                    <img src={process.env.PUBLIC_URL + '/image2.jpg'} className="image" alt="doctor 2" />
                    <p>{ nomes.medico2 }</p>
                </div>

                <div className="card">
                    <img src="https://media.istockphoto.com/photos/female-physician-or-doctor-sitting-with-arm-crossed-at-her-office-picture-id1365499706" className="image" alt="doctor 3" />
                    <p>{ nomes.medico3 }</p>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
