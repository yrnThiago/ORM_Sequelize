const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router.post('/pessoas/', PessoaController.criaPessoa);
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);
router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaPessoaPorId);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatriculaPorID);
router.put('/pessoas/:id', PessoaController.atualizaPessoaPorID);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaMatriculaPorId);
router.delete('/pessoas/:id', PessoaController.deletaPessoaPorID);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatriculaPorID);

module.exports = router;