import React, { useState } from 'react';
import { Grid, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import './checout.css';
import AddresForm from './AddresForm';
import PaymentForm from './PaymentForm';

const steps = ['shipping address', 'Payment detail'];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const Confirmation = () => {
    <div>Confirmation</div>;
  };

  const Form = () => (activeStep == 0 ? <AddresForm /> : <PaymentForm />);

  return (
    <>
      <Container data-aos="fade-down" className="checout-container">
        <Grid
          className="my-2 my-md-5 shadow checout-content"
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <img className="img-fluid" src="https://picsum.photos/500" alt="" />
          </Grid>

          <Grid className="p-2 p-md-4" item xs={12} md={6}>
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep == steps.length ? <Confirmation /> : <Form />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Checkout;
