const database = require("../models");

class TurmaController {
  static async pegaTodasAsTurmas(req, res) {
    try {
      const todasAsTurmas = await database.Turmas.findAll();

      return res.status(200).json(todasAsTurmas);
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"})
    }
  }

  static async pegaTurmaPorId(req, res) {
    try {
      const {id} = req.params;
      const turmaResultado = await database.Turmas.findOne({
        where: {
          id: Number(id)
        }
      });

      if(turmaResultado !== null) {
        return res.status(200).json(turmaResultado);
      } else {
        return res.status(404).json({message: "Turma ID não encontrado!"});
      }

    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"})
    }
  }

  static async criaTurma(req, res) {
    try {
      const novaTurma = await database.Turmas.create(req.body);

      return res.status(200).json(novaTurma);
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"})
    }
  }

  static async atualizaTurmaPorID(req, res) {
    try {
      const {id} = req.params;
      await database.Turmas.update(req.body,{
        where: {
          id: Number(id)
        }
      });
      const turmaAtualizada = await database.Turmas.findOne({
        where: {
          id: Number(id)
        }
      });

      if(turmaAtualizada != null) {
        return res.status(200).json(turmaAtualizada); 
      } else {
        return res.status(404).json({message: "Turma ID não encontrado!"});
      }
      
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"});
    }
  }

  static async deletaTurmaPorID(req, res) {
    try {
      const {id} = req.params;
      const turmaDeletada = await database.Turmas.destroy({
        where: {
          id: Number(id)
        }
      });

      if(turmaDeletada) {
        return res.status(200).json({message: `Turma ID: ${id} deletada com sucesso!`});
      } else {
        return res.status(404).json({message: "Turma ID não encontrado!"});
      }
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"});
    }
  }

  static async restauraTurmaPorID(req, res) {
    try {
      const {id} = req.params;
      const turmaRestaurada = await database.Turmas.restore({
        where: {
          id: Number(id)
        }
      });

      if(turmaRestaurada) {
        return res.status(200).json({message: `Turma ID ${id} restaurada com sucesso!`});
      } else {
        return res.status(404).json({message: "Turma ID não encontrado!"});
      }
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"});
    }
  }

}

module.exports = TurmaController;
