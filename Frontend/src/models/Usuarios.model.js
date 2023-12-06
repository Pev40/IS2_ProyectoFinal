import { dniRegex } from "utils/regex";
import * as yup from "yup";
import { EMPTY, VALID } from "./errors/es";

export const usuariosFields = {
  username: "Email",
  name: "Nombres",
  lastName: "Apellidos",
  dni: "DNI",
  password: "Password",
  confirmPassword: "confirmPassword",
  newPassword: "PasswordNueva",
  confirmNewPassword: "confirmPasswordNueva",
};

const Usuario = yup.object().shape({
  [usuariosFields.name]: yup.string().required(EMPTY.GENERAL),
  [usuariosFields.lastName]: yup.string().required(EMPTY.GENERAL),
  [usuariosFields.dni]: yup
    .string()
    .matches(dniRegex, VALID.DNI)
    .required(EMPTY.GENERAL),
  [usuariosFields.username]: yup
    .string()
    .email(VALID.EMAIL)
    .required(EMPTY.GENERAL),
  [usuariosFields.password]: yup
    .string()
    .min(6, VALID.PASSWORD)
    .required(EMPTY.GENERAL),
  [usuariosFields.confirmPassword]: yup
    .string()
    .oneOf([yup.ref(usuariosFields.password), null], VALID.CONFIRMPASSWORD)
    .required(EMPTY.GENERAL),
});

export const UsuarioUpdate = yup.object().shape({
  [usuariosFields.dni]: yup.string().required(EMPTY.GENERAL),
  [usuariosFields.password]: yup
    .string()
    .min(6, VALID.PASSWORD)
    .required(EMPTY.GENERAL),
  [usuariosFields.newPassword]: yup
    .string()
    .min(6, VALID.PASSWORD)
    .required(EMPTY.GENERAL),
  [usuariosFields.confirmNewPassword]: yup
    .string()
    .oneOf([yup.ref(usuariosFields.newPassword), null], VALID.CONFIRMPASSWORD)
    .required(EMPTY.GENERAL),
});

export default Usuario;
