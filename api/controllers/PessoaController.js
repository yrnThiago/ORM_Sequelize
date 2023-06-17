const database = require("../models");

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();

      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"})
    }
  }

  static async pegaPessoaPorId(req, res) {
    try {
      const {id} = req.params;
      const pessoaResultado = await database.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      });

      if(pessoaResultado !== null) {
        return res.status(200).json(pessoaResultado);
      } else {
        return res.status(404).json({message: "Pessoa ID não encontrado!"});
      }

    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"})
    }
  }

  static async criaPessoa(req, res) {
    try {
      const novaPessoa = await database.Pessoas.create(req.body);

      return res.status(200).json(novaPessoa);
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"})
    }
  }

  static async atualizaPessoaPorID(req, res) {
    try {
      const {id} = req.params;
      await database.Pessoas.update(req.body,{
        where: {
          id: Number(id)
        }
      });
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      });

      if(pessoaAtualizada != null) {
        return res.status(200).json(pessoaAtualizada); 
      } else {
        return res.status(404).json({message: "Pessoa ID não encontrado!"});
      }
      
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"});
    }
  }

  static async deletaPessoaPorID(req, res) {
    try {
      const {id} = req.params;
      const pessoaDeletada = await database.Pessoas.destroy({
        where: {
          id: Number(id)
        }
      });

      if(pessoaDeletada) {
        return res.status(200).json({message: `Pessoa ID: ${id} deletada com sucesso!`});
      } else {
        return res.status(404).json({message: "Pessoa ID não encontrado!"});
      }
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"});
    }
  }

}

module.exports = PessoaController;
