import React, {useState} from 'react'

const GastosVariables = () =>{

    const [datos, setDatos] = useState({
        trs_trs_publico: 0,
        trs_renta_bici : 0,
        trs_renta_scooter : 0,
        trs_uber_didi : 0,
        trs_taxi : 0,
        trs_estacionamiento : 0,
        trs_gasolina : 0,
        trs_lavado_auto : 0,
        cmd_domicilio: 0,
        cmd_diaria : 0,
        cmd_antojos : 0,
        cmd_tienda_panaderia : 0,
        cmd_salidas_restau : 0,
        srv_celular : 0,
        srv_luz : 0,
        srv_agua : 0,
        srv_internet : 0,
        srv_gas : 0,
        srv_tel_fijo : 0,
        tlb_deporte : 0,
        tlb_salidas : 0,
        tlb_concierto : 0,
        tlb_cine : 0,
        tlb_espectaculos : 0,
        csa_limpieza : 0,
        csa_super : 0,
        csa_mascotas : 0,
        csa_mejoras : 0,
        csa_reparaciones : 0,
        com_ropa : 0,
        com_accesorios : 0,
        com_personal : 0,
        com_gadgets : 0,
        com_gastos_evios : 0,
        com_farmacia : 0,
        ine_coche : 0,
        ine_casa : 0,
        ine_salud : 0,
        ine_regalos : 0,
        ine_interes : 0,
        ine_prestamos : 0,
        ine_multas : 0,
        ine_impuestos : 0,
        tar_stori_card : 0,
        tar_tarjeta_1 : 0,
        tar_tarjeta_2 : 0,
        tar_tarjeta_3 : 0,
        edu_libros : 0,
        edu_curso_taller : 0,
        edu_curso_online : 0,
        edu_idiomas : 0,
        edu_utiles : 0,
        via_pasaje : 0,
        via_hospedaje : 0,
        via_transporte : 0,
        via_comida : 0,
        via_salidas : 0,
        via_compras : 0,
        otr_propinas: 0,
        otr_donaciones: 0,
        otr_limosna: 0
    })

    const [totalGastosVariables, setGastosVariables] = useState(0)

    const handleInputChange = (e) =>{
        console.log(e.target.value)
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    
    var trs_publico_int = parseInt(datos. trs_trs_publico,10)
    var trs_renta_bici_int = parseInt(datos. trs_renta_bici,10)
    var trs_renta_scooter_int = parseInt(datos. trs_renta_scooter,10)
    var trs_uber_didi_int = parseInt(datos. trs_uber_didi,10)
    var trs_taxi_int = parseInt(datos. trs_taxi,10)
    var trs_estacionamiento_int = parseInt(datos. trs_estacionamiento,10)
    var trs_gasolina_int = parseInt(datos. trs_gasolina,10)
    var trs_lavado_auto_int = parseInt(datos. trs_lavado_auto,10)
    var cmd_domicilio_int = parseInt(datos. cmd_domicilio,10)
    var cmd_diaria_int = parseInt(datos. cmd_diaria,10)
    var cmd_antojos_int = parseInt(datos. cmd_antojos,10)
    var cmd_tienda_panaderia_int = parseInt(datos. cmd_tienda_panaderia,10)
    var cmd_salidas_restau_int = parseInt(datos. cmd_salidas_restau,10)
    var srv_celular_int = parseInt(datos. srv_celular,10)
    var srv_luz_int = parseInt(datos. srv_luz,10)
    var srv_agua_int = parseInt(datos. srv_agua,10)
    var srv_internet_int = parseInt(datos. srv_internet,10)
    var srv_gas_int = parseInt(datos. srv_gas,10)
    var srv_tel_fijo_int = parseInt(datos. srv_tel_fijo,10)
    var tlb_deporte_int = parseInt(datos. tlb_deporte,10)
    var tlb_salidas_int = parseInt(datos. tlb_salidas,10)
    var tlb_concierto_int = parseInt(datos. tlb_concierto,10)
    var tlb_cine_int = parseInt(datos. tlb_espectaculos,10)
    var tlb_espectaculos_int = parseInt(datos. tlb_espectaculos,10)
    var csa_limpieza_int = parseInt(datos. csa_limpieza,10)
    var csa_super_int = parseInt(datos. csa_super,10)
    var csa_mascotas_int = parseInt(datos. csa_mascotas,10)
    var csa_mejoras_int = parseInt(datos. csa_mejoras,10)
    var csa_reparaciones_int = parseInt(datos. csa_reparaciones,10)
    var com_ropa_int = parseInt(datos. com_ropa,10)
    var com_accesorios_int = parseInt(datos. com_accesorios,10)
    var com_personal_int = parseInt(datos. com_personal,10)
    var com_gadgets_int = parseInt(datos. com_gadgets,10)
    var com_gastos_evios_int = parseInt(datos. com_gastos_evios,10)
    var com_farmacia_int = parseInt(datos. com_farmacia,10)
    var ine_coche_int = parseInt(datos. ine_coche,10)
    var ine_casa_int = parseInt(datos. ine_casa,10)
    var ine_salud_int = parseInt(datos. ine_salud,10)
    var ine_regalos_int = parseInt(datos. ine_regalos,10)
    var ine_interes_int = parseInt(datos. ine_interes,10)
    var ine_prestamos_int = parseInt(datos. ine_prestamos,10)
    var ine_multas_int = parseInt(datos. ine_multas,10)
    var ine_impuestos_int = parseInt(datos. ine_impuestos,10)
    var tar_stori_card_int = parseInt(datos. tar_stori_card,10)
    var tar_tarjeta_1_int = parseInt(datos. tar_tarjeta_1,10)
    var tar_tarjeta_2_int = parseInt(datos. tar_tarjeta_2,10)
    var tar_tarjeta_3_int = parseInt(datos. tar_tarjeta_3,10)
    var edu_libros_int = parseInt(datos. edu_libros,10)
    var edu_curso_taller_int = parseInt(datos. edu_curso_online,10)
    var edu_curso_online_int = parseInt(datos. edu_curso_online,10)
    var edu_idiomas_int = parseInt(datos. edu_idiomas,10)
    var edu_utiles_int = parseInt(datos. edu_utiles,10)
    var via_pasaje_int = parseInt(datos. via_pasaje,10)
    var via_hospedaje_int = parseInt(datos. via_hospedaje,10)
    var via_transporte_int = parseInt(datos. via_transporte,10)
    var via_comida_int = parseInt(datos. via_comida,10)
    var via_salidas_int = parseInt(datos. via_salidas,10)
    var via_compras_int = parseInt(datos. via_compras,10)
    var otr_propinas_int = parseInt(datos. otr_propinas,10)
    var otr_donaciones_int = parseInt(datos. otr_donaciones,10)
    var otr_limosna_int = parseInt(datos. otr_limosna,10)

    const resTransporte = (
        trs_renta_bici_int + trs_renta_scooter_int + 
        trs_uber_didi_int + trs_taxi_int + trs_estacionamiento_int + 
        trs_gasolina_int + trs_lavado_auto_int + trs_publico_int
    );
    const resComida = (
        cmd_domicilio_int + cmd_diaria_int + cmd_antojos_int + 
        cmd_tienda_panaderia_int + cmd_salidas_restau_int
    );
    const resServicios = (
        srv_celular_int + srv_luz_int + srv_agua_int + 
        srv_internet_int + srv_gas_int + srv_tel_fijo_int
    );
    const resTiempoLibre = (
        tlb_deporte_int + tlb_salidas_int + tlb_concierto_int + 
        tlb_cine_int + tlb_espectaculos_int
    );
    const resCasa = (
        csa_limpieza_int + csa_super_int + csa_mascotas_int + 
        csa_mejoras_int + csa_reparaciones_int
    );
    const resCompras = (
        com_ropa_int + com_accesorios_int + 
        com_personal_int + com_gadgets_int + 
        com_gastos_evios_int + com_farmacia_int
    );
    const resInesperados = (
        ine_coche_int + ine_casa_int + ine_salud_int + 
        ine_regalos_int + ine_interes_int + ine_prestamos_int + 
        ine_multas_int + ine_impuestos_int
    );
    const resTarjetas = (
        tar_stori_card_int + tar_tarjeta_1_int + 
        tar_tarjeta_2_int + tar_tarjeta_3_int
    );
    const resEducacion = (
        edu_libros_int + edu_curso_taller_int + 
        edu_curso_online_int + edu_idiomas_int + edu_utiles_int
    );
    const resViaje = (
        via_pasaje_int + via_hospedaje_int + 
        via_transporte_int + via_comida_int + 
        via_salidas_int + via_compras_int
    );
    const resOtros = (
        otr_propinas_int + otr_donaciones_int + otr_limosna_int
    );

    const resultadoGastosVariables = (
        resTransporte + resComida + resServicios + resTiempoLibre +
        resCasa + resCompras + resInesperados + resTarjetas +
        resEducacion + resViaje + resOtros
    )

    return(
        <div className="row">

            <div className="black-text">
                <h4><i className="material-icons prefix">account_circle</i> Transporte</h4>

                <div className="col s12">
                    <h6>Transporte publico</h6>
                    <div className="input-field col s12">
                        <input type="number" onChange={handleInputChange} name="trs_trs_publico"></input>
                        <label>Gasto de transporte publico</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Renta de Bici</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="trs_renta_bici"></input>
                        <label htmlFor="">Gasto de renta de bici</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Renta Scooter</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="trs_renta_scooter"></input>
                        <label htmlFor="">Gasto renta scooter</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Uber / Didi</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="trs_uber_didi"></input>
                        <label htmlFor="">Gasto Uber o Didi</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Taxi</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="trs_taxi"></input>
                        <label htmlFor="">Gasto de taxi</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Estacionamiento</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="trs_estacionamiento"></input>
                        <label htmlFor="">Gasto de stacionamiento</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Gasolina</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="trs_gasolina"></input>
                        <label htmlFor="">Gasto gasolina</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Lavado de auto</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="trs_lavado_auto"></input>
                        <label htmlFor="">Gasto lavado de auto</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Comida</h4>

                <div className="col s12">
                    <h6>A domicilio</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="cmd_domicilio"></input>
                        <label htmlFor="">Gasto de comida a domicilio</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Comida diaria</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="cmd_diaria"></input>
                        <label htmlFor="">Gasto de comida diaria</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Antojos</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="cmd_antojos"></input>
                        <label htmlFor="">Gasto de antojos</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Comida tienda / panaderia</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="cmd_tienda_panaderia"></input>
                        <label htmlFor="">Gasto de comida tienda o panaderia</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Salidas a restaurantes</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="cmd_salidas_restau"></input>
                        <label htmlFor="">Gasto de salidas a restaurantes</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Servicios</h4>

                <div className="col s12">
                    <h6>Celular</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="srv_celular"></input>
                        <label htmlFor="">Pago de celular</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Agua</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="srv_agua"></input>
                        <label htmlFor="">Pago de agua</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Internet</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="srv_internet"></input>
                        <label htmlFor="">Pago internet</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Gas</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="srv_gas"></input>
                        <label htmlFor="">Pago gas</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Telefono fijo</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="srv_tel_fijo"></input>
                        <label htmlFor="">Pago telefono fijo</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Tiempo Libre</h4>

                <div className="col s12">
                    <h6>Deportes</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="tlb_deporte"></input>
                        <label htmlFor="">Gasto deportes</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Salidas</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="tlb_salidas"></input>
                        <label htmlFor="">Gasto salidas</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Conciertos</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="tlb_concierto"></input>
                        <label htmlFor="">Gasto conciertos</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Cine</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="tlb_cine"></input>
                        <label htmlFor="">Gasto cine</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Espectaculos</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="tlb_espectaculos"></input>
                        <label htmlFor="">Gasto espectaculos</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Casa</h4>

                <div className="col s12">
                    <h6>Limpieza</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="csa_limpieza"></input>
                        <label htmlFor="">Costo limpieza</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Supermercado</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="csa_super"></input>
                        <label htmlFor="">Gasto de upermercado</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Mascotas</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="csa_mascotas"></input>
                        <label htmlFor="">Gastos mascotas</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Mejoras</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="csa_mejoras"></input>
                        <label htmlFor="">Gastos en mejoras</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Reparaciones</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="csa_reparaciones"></input>
                        <label htmlFor="">Gastos en reparaciones</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Compras</h4>

                <div className="col s12">
                    <h6>Ropa</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="com_ropa"></input>
                        <label htmlFor="">Gastos en ropa</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Accesorios</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="com_accesorios"></input>
                        <label htmlFor="">Gastos en accesorios</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Arreglo personal</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="com_personal"></input>
                        <label htmlFor="">Gastos en arreglo personal</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Gadgets</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="com_gadgets"></input>
                        <label htmlFor="">Gastos en gadgets</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Gastos de envio</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="com_gastos_evios"></input>
                        <label htmlFor="">Gastos de envios</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Farmacia</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="com_farmacia"></input>
                        <label htmlFor="">Gastos en farmacia</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Inesperados</h4>

                <div className="col s12">
                    <h6>Coche</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="ine_coche"></input>
                        <label htmlFor="">Gasto coche</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Casa</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="ine_casa"></input>
                        <label htmlFor="">Gastos casa</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Salud</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="ine_salud"></input>
                        <label htmlFor="">Gastos salud</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Regalos</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="ine_regalos"></input>
                        <label htmlFor="">Gastos en regalos</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Intereses</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="ine_interes"></input>
                        <label htmlFor="">Gastos de intereses</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Prestamos</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="ine_prestamos"></input>
                        <label htmlFor="">Gasto en prestamo</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Multas</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="ine_multas"></input>
                        <label htmlFor="">Gasto en multas</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Impuestos</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="ine_impuestos"></input>
                        <label htmlFor="">Gasto en imṕuestos</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Tarjetas</h4>

                <div className="col s12">
                    <h6>Tarjeta Stori</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="tar_stori_card"></input>
                        <label htmlFor="">Gasto tarjeta stori</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Tarjeta 1</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="tar_tarjeta_1"></input>
                        <label htmlFor="">Gastos tarjeta 1</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Tarjeta 2</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="tar_tarjeta_2"></input>
                        <label htmlFor="">Gastos tarjeta 2</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Tarjeta 3</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="tar_tarjeta_3"></input>
                        <label htmlFor="">Gastos tarjeta 3</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Educacion</h4>

                <div className="col s12">
                    <h6>Libros</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="edu_libros"></input>
                        <label htmlFor="">Gastos en libros</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Cursos / Talleres</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="edu_curso_taller"></input>
                        <label htmlFor="">Gastos Cursos/Talleres</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Curso online</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="edu_curso_online"></input>
                        <label htmlFor="">Gastos en cursos online</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Idiomas</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="edu_idiomas"></input>
                        <label htmlFor="">Gastos idiomas</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Utiles</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="edu_utiles"></input>
                        <label htmlFor="">Gastos en utiles</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Viajes</h4>

                <div className="col s12">
                    <h6>Pasajes</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="via_pasaje"></input>
                        <label htmlFor="">Gastos de pasajes</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Hospedaje</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="via_hospedaje"></input>
                        <label htmlFor="">Gastos en hospedaje</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Transporte</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="via_transporte"></input>
                        <label htmlFor="">Gastos de transporte</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Comida</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="via_comida"></input>
                        <label htmlFor="">Gastos en comida</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Salidas</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="via_salidas"></input>
                        <label htmlFor="">Gastos en salidas</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Compras</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="via_compras"></input>
                        <label htmlFor="">Gastos en compras</label>
                    </div>
                </div>
            </div>

            <div>
                <h4><i className="material-icons prefix">account_circle</i> Otros</h4>

                <div className="col s12">
                    <h6>Propinas</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="otr_propinas"></input>
                        <label htmlFor="">Gastos de propinas</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Donaciones</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="otr_donaciones"></input>
                        <label htmlFor="">Gastos en donaciones</label>
                    </div>
                </div>

                <div className="col s12">
                    <h6>Limosna</h6>
                    <div className="input-field inline">
                        <input type="number" onChange={handleInputChange} name="otr_limosna"></input>
                        <label htmlFor="">Gastos de limosna</label>
                    </div>
                </div>
            </div>

            <button className="waves-effect waves-light btn" onClick={() => setGastosVariables(resultadoGastosVariables)}>Calcular</button>

            <h3>Tus gastos fijos son: {totalGastosVariables}</h3>

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

export default GastosVariables;