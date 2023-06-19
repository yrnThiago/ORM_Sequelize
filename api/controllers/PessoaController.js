// const database = require("../models");
// const Sequelize = require("sequelize");

const { PessoasServices } = require("../services");
const pessoasServices = new PessoasServices();


class PessoaController {
  static async pegaPessoasAtivas(req, res) {
    try {
      const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos();

      return res.status(200).json(pessoasAtivas);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros();

      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaPessoaPorId(req, res) {
    try {
      const {id} = req.params;
      const pessoaResultado = await pessoasServices.pegaUmRegistro({ id });

      if(pessoaResultado !== null) {
        return res.status(200).json(pessoaResultado);
      } else {
        return res.status(404).json({message: "Pessoa ID não encontrado!"});
      }

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPessoa(req, res) {
    try {
      const novaPessoa = await pessoasServices.criaRegistro(req.body);

      return res.status(200).json(novaPessoa);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPessoaPorID(req, res) {
    try {
      const {id} = req.params;
      await pessoasServices.atualizaRegistro(req.body, Number(id));
      const pessoaAtualizada = await pessoasServices.pegaUmRegistro({ id });

      if(pessoaAtualizada != null) {
        return res.status(200).json(pessoaAtualizada); 
      } else {
        return res.status(404).json({message: "Pessoa ID não encontrado!"});
      }
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaPessoaPorID(req, res) {
    try {
      const {id} = req.params;
      await pessoasServices.apagaRegistro(Number(id));
      
      return res.status(200).json({message: `Pessoa ID: ${id} deletada com sucesso!`});
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restauraPessoaPorID(req, res) {
    try {
      const {id} = req.params;
      const pessoaRestaurada = await pessoasServices.restauraRegistro(Number(id));

      if(pessoaRestaurada) {
        return res.status(200).json({message: `Pessoa ID ${id} restaurada com sucesso!`});
      } else {
        return res.status(404).json({message: "Pessoa ID não encontrado!"});
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaMatriculaPorId(req, res) {
    try {
      const {estudanteId, matriculaId} = req.params;
      const matriculaResultado = await pessoasServices.pegaMatriculasPorEstudante({ id: Number(estudanteId) });

      if(matriculaResultado !== null) {
        return res.status(200).json(matriculaResultado);
      } else {
        return res.status(404).json({message: "Matricula ID não encontrado!"});
      }

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async cancelaPessoa(req, res) {  
    const { estudanteId } = req.params
    try {
      await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId))
      return res
        .status(200)
        .json({message: `matrículas ref. estudante ${estudanteId} canceladas`}) 
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = PessoaController;
