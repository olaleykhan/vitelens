import express from 'express';
import { passportGoogle } from '../../services/auth/passport-google-strategy';
import { httpCreateUser } from '../users/users.controller';
import { User } from '../../models';
import { Profile } from 'passport';
import catchAsync from "../../utils/catchAsync";


const router = express.Router();
router.get('/google',  passportGoogle.authenticate('google', {
    scope: ['email'],
  })
);

const aunthenticate = passportGoogle.authenticate('google', {
  failureRedirect: 'http://localhost:3000/login', //TODO: Adjust to frontend URL automatically, maybe by passing it in.
  session: true,
})


router.get('/google/callback',aunthenticate , catchAsync(
  async (req, res) => {  
    const profile = req.user as Profile;
    req.body= {...req.body, id:profile.id, email:profile.emails[0].value, firstName:"", lastName:"",};
    try {
  
      const user = await User.findOne({where: {email: profile.emails[0].value}});
      if(!user) {
      await httpCreateUser(req, res);
      }
      return res.redirect('http://localhost:3000');      
    } catch (error) {
      console.log("ERROR CREARTING USER...", error.message)
     return res.status(500).json({error: error.message});
      // return    
    }
  }
));

router.get('/logout', catchAsync(
  async (req, res,next) => {
    //Removes req.user and clears any logged in session
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.json(null)
    });
}
));

router.get('/isloggedin', (req, res) => {
  return res.json(req.user && req.isAuthenticated());
});



export default router;
