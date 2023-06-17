const database = require("../models");

class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await database.Niveis.findAll();

      return res.status(200).json(todosOsNiveis);
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"})
    }
  }

  static async pegaNivelPorId(req, res) {
    try {
      const {id} = req.params;
      const nivelResultado = await database.Niveis.findOne({
        where: {
          id: Number(id)
        }
      });

      if(nivelResultado !== null) {
        return res.status(200).json(nivelResultado);
      } else {
        return res.status(404).json({message: "Nivel ID não encontrado!"});
      }

    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"})
    }
  }

  static async criaNivel(req, res) {
    try {
      const novoNivel = await database.Niveis.create(req.body);

      return res.status(200).json(novoNivel);
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"})
    }
  }

  static async atualizaNivelPorID(req, res) {
    try {
      const {id} = req.params;
      await database.Niveis.update(req.body,{
        where: {
          id: Number(id)
        }
      });
      const nivelAtualizado = await database.Niveis.findOne({
        where: {
          id: Number(id)
        }
      });

      if(nivelAtualizado != null) {
        return res.status(200).json(nivelAtualizado); 
      } else {
        return res.status(404).json({message: "Nivel ID não encontrado!"});
      }
      
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"});
    }
  }

  static async deletaNivelPorID(req, res) {
    try {
      const {id} = req.params;
      const nivelDeletado = await database.Niveis.destroy({
        where: {
          id: Number(id)
        }
      });

      if(nivelDeletado) {
        return res.status(200).json({message: `Nivel ID: ${id} deletada com sucesso!`});
      } else {
        return res.status(404).json({message: "Nivel ID não encontrado!"});
      }
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"});
    }
  }

}

module.exports = NivelController;
