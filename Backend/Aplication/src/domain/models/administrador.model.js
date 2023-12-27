const express = require('express');
const router = express.Router();
const connectionDb = require('../../config/dbconnections');
class AdministradorModel{

    async createAdministrador({
    Password,
    Nombre,
    Apellido,
    Direccion,
    Localidad,
    DNI,
    Telefono,
    Correo
}) {
    const con = connectionDb.promise();
    let passSale;

    // Hash the password
    await bcrypt.hash(Password, 10, (err, PasswordEncriptada) => {
        if (err) {
            console.log(err);
        } else {
            passSale = PasswordEncriptada;
        }
    });

    const data = await con.query("CALL CrearNuevoUsuario(?,?,?,?,?,?,?,?)", [
        passSale,
        Nombre,
        Apellido,
        Localidad,
        Direccion,
        DNI,
        Correo,
        Telefono
    ]);

    console.log("Error:", data);
}

    async getAll(){
        const con = connectionDb.promise();
        const data = await con.query("CALL VerUsuarios()");
        console.log("Error:",data);
        return data[0][0];
    }

    async getTOKEN(TOKEN){
        const con = connectionDb.promise();
        const data = await con.query("CALL BuscarAdministrador(?)",TOKEN);
        console.log("Error: ",data);
        return data[0][0][0];
    }

    async delete(DNICli){
        console.log(DNICli);
        const con = connectionDb.promise();
        const data = await con.query("CALL EliminarUsuario(?)",DNICli);
        console.log("Error:",data);
        return data;
    }


    async login(email,Password){
        const con = connectionDb.promise();
        const RecuperacionContraseña = await con.query("CALL ComprobarPassword(?)",email);
        let data =0,data2;
        let contrasenaGuardada = RecuperacionContraseña[0][0][0].Password;
        const bcrypt = require("bcryptjs");
        let coinciden = bcrypt.compareSync(Password,contrasenaGuardada);
                if(coinciden){
                    data2 = await this.verToken(email);
                    console.log('error bycryps: ',data2);
                    return data2;
                }else{
                    console.log('Error comparativa: ', coinciden);
                    return data;
                }
        }

    async verToken(email){
        const con = connectionDb.promise();
        const data = await con.query("CALL AccederLogin(?)",email)
        console.log('error SQL: ',data[0][0]);
        return data[0][0][0];
    }

    async updatePassword(DNI,Password){
  
        const con = connectionDb.promise();
        const bcrypt = require("bcryptjs");
        const SALT_PASSWORD =  10;
        let PasswordEncriptada = bcrypt.hashSync(Password, SALT_PASSWORD);
        const data = await con.query("CALL ActualizarPassword(?,?)",[PasswordEncriptada,DNI]);
        console.log("Error:",data);
        return data;

    }



    async createAsincrono(Nombres,Apellidos,DNI,Email,Password){
        const con = connectionDb.promise();
        const bcrypt = require("bcryptjs");
        const SALT_PASSWORD =  10;
        let PasswordEncriptada = bcrypt.hashSync(Password, SALT_PASSWORD);
        const data = await con.query("CALL CrearNuevoUsuario(?,?,?,?,?)",[PasswordEncriptada,Nombres,Apellidos,DNI,Email]);
        console.log("Error:",data);
        return data;
    }
}
module.exports = AdministradorModel;
