const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router.post('/pessoas/', PessoaController.criaPessoa);
router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaPessoaPorId);
router.put('/pessoas/:id', PessoaController.atualizaPessoaPorID);
router.delete('/pessoas/:id', PessoaController.deletaPessoaPorID);

module.exports = router;