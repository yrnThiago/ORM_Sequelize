const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router.post('/pessoas/', PessoaController.criaPessoa);
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoaPorID);
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatriculaPorID);
router.get('/pessoas', PessoaController.pegaPessoasAtivas);
router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaPessoaPorId);
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatriculaPorID);
router.put('/pessoas/:id', PessoaController.atualizaPessoaPorID);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaMatriculaPorId);
router.delete('/pessoas/:id', PessoaController.deletaPessoaPorID);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatriculaPorID);

module.exports = router;