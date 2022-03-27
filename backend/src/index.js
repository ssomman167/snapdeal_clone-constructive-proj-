const express = require("express")

const cors = require("cors");

const connect = require("./configs/db")

const passport = require("./configs/email.verify")

const { body, validationResult } = require('express-validator');

const {signup,newToken} = require("./controllers/auth.controller")

const app = express()

app.use(cors());

const userController = require("./controllers/user.controller")

app.use(express.json())

app.use("/users",userController)

app.post(
    "/signup",
    body("email").notEmpty().isEmail(),
    signup
)

passport.serializeUser(function (user, done) {
    done(null, user);
  });
    
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });  
  
  app.get('/auth/google',
    passport.authenticate('google', { scope:
        [ 'email', 'profile' ] }
  ));
   
  app.get( '/auth/google/callback',
      passport.authenticate( 'google', {
          failureRedirect: '/auth/google/failure'
      }),
      (req, res) => {
          const { user } = req;
          const token = newToken(user);
  
          return res.send({ user, token });
      } 
  );

  // ------------------------Vivek index----------------------------

  
const productController=require("./controllers/productController")
const cartController=require("./controllers/cartController")

app.use("/products",productController)
app.use("/carts",cartController)

app.listen(9345,async()=>{
    try{
        await connect()
        console.log("My port no is 9345")
    } catch(err){
        console.log({Error:err.message})
    }
})