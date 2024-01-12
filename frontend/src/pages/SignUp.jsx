import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleIcon from "../assets/GoogleIcon.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useRegister from "../hooks/useRegister";

const validationSchema = yup
  .object({
    email: yup
      .string()
      .required("Email field required")
      .email("Invalid email format"),
    firstName: yup.string().required("First Name field required"),
    lastName: yup.string().required("Last Name field required"),
    password: yup.string().required("Password field required"),
  })
  .required();

export default function SignUp() {
  const signUpMutation = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    signUpMutation.mutate({
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      password: data.password,
    });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Link to='/' className='absolute z-50 top-4 left-10'>
        Logo
      </Link>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box
          component='form'
          noValidate
          sx={{ mt: 3 }}
          onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("firstName")}
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                label={
                  errors.firstName ? errors.firstName.message : "First Name"
                }
                autoFocus
                error={Boolean(errors.firstName)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("lastName")}
                required
                fullWidth
                id='lastName'
                label={errors.lastName ? errors.lastName.message : "Last Name"}
                name='lastName'
                autoComplete='family-name'
                error={Boolean(errors.lastName)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("email")}
                required
                fullWidth
                id='email'
                label={errors.email ? errors.email.message : "Email Address"}
                name='email'
                autoComplete='email'
                error={Boolean(errors.email)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("password")}
                required
                fullWidth
                name='password'
                label={errors.password ? errors.password.message : "Password"}
                type='password'
                id='password'
                autoComplete='new-password'
                error={Boolean(errors.password)}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, py: 1.5 }}>
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link
                to='/login'
                className='text-blue-500 text-sm hover:underline'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          <div className='mx-auto flex items-center gap-x-3'>
            <span className='border-b pt-1 w-full border-blue-400'></span>
            <p className='text-lg'>or</p>
            <span className='border-b pt-1 w-full border-blue-400'></span>
          </div>
          <Button variant='outlined' fullWidth sx={{ mt: 2 }}>
            <img className='h-10 w-10' src={GoogleIcon} />
            Continue With Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
