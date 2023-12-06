/**
 * Librerias
 */
const express = require("express");
const router = express.Router();

/*
 Modelos
 */
const AdministradorModel = require("../models/administrador.model");
const administradorDb = new AdministradorModel();

class AdministradorController {
  constructor() {}
  async createAdministrador(
    Nombres,Apellidos,DNI,Email,Password
  ) {
    var result = administradorDb.createAsincrono(
      Nombres,Apellidos,DNI,Email,Password
    );

    console.log(
      Nombres,Apellidos,DNI,Email,Password
    );
    const data = await result.catch((err) => {
      console.log("Controller Error: ", err);
      return null;
    });
    return data;
  }

  async getAdministradores() {
    var result = administradorDb.getAll();
    const data = await result.catch((err) => {
      console.log("Controller Error: ", err);
      return null;
    });
    return data;
  }

  async getAdministradoresPorToken(TOKEN) {
    var result = administradorDb.getTOKEN(TOKEN);
    const data = await result.catch((err) => {
      console.log("Controller Error: ", err);
      return null;
    });
    return data;
  }

  async actualizarPassword(Password, Confirmación, DNI) {
    if (Password === Confirmación) {
      var result = administradorDb.updatePassword(DNI, Password);
      const data = await result.catch((err) => {
        console.log("Controller Error: ", err);
        return null;
      });
      return data;
    } else {
      alert("Error");
      return new Error("Error de controlador");
    }
  }

  async deleteAdministrador(DNI) {
    var result = administradorDb.delete(DNI);
    const data = await result.catch((err) => {
      console.log("Controller Error: ", err);
      return null;
    });
    return data;
  }

  async login(email, Password) {
    const result = administradorDb.login(email, Password);
    console.log("Controlador Resultado", result);
    const data = await result.catch((err) => {
      console.log("Controller Error: ", err);
      return null;
    });
    return data;
  }
}
module.exports = AdministradorController;
