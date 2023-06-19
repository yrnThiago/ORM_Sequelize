// const database = require("../models");

const Services = require("../services/Services.js");
const niveisServices = new Services("Niveis");

class NivelController {
  static async pegaTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await niveisServices.pegaTodosOsRegistros();

      return res.status(200).json(todosOsNiveis);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaNivelPorId(req, res) {
    try {
      const {id} = req.params;
      const nivelResultado = await niveisServices.pegaUmRegistro({ id });

      if(nivelResultado !== null) {
        return res.status(200).json(nivelResultado);
      } else {
        return res.status(404).json({message: "Nivel ID não encontrado!"});
      }

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaNivel(req, res) {
    try {
      const novoNivel = await await niveisServices.criaRegistro(req.body);

      return res.status(200).json(novoNivel);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaNivelPorID(req, res) {
    try {
      const {id} = req.params;
      await niveisServices.atualizaRegistro(req.body, id);
      const nivelAtualizado = await await niveisServices.pegaUmRegistro(Number(id));

      if(nivelAtualizado != null) {
        return res.status(200).json(nivelAtualizado); 
      } else {
        return res.status(404).json({message: "Nivel ID não encontrado!"});
      }
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaNivelPorID(req, res) {
    try {
      const {id} = req.params;
      const nivelDeletado = await niveisServices.apagaRegistro(id);

      if(nivelDeletado) {
        return res.status(200).json({message: `Nivel ID: ${id} deletada com sucesso!`});
      } else {
        return res.status(404).json({message: "Nivel ID não encontrado!"});
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restauraNivelPorID(req, res) {
    try {
      const {id} = req.params;
      const nivelRestaurado = await niveisServices.restauraRegistro(id);

      if(nivelRestaurado) {
        return res.status(200).json({message: `Nivel ID ${id} restaurado com sucesso!`});
      } else {
        return res.status(404).json({message: "Nivel ID não encontrado!"});
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

}

module.exports = NivelController;
