import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import useStyles from "../../components/Theme/Styles";
import theme from "../../components/Theme/Theme";
import RegisterDialog from "../../components/RegisterComponent/RegisterDialog";
import { useHistory } from "react-router";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const AdminLogin = () => {
  const classes = useStyles();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if(localStorage.getItem("token")) {
      history.push("/admin/profile");
      window.location.reload();
    }
  }, [history]);

  const onSubmit = async (data) => {
    const values = {
        email: data.email,
        password: data.password
    }

    try {
        const res = await axios.post("/admin/login", values);
        localStorage.setItem("token", res.data.token);

        history.push("/admin/profile");
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className={classes.adminLoginPaper}>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <div className={classes.adminLoginTypography}>
                  <Typography variant="h5" gutterBottom>
                    Admin Login
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("email", { required: true })}
                      {...field}
                      fullWidth
                      type="email"
                      variant="outlined"
                      label="Email address"
                      name="email"
                      id="email"
                      required
                      className={classes.input}
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="email"
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  render={({ field, formState }) => (
                    <TextField
                      {...register("password", { required: true })}
                      {...field}
                      fullWidth
                      type="password"
                      variant="outlined"
                      label="Password"
                      name="password"
                      id="password"
                      required
                      className={classes.input}
                      InputProps={{
                        classes: {
                          notchedOutline: classes.input,
                        },
                      }}
                      inputProps={{
                        className: classes.input,
                      }}
                    />
                  )}
                  control={control}
                  name="password"
                  defaultValue=""
                />
              </Grid>

              <Grid item xs={12} className={classes.centerGridItem}>
                <Button variant="contained" color="secondary" type="submit">
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} className={classes.centerGridItem}>
                <Button color="secondary" type="button">
                  Forgot password
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default AdminLogin;
