const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();

router.post('/pessoas/', PessoaController.criaPessoa);
router.post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoaPorID);
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula);
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa);
router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/ativas', PessoaController.pegaPessoasAtivas);
router.get('/pessoas/:id', PessoaController.pegaPessoaPorId);
router.get('/pessoas/matricula/lotada', MatriculaController.pegaTurmasLotadas);
router.get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma);
router.get('/pessoas/:estudanteId/matricula', MatriculaController.pegaMatriculas);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.pegaUmaMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizaMatricula);
router.put('/pessoas/:id', PessoaController.atualizaPessoaPorID);
router.delete('/pessoas/:id', PessoaController.deletaPessoaPorID);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.apagaMatricula);

module.exports = router;