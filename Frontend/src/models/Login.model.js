import * as yup from "yup";
import { EMPTY } from "./errors/es";

export const loginFields = {
  username: "email",
  password: "Password",
};

const Login = yup.object().shape({
  [loginFields.username]: yup.string().required(EMPTY.USERNAME),
  [loginFields.password]: yup.string().required(EMPTY.PASSWORD),
});

export default Login;
