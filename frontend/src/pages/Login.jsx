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
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useLogin from "../hooks/useLogin";

const validationSchema = yup
  .object({
    email: yup
      .string()
      .required("Email field required")
      .email("Invalid email format"),
    password: yup.string().required("Password field required"),
  })
  .required();

export default function SignIn() {
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    loginMutation.mutate(data);
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
          Sign in
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}>
          <TextField
            {...register("email")}
            margin='normal'
            required
            fullWidth
            id='email'
            label={errors.email ? errors.email.message : "Email Address"}
            name='email'
            autoComplete='email'
            autoFocus
            error={Boolean(errors.email)}
          />
          <TextField
            {...register("password")}
            margin='normal'
            required
            fullWidth
            name='password'
            label={errors.password ? errors.password.message : "Password"}
            type='password'
            id='password'
            autoComplete='current-password'
            error={Boolean(errors.password)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, py: 1.5 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='' className='text-blue-500 hover:underline text-sm'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                to='/signup'
                className='text-blue-500 hover:underline text-sm'>
                Don't have an account? Sign Up
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
