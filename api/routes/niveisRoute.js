const { Router } = require('express');
const NivelController = require('../controllers/NivelController.js');

const router = Router();

router.post('/niveis/', NivelController.criaNivel);
router.get('/niveis', NivelController.pegaTodosOsNiveis);
router.get('/niveis/:id', NivelController.pegaNivelPorId);
router.put('/niveis/:id', NivelController.atualizaNivelPorID);
router.delete('/niveis/:id', NivelController.deletaNivelPorID);

module.exports = router;