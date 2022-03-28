const router = require("express").Router();



router.get('/',(req,res)=>{

    res.send('auth port')
})



module.exports = router;
