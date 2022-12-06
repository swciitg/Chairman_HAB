const express=require('express');
const router = express.Router({ mergeParams: true });
const passport=require('passport');

//auth login
// router.get('/login',(res,req)=>{
//     res.render('login');
// });

// //auth logout
// router.get('/logout',(res,req)=>{

// })

//auth with outlook
router.get('/outlook', passport.authenticate('azure_ad_oauth2'));

router.get('/outlook/redirect',
    // passport.authenticate('azure_ad_oauth2', { failureRedirect: process.env.BASE_PATH + '/auth' }),
    (req, res) => {
        // console.log(req.user);
        // res.redirect(process.env.BASE_PATH + '/admin');
        res.send("You have reached the redirect uri")
    });

module.exports=router;