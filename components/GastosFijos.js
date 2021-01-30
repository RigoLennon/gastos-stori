import React, {useState} from 'react'

const GastosFijos = () =>{

    const [datos, setDatos] = useState({
        viv_renta: 0,
        viv_hipoteca: 0,
        viv_manteni: 0,
        edu_colegio: 0,
        edu_clase_extr: 0,
        seg_gas_medico: 0,
        seg_dental: 0,
        seg_auto: 0,
        seg_casa: 0,
        seg_vida: 0,
        seg_retiro: 0,
        aho_meta: 0,
        aho_inversion:0,
        sus_hbo :0,
        sus_netflix :0,
        sus_apple :0,
        sus_spotify :0,
        sus_cable :0,
        sus_gym :0,
        deu_cred_edu :0,
        deu_prestamo :0,
        deu_tanda :0,
    })

    const [totalGastosFijos, setGastosFijos] = useState(0)

    const handleInputChange = (e) =>{
        console.log(e.target.value)
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    var viv_renta_int = parseInt(datos.viv_renta, 10)
    var viv_hipoteca_int = parseInt(datos.viv_hipoteca, 10)
    var viv_manteni_int = parseInt(datos.viv_manteni, 10)
    var edu_colegio_int = parseInt(datos.edu_colegio, 10)
    var edu_clase_extr_int = parseInt(datos.edu_clase_extr, 10)
    var seg_gas_medico_int = parseInt(datos.seg_gas_medico, 10)
    var seg_dental_int = parseInt(datos.seg_dental, 10)
    var seg_auto_int = parseInt(datos.seg_auto, 10)
    var seg_casa_int = parseInt(datos.seg_casa, 10)
    var seg_vida_int = parseInt(datos.seg_vida, 10)
    var seg_retiro_int = parseInt(datos.seg_retiro, 10)
    var aho_meta_int = parseInt(datos.aho_meta, 10)
    var aho_inversio_int = parseInt(datos.aho_inversion, 10)
    var sus_hbo_int = parseInt(datos.sus_hbo, 10)
    var sus_netflix_int = parseInt(datos.sus_netflix, 10)
    var sus_apple_int = parseInt(datos.sus_apple, 10)
    var sus_spotify_int = parseInt(datos.sus_spotify, 10)
    var sus_cable_int = parseInt(datos.sus_cable, 10)
    var sus_gym_int = parseInt(datos.sus_gym, 10)
    var deu_cred_edu_int = parseInt(datos.deu_cred_edu, 10)
    var deu_prestamo_int = parseInt(datos.deu_prestamo, 10)
    var deu_tanda_int = parseInt(datos.deu_tanda, 10)

    const resVivienda = (viv_renta_int + viv_hipoteca_int + viv_manteni_int);
    const resEducacion = (edu_colegio_int + edu_clase_extr_int);
    const resSeguro = (seg_gas_medico_int + seg_dental_int + seg_dental_int + seg_auto_int + seg_casa_int + seg_vida_int + seg_retiro_int);
    const resAhorro = (aho_meta_int + aho_inversio_int);
    const resSuscripciones = (sus_hbo_int + sus_netflix_int + sus_apple_int + sus_spotify_int + sus_cable_int + sus_gym_int);
    const resDeudas = (deu_cred_edu_int + deu_prestamo_int + deu_tanda_int);

    const resultadoGastosFijos = (
        resVivienda + resEducacion + resSeguro + resAhorro + resSuscripciones + resDeudas
    )

    return(
        <div className="row">

            <div className="black-text">
                <h4><i className="material-icons prefix">account_circle</i> Vivienda</h4>

                <div className="col s12">
                    <h6>Renta</h6>
                    <div className="input-field col s12">
                        <input type="number" onChange={handleInputChange} name="viv_renta"></input>
                        <label>Ingresa tu renta</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Hipoteca</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="viv_hipoteca"></input>
                        <label htmlFor="">Ingresa tu hipoteca</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Mantenimiento</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="viv_manteni"></input>
                        <label htmlFor="">Ingresa tu mantenimiento</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Educacion</h4>

                <div className="col s12">
                    <h6>Colegiatura</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="edu_colegio"></input>
                        <label htmlFor="">Ingresa tu colegiatura</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Clases extra</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="edu_clase_extr"></input>
                        <label htmlFor="">Ingresa tus clases extra</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Seguros</h4>

                <div className="col s12">
                    <h6>Gastos Medicos</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="seg_gas_medico"></input>
                        <label htmlFor="">Ingresa tus gastos medicos</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Dental</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="seg_dental"></input>
                        <label htmlFor="">Ingresa tus gastos dentales</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Auto</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="seg_auto"></input>
                        <label htmlFor="">Ingresa tus gastos de auto</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Casa</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="seg_casa"></input>
                        <label htmlFor="">Ingresa tus gastos de seguro de casa</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>De vida</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="seg_vida"></input>
                        <label htmlFor="">Ingresa tus gastos de seguro de vida</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Para el retiro</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="seg_retiro"></input>
                        <label htmlFor="">Ingresa tus seguro para el retiro </label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Ahorro</h4>

                <div className="col s12">
                    <h6>Meta</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="aho_meta"></input>
                        <label htmlFor="">Ingresa tu meta</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Inversion</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="aho_inversion"></input>
                        <label htmlFor="">Ingresa tu ingreso</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Suscripciones</h4>

                <div className="col s12">
                    <h6>HBO</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="sus_hbo"></input>
                        <label htmlFor="">Costo HBO</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Netflix</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="sus_netflix"></input>
                        <label htmlFor="">Costo Netflix</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Apple</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="sus_apple"></input>
                        <label htmlFor="">Costo Apple</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Spotify</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="sus_spotify"></input>
                        <label htmlFor="">Costo Spotify</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Cable</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="sus_cable"></input>
                        <label htmlFor="">Costo Cable</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Gimnasio</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="sus_gym"></input>
                        <label htmlFor="">Costo Gimnasio</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Deudas</h4>

                <div className="col s12">
                    <h6>Credito educativo</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="deu_cred_edu"></input>
                        <label htmlFor="">Ingresa tu credito educativo</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Prestamo</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="deu_prestamo"></input>
                        <label htmlFor="">Ingresa tu prestamo</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Tanda</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="deu_tanda"></input>
                        <label htmlFor="">Ingresa tu tanda</label>
                    </div>
                </div>
            </div>

            <button className="waves-effect waves-light btn" onClick={() => setGastosFijos(resultadoGastosFijos)}>Calcular</button>

            <h3>Tus gastos fijos son: {totalGastosFijos}</h3>

            <style jsx global>
                {
                    `
                    /* label color */
                    .input-field label {
                      color: #263238;
                    }
                    /* label focus color */
                    .input-field input[type=text]:focus + label {
                      color: #263238;
                    }
                    /* label underline focus color */
                    .input-field input[type=text]:focus {
                      border-bottom: 1px solid #263238;
                      box-shadow: 0 1px 0 0 #263238;
                    }
                    /* valid color */
                    .input-field input[type=text].valid {
                      border-bottom: 1px solid #263238;
                      box-shadow: 0 1px 0 0 #263238;
                    }
                    /* invalid color */
                    .input-field input[type=text].invalid {
                      border-bottom: 1px solid #263238;
                      box-shadow: 0 1px 0 0 #263238;
                    }
                    /* icon prefix focus color */
                    .input-field .prefix.active {
                      color: #263238;
                    }
                    `
                }
            </style>

        </div>
    )
}

export default GastosFijos;