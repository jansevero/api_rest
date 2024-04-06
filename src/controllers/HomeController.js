import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Jana',
      sobrenome: 'Severo',
      email: 'jana@gmail.com',
      idade: 23,
      peso: 50,
      altura: 1.54,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
