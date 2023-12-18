/**
 * Librerias
 */

const express = require("express");
const router = express.Router();

const LocalidadModel = require("../models/localidad.model");
const localidadesDb = new LocalidadModel();

class LocalidadesController {
    async getAll() {
        const result = localidadesDb.getDistritosPeru();
        try {
            const data = await result;
            return data;
        } catch (err) {
            console.log("Controller Error:", err);
            return null;
        }
    }
}

module.exports = LocalidadesController;
