const express = require('express');
const router = express.Router(); // création du router express
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauce'); // import des controlleurs sauce

/*POST */
router.post('/', auth, multer, sauceCtrl.addSauce); // créer une sauce 
router.post('/:id/like', auth, sauceCtrl.likeSauce);

/*GET */
router.get('/', auth, sauceCtrl.getAllSauce); // récupérer toutes les sauces 
router.get('/', auth, sauceCtrl.getOneSauce); // récupère une sauce

/*PUT*/
router.put('/:id', auth, multer, sauceCtrl.modifySauce); // modifier une sauce

/*DELETE */
router.delete('/:id', auth, sauceCtrl.deleteSauce); // supprimer une sauce

module.exports = router;