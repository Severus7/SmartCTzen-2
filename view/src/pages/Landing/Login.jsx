import React, { useState, useEffect } from "react";
import { Container, Card, Grid, TextField, Button } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { ThemeProvider } from "@material-ui/core/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import theme from "../../components/Theme/Theme";
import useStyles from "../../components/Theme/Styles";
import RegisterDialog from "../../components/RegisterComponent/RegisterDialog";
import { useHistory } from "react-router";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [openPopup, setOpenPopup] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if(localStorage.getItem("token")) {
      history.push("/citizen/profile");
      window.location.reload();
    }
  }, [history]);

  const onSubmit = async (data) => {
    
    const values = {
      email: data.email,
      password: data.password
    }

    try {
      const res = await axios.post("/citizen/login", values);
      localStorage.setItem("token", res.data.token);

      history.push("/citizen/profile")
      window.location.reload();

    } catch(err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <h1>Hello</h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.paddingPaper}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
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
                            className: classes.input
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
                            className: classes.input
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
                    <Button 
                      color="secondary" 
                      type="button"
                      onClick={() => setOpenPopup(true)}
                    >
                      Create an account
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <RegisterDialog openPopup={openPopup} onClose={handleClose} />
    </ThemeProvider>
  );
};

export default Login;
