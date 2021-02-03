import React, {useState} from 'react'

import GastosFijos from '../GastosFijos';
import GastosVariables from '../GastosVariables';


const Cards = () =>{

    const [activeFijos, setActiveFijos] = useState(false);
    const [activeVari, setActiveVari] = useState(false);
    const [activeResu, setActiveResu] = useState(false);

    return (
        <div>
            <div className="container row">
                <div className="col s12 m6">
                    <div className="card green lighten-3">
                        <div className="card-content">
                            <span className="card-title">Gastos Fijos</span>
                            <p>Añade tus gastos fijos que tienes en el mes</p>
                        </div>
                        <div className="card-action">
                            {
                                activeFijos === false ? 
                                (<a onClick={() => setActiveFijos(!false)} className="waves-effect waves-light btn orange darken-1">añadir gastos</a>) 
                                : 
                                (
                                <div>
                                    <GastosFijos />
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="col s12 m6">
                    <div className="card teal lighten-1">
                        <div className="card-content black-text">
                            <span className="card-title">Gastos Variables</span>
                            <p>Añade tus gastos fijos que tienes en el mes</p>
                        </div>
                        <div className="card-action">
                            {
                                activeVari === false ? 
                                (<a onClick={() => setActiveVari(!false)} className="waves-effect waves-light btn orange darken-1">añadir gastos</a>) 
                                : 
                                (
                                    <div>
                                        <GastosVariables />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="col s12 m12">
                    {
                        activeResu === false ?
                        (<a onClick={() => setActiveResu(!false)} className="waves-effect waves-light btn orange darken-1">Caluclar gastos</a>)
                        :
                        (
                            <div className="card teal lighten-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Este es el calculo de tus gastos</span>
                                    <ul>
                                        <li>Gasto 1: $30</li>
                                        <li>Gasto 2: $30</li>
                                        <li>Gasto 3: $30</li>
                                    </ul>
                                </div>
                                <div className="card-action">
                                    <p>Restante/Deficit: $90</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards;