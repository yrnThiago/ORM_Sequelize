const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController.js');

const router = Router();

router.post('/turmas/', TurmaController.criaTurma);
router.post('/turmas/:id/restaura', TurmaController.restauraTurmaPorID);
router.get('/turmas', TurmaController.pegaTodasAsTurmas);
router.get('/turmas/:id', TurmaController.pegaTurmaPorId);
router.put('/turmas/:id', TurmaController.atualizaTurmaPorID);
router.delete('/turmas/:id', TurmaController.deletaTurmaPorID);

module.exports = router;