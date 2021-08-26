import React from 'react';
import { Grid, Button, Typography, TextField } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddresForm = () => {
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3} className="p-4">
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                type="text"
                name="firstName"
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                type="text"
                name="lastName"
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Address"
                type="address"
                name="address"
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                name="email"
                required
                fullWidth
              />
            </Grid>

            <Grid
              item
              xs={12}
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
              className="p-3"
            >
              <Grid item>
                <Button
                  component={Link}
                  className="border-danger text-danger"
                  to="/cart"
                  variant="outlined"
                >
                  Back to card
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  className="border-success text-success"
                  variant="outlined"
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddresForm;
