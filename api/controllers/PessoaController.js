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

  static async restauraPessoaPorID(req, res) {
    try {
      const {id} = req.params;
      const pessoaRestaurada = await database.Pessoas.restore({
        where: {
          id: Number(id)
        }
      });

      if(pessoaRestaurada) {
        return res.status(200).json({message: `Pessoa ID ${id} restaurada com sucesso!`});
      } else {
        return res.status(404).json({message: "Pessoa ID não encontrado!"});
      }
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"});
    }
  }

  static async pegaMatriculaPorId(req, res) {
    try {
      const {estudanteId, matriculaId} = req.params;
      const matriculaResultado = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      });

      if(matriculaResultado !== null) {
        return res.status(200).json(matriculaResultado);
      } else {
        return res.status(404).json({message: "Matricula ID não encontrado!"});
      }

    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"})
    }
  }

  static async criaMatricula(req, res) {
    try {
      const { estudanteId } = req.params;
      const novaMatricula = {...req.body, estudante_id: Number(estudanteId)};
      
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);

      return res.status(200).json(novaMatriculaCriada);
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"})
    }
  }

  static async atualizaMatriculaPorID(req, res) {
    try {
      const {estudanteId, matriculaId} = req.params;
      await database.Matriculas.update(req.body,{
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      });

      const matriculaAtualizada = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId)
        }
      });

      if(matriculaAtualizada != null) {
        return res.status(200).json(matriculaAtualizada); 
      } else {
        return res.status(404).json({message: "Matricula ID não encontrado!"});
      }
      
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"});
    }
  }

  static async deletaMatriculaPorID(req, res) {
    try {
      const {estudanteId, matriculaId} = req.params;
      const matriculaDeletada = await database.Matriculas.destroy({
        where: {
          id: Number(matriculaId)
        }
      });

      if(matriculaDeletada) {
        return res.status(200).json({message: `Matricula ID ${matriculaId} deletada com sucesso!`});
      } else {
        return res.status(404).json({message: "Matricula ID não encontrado!"});
      }
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"});
    }
  }

  static async restauraMatriculaPorID(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const matriculaRestaurada = await database.Matriculas.restore({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      });

      if(matriculaRestaurada != 0) {
        return res.status(200).json({message: `Matricula ID ${matriculaId} restaurada com sucesso!`});
      } else {
        return res.status(404).json({message: "Matricula ID não encontrado!"});
      }
    } catch (error) {
      return res.status(500).json({message: "Erro interno do servidor!"});
    }
  }
  
}

module.exports = PessoaController;
