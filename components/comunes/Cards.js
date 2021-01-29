import React, {useState} from 'react'

import Collapsible from './test';

const Cards = () =>{

    const [activeFijos, setActiveFijos] = useState(0);
    const [activeVari, setActiveVari] = useState(0);
    const [activeResu, setActiveResu] = useState(0);

    return (
        <div>
            <div class="container row">
                <div class="col s12 m6">
                    <div class="card teal lighten-1">
                        <div class="card-content white-text">
                            <span class="card-title">Gastos Fijos</span>
                            <p>Añade tus gastos fijos que tienes en el mes</p>
                        </div>
                        <div class="card-action">
                            {
                                activeFijos === 0 ? 
                                (<a onClick={() => setActiveFijos(1)} className="waves-effect waves-light btn orange darken-1">añadir gastos</a>) 
                                : 
                                (<h6 className="white-text">Total de gastos fijos: $</h6>)
                            }
                        </div>
                    </div>
                </div>

                <div class="col s12 m6">
                    <div class="card teal lighten-1">
                        <div class="card-content white-text">
                            <span class="card-title">Gastos Variables</span>
                            <p>Añade tus gastos fijos que tienes en el mes</p>
                        </div>
                        <div class="card-action">
                            {
                                activeVari === 0 ? 
                                (<a onClick={() => setActiveVari(1)} className="waves-effect waves-light btn orange darken-1">añadir gastos</a>) 
                                : 
                                (<h6 className="white-text">Total de gastos fijos: $</h6>)
                            }
                        </div>
                    </div>
                </div>

                <div className="col s12 m12">
                    {
                        activeResu === 0 ?
                        (<a onClick={() => setActiveResu(1)} className="waves-effect waves-light btn orange darken-1">Caluclar gastos</a>)
                        :
                        (
                            <div class="card teal lighten-1">
                                <div class="card-content white-text">
                                    <span class="card-title">Este es el calculo de tus gastos</span>
                                    <ul>
                                        <li>Gasto 1: $30</li>
                                        <li>Gasto 2: $30</li>
                                        <li>Gasto 3: $30</li>
                                    </ul>
                                </div>
                                <div class="card-action">
                                    <p>Restante/Deficit: $90</p>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div>
                    <p>test</p>
                    <Collapsible />
                </div>
            </div>
        </div>
    )
}

export default Cards;