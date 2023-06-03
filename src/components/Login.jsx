
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { json, useNavigate } from 'react-router-dom';
import { Alert, Paper, Snackbar } from '@mui/material';
import bg from './images/bg.jpg';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Formik } from 'formik';
import Cookies from 'js-cookie';
import Context from './Context';
import { SnackbarProvider, useSnackbar } from 'notistack';


const ValidationSchema = Yup.object().shape({
   
    email: Yup.string().required("Please Enter Email").matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'email invalid'),
    password: Yup.string().required("Please Enter  Password").max('12').min('8','password must be at least 8')

  });
const theme = createTheme();
const Login = () => {

  
  const { enqueueSnackbar } = useSnackbar();
  const { signupData, updateSignupData } = React.useContext(Context);
const [data,setData]=React.useState()
const [errormsg,setErrormsg]=React.useState(false)
const[success,setsuccess]=React.useState(false)
const navigate=useNavigate()
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          
        },
      
        validationSchema:ValidationSchema,
        onSubmit:( values) => {
          localStorage.setItem('login',JSON.stringify(values))
          sessionStorage.setItem('login',data)
          Cookies.set('value',JSON.stringify(values),{expires:2})
          handleSubmit(values)
       
          signupData.forEach((item)=>{
            console.log(item)
           if(values.email===item.email && values.password===item.password){
            console.log('test')
            setsuccess(true)
           return navigate('/navbar')
          }
          else{
            console.log('error')
              setErrormsg(true)
          }
    })
    console.log(values)
         console.log(signupData)
           
          },
      });
     
    
    const paperStyle = { padding: 30, height: '55vh', maxWidth: 450, margin: "0 auto" }
    const handleSubmit = (event) => {
      
        const data = new FormData(event.currentTarget);
       
      };
   
    
     
  return (
    <Box style={{height:'100vh',width:'100%', backgroundImage:`url(${bg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',marginTop:'0px',display:'flex',alignItems:'center'}}>
        
   
    <ThemeProvider theme={theme}>
       
    <Container  component="main" maxWidth="xxl" >
      <CssBaseline />
      <Paper elevation={9}  style={paperStyle}
      >
        <Box sx={{display:"flex",justifyContent:'center'}}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main',}}>
          <LockOutlinedIcon />
        </Avatar>
        </Box>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={formik.handleSubmit} >
          <TextField
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.email}
             error={
                Boolean(formik.errors.email) && Boolean(formik.touched.email)
              }
              
              helperText={Boolean(formik.errors.email) && formik.errors.email}
           
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.password}
           error={
              Boolean(formik.errors.password) && Boolean(formik.touched.password)
            }
            
            helperText={Boolean(formik.errors.password) && formik.errors.password}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {errormsg? 
          <Alert severity="error" autoHideDuration={1000}  >incorrect email or Password</Alert>
              : null  }
          { success?
               <Snackbar autoHideDuration={2000}><Alert severity="success">you've logged in successfully</Alert></Snackbar> :null
              }
          <FormControlLabel sx={{float:'left'}}
            control={<Checkbox  value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
           
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >

            Sign In
          </Button>
          
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
     
    </Container>
 
  </ThemeProvider>
  </Box>


  )
}

export default Login
