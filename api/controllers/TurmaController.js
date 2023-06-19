const database = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Services = require("../services/Services.js");
const turmasServices = new Services("Turmas");

class TurmaController {
  static async pegaTodasAsTurmas(req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};
    data_inicial || data_final ? where.data_inicio = {} : null;
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    data_final ? where.data_inicio[Op.lte] = data_final : null;
    
    try {
      const todasAsTurmas = await turmasServices.pegaTodosOsRegistros(where);
      return res.status(200).json(todasAsTurmas);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaTurmaPorId(req, res) {
    try {
      const {id} = req.params;
      const turmaResultado = await turmasServices.pegaUmRegistro({ id });

      if(turmaResultado !== null) {
        return res.status(200).json(turmaResultado);
      } else {
        return res.status(404).json({message: "Turma ID não encontrado!"});
      }

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaTurma(req, res) {
    try {
      const novaTurma = await turmasServices.criaRegistro(req.body);

      return res.status(200).json(novaTurma);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaTurmaPorID(req, res) {
    try {
      const {id} = req.params;
      await turmasServices.atualizaRegistro(req.body, id);
      const turmaAtualizada = await turmasServices.pegaUmRegistro({id: Number(id)});

      if(turmaAtualizada != null) {
        return res.status(200).json(turmaAtualizada); 
      } else {
        return res.status(404).json({message: "Turma ID não encontrado!"});
      }
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaTurmaPorID(req, res) {
    try {
      const {id} = req.params;
      const turmaDeletada = await turmasServices.apagaRegistro(id);

      if(turmaDeletada) {
        return res.status(200).json({message: `Turma ID: ${id} deletada com sucesso!`});
      } else {
        return res.status(404).json({message: "Turma ID não encontrado!"});
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restauraTurmaPorID(req, res) {
    try {
      const {id} = req.params;
      const turmaRestaurada = await turmasServices.restauraRegistro(id);

      if(turmaRestaurada) {
        return res.status(200).json({message: `Turma ID ${id} restaurada com sucesso!`});
      } else {
        return res.status(404).json({message: "Turma ID não encontrado!"});
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

}

module.exports = TurmaController;
