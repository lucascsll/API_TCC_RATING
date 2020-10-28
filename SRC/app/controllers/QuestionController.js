import Question from '../models/Question';
import authConfig from '../../config/auth';
import axios from 'axios'
import convert from 'xml-js'

class QuestionController {
  async store(req, res) {
    const userAvaliatiBook = await Question.findOne({ where: { id_usuario: req.body.id_usuario,id_livro:req.body.id_livro } });
    if(userAvaliatiBook){
      return res.json({status:false,error:'Esse livro já foi avaliado'})
    }

    const {
      id_usuario,
      id_livro,
      nome_livro,
      rating
 
    } = await Question.create({...req.body,id_usuario : req.userId});
    return res.json({
    id_usuario,
    id_livro,
    nome_livro,
    rating,
    });
  }

  async index(req ,res ){
    const quiz = await Question.findAll({ where:{id_usuario:req.userId} });
    return res.json({quiz});

  } 

  async buscarLivros(req, res){

    const {pesquisarLivros}= req.body


     await axios.get(`https://www.goodreads.com/book/auto_complete?format=json&q=${pesquisarLivros}`).then(resp=>{
      return res.json(resp.data)
      
    })

  }

  async recomendar(req, res){

    const {nome_livro} = req.body
    var livrosRecomendados=[]
    for (var prop in nome_livro) {
     await axios.get(`https://www.goodreads.com/book/auto_complete?format=json&q=${nome_livro[prop]}`).then(resposta=>{
        livrosRecomendados.push(resposta.data[0])
      })
    }

    return res.json(livrosRecomendados)

  
  }


  async resenha(req, res){

   const {id_livro} = req.body

    axios.get(`https://www.goodreads.com/book/show/${id_livro}.xml?key=vpFCahMLJYm1aAujJqVgA`).then(resp=>{
        
      return res.end(convert.xml2json(resp.data, {compact: true, spaces: 4}))
    })

  }
}
export default new QuestionController();
