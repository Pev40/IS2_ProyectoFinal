import "./styles.css";
import { useEffect } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import apiMykonos from "services/apiMykonos";
import { months, years } from "utils/date";
import { format } from "date-fns";

const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

function Proyecciones() {
  const [mesesDesde, setMesesDesde] = React.useState(month);
  const [añosDesde, setAñosDesde] = React.useState(year);
  const [mesesHasta, setMesesHasta] = React.useState(month);
  const [añosHasta, setAñosHasta] = React.useState(year);
  const [añoEspecifico, setAñoEspecifico] = React.useState(year);
  const [mesEspecifico, setMesEspecifico] = React.useState(month);
  const [value, setValue] = React.useState("1");
  const [totalSolesEspecifico, setTotalSolesEspecifico] = React.useState(0);
  const [totalDolaresEspecifico, setTotalDolaresEspecifico] = React.useState(0);
  const [totalSolesIntervalo, setTotalSolesIntervalo] = React.useState(0);
  const [totalDolaresIntervalo, setTotalDolaresIntervalo] = React.useState(0);

  const projectionSpecific = async () => {
    const _projectionSpecific =
      await apiMykonos.contracts.getProyectionSpecific({
        data: {
          anho: añoEspecifico,
          mes: mesEspecifico,
        },
      });
    setTotalSolesEspecifico(_projectionSpecific.Soles);
    setTotalDolaresEspecifico(_projectionSpecific.Dolares);
  };

  const projectionInterval = async () => {
    const fechaInicio = format(
      new Date(añosDesde, mesesDesde - 1, 1),
      "yyyy-MM-dd"
    );
    const fechaFin = format(new Date(añosHasta, mesesHasta, 0), "yyyy-MM-dd");

    const _projectionInterval =
      await apiMykonos.contracts.getProyectionInterval({
        data: {
          FechaInicio: fechaInicio,
          FechaFin: fechaFin,
        },
      });

    setTotalSolesIntervalo(_projectionInterval.Soles);
    setTotalDolaresIntervalo(_projectionInterval.Dolares);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //   projectionInterval();
  //   projectionSpecific();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    if (mesesDesde && mesesHasta && añosDesde && añosHasta) {
      projectionInterval();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mesesDesde, mesesHasta, añosDesde, añosHasta]);

  useEffect(() => {
    if (mesEspecifico && añoEspecifico) {
      projectionSpecific();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mesEspecifico, añoEspecifico]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeAñosDesde = (event) => {
    setAñosDesde(event.target.value);
  };
  const handleChangeMesesDesde = (event) => {
    setMesesDesde(event.target.value);
  };
  const handleChangeAñosHasta = (event) => {
    setAñosHasta(event.target.value);
  };
  const handleChangeMesesHasta = (event) => {
    setMesesHasta(event.target.value);
  };

  const handleChangeAñoEspecifico = (event) => {
    setAñoEspecifico(event.target.value);
  };
  const handleChangeMesEspecifico = (event) => {
    setMesEspecifico(event.target.value);
  };

  return (
    <div className="detallesProyecciones">
      <Typography variant="h4" align="center">
        Proyecciones
      </Typography>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Intervalo de meses" value="1" />
              <Tab label="Mes específico" value="2" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <label>Desde</label>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Año
              </InputLabel>

              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select"
                value={añosDesde}
                label="Años"
                onChange={handleChangeAñosDesde}
              >
                {years().map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Mes
              </InputLabel>

              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select"
                value={mesesDesde}
                label="Meses"
                onChange={handleChangeMesesDesde}
              >
                {months.map((month, i) => (
                  <MenuItem key={i} value={i + 1}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <label>Hasta</label>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Año
              </InputLabel>

              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select"
                value={añosHasta}
                label="Años"
                onChange={handleChangeAñosHasta}
              >
                {years().map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Mes
              </InputLabel>

              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select"
                value={mesesHasta}
                label="Meses"
                onChange={handleChangeMesesHasta}
              >
                {months.map((month, i) => (
                  <MenuItem key={i} value={i + 1}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <table>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ textAlign: "center" }} colspan="3">
                    Proyeccion Soles del Mes
                  </th>
                </tr>
                <tr>
                  <th>Desde</th>
                  <th>Hasta</th>
                  <th>Total Soles</th>
                </tr>
              </thead>
              <tbody>
                <td>
                  {añosDesde}
                  {" - "}
                  {mesesDesde}
                </td>
                <td>
                  {añosHasta}
                  {" - "}
                  {mesesHasta}
                </td>
                <td>{totalSolesIntervalo}</td>
              </tbody>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th style={{ textAlign: "center" }} colspan="3">
                    Proyeccion Dolares del Mes
                  </th>
                </tr>
                <tr>
                  <th>Desde</th>
                  <th>Hasta</th>
                  <th>Total Dolares</th>
                </tr>
              </thead>
              <tbody>
                <td>
                  {añosDesde}
                  {" - "}
                  {mesesDesde}
                </td>
                <td>
                  {añosHasta}
                  {" - "}
                  {mesesHasta}
                </td>
                <td>{totalDolaresIntervalo}</td>
              </tbody>
            </table>
          </TabPanel>

          <TabPanel value="2">
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Año
              </InputLabel>

              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select"
                value={añoEspecifico}
                label="Años"
                onChange={handleChangeAñoEspecifico}
              >
                {years().map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Mes
              </InputLabel>

              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select"
                value={mesEspecifico}
                label="Meses"
                onChange={handleChangeMesEspecifico}
              >
                {months.map((month, i) => (
                  <MenuItem key={i} value={i + 1}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Proyeccion Soles del mes</th>
                  <th>Total Soles</th>
                </tr>
              </thead>
              <tbody>
                <td>{value.length}</td>
                <td>
                  {añoEspecifico} {" - "} {mesEspecifico}
                </td>
                <td>{totalSolesEspecifico}</td>
              </tbody>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Proyeccion soles del mes</th>
                  <th>Total Dolares</th>
                </tr>
              </thead>
              <tbody>
                <td>{value.length}</td>
                <td>
                  {añoEspecifico} {" - "} {mesEspecifico}
                </td>
                <td>{totalDolaresEspecifico}</td>
              </tbody>
            </table>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
export default Proyecciones;
