/**
 * Librerias
 */
const express = require('express');
const router = express.Router();

/*
Modelos
*/
const ClientesModel = require('../models/clientes.model');
const LocalidadModel = require('../models/localidad.model');
const TiposDeCambioModel = require('../models/tipodecambio.model');
const clienteDb = ClientesModel();
const tipoDeCambiodb = TiposDeCambioModel();
const localidadDb = LocalidadModel();

class UserController {
    /**
     * Controladores Locaciones
     */
    async getLocalizaciones() {
        try {
            const resultLocalidades = await localidadDb.getDistritosPeru();
            const dataLocalidades = resultLocalidades;
            return dataLocalidades;
        } catch (err) {
            console.log("Controller Error: ", err);
            return null;
        }
    }

    /**
     * Controladores para CDUV
     */
    async createCliente(Nombre, Direccion, Localidad, DNI, Telefono, Correo, NombreCoo, TelefonoCoo) {
        try {
            let resultCreateCliente;
            if (NombreCoo === null && TelefonoCoo == null) {
                resultCreateCliente = await clienteDb.createSinCoopropietario(Nombre, Direccion, Localidad, DNI, Telefono, Correo);
            } else {
                resultCreateCliente = await clienteDb.createConCoopropietario(Nombre, Direccion, Localidad, DNI, Telefono, Correo, NombreCoo, TelefonoCoo);
            }

            const dataCreateCliente = resultCreateCliente;
            return dataCreateCliente;
        } catch (err) {
            console.log("Controller Error: ", err);
            return null;
        }
    }

    async deleteCliente(DNI) {
        try {
            const resultDeleteCliente = await clienteDb.deleteCliente(DNI);
            const dataDeleteCliente = resultDeleteCliente;
            return dataDeleteCliente;
        } catch (err) {
            console.log("Controller Error: ", err);
            return null;
        }
    }

    async updateCliente(Nombre, Direccion, Localidad, DNI, Telefono, Correo, NombreCoo, TelefonoCoo) {
        try {
            const resultUpdateCliente = await clienteDb.updateCliente(Nombre, Correo, Direccion, Localidad, DNI, Telefono, NombreCoo, TelefonoCoo);
            const dataUpdateCliente = resultUpdateCliente;
            return dataUpdateCliente;
        } catch (err) {
            console.log("Controller Error: ", err);
            return null;
        }
    }

    async viewClientes() {
        try {
            const resultViewClientes = await clienteDb.getAll();
            const dataViewClientes = resultViewClientes;
            return dataViewClientes;
        } catch (err) {
            console.log("Controller Error: ", err);
            return null;
        }
    }

    /**
     * Controladores Vista Tipo de Cambio
     */
    async createNuevoTipoDeCambio(NuevoCambio) {
        try {
            const resultCreateTipoDeCambio = await tipoDeCambiodb.updateNuevoTipoDeCambio(NuevoCambio);
            const dataCreateTipoDeCambio = resultCreateTipoDeCambio;
            return dataCreateTipoDeCambio;
        } catch (err) {
            console.log("Controller Error: ", err);
            return null;
        }
    }

    async getTipoDeCambioActual() {
        try {
            const resultTipoDeCambioActual = await tipoDeCambiodb.getNow();
            const dataTipoDeCambioActual = resultTipoDeCambioActual;
            return dataTipoDeCambioActual;
        } catch (err) {
            console.log("Controller Error: ", err);
            return null;
        }
    }
}

module.exports = UserController;
