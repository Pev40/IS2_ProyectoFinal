import "./styles.css";

import { Stepper, Step, StepLabel, Typography, Box } from "@mui/material";
import { usePagos } from "contexts/PagosContext";
import Resume from "./Resume";

export const PagosStepper = () => {
  const { activeStep, steps, pagos, clients, lots, projects, divisas } =
    usePagos();

  return (
    <Box className="PagosStepper" sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map(({ label }, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label || ""} {...stepProps}>
              <StepLabel {...labelProps}>{label || ""}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Resume
            pagos={pagos}
            clients={clients}
            lots={lots}
            projects={projects}
            divisas={divisas}
          />
        </>
      ) : (
        <>
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            {steps[activeStep].label}
          </Typography>
          <Box>{steps[activeStep].component}</Box>
        </>
      )}
    </Box>
  );
};

export default PagosStepper;
