const express = require("express");
const router = express.Router();
const path = require('path');

//Controller
const storeController = require('../controllers/storeController')



router.get('/mapOfStores', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/public/mapOfStores.html'))
})

router.post('/mapOfStores', async function (req, res) {
    const stores = await storeController.addStore();


    res.send(stores);

});
router.post('/getAllAddresses', async function (req, res) {
    const addresses = await storeController.getAllAddreses();
    res.json({ addresses });
});


module.exports = router;