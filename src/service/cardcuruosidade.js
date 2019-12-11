import axios from 'axios'

const config = { //arquivo de configuração e cria um protocolo e fazer outras requisições
  baseURL: 'http://my-json-server.typicode.com/carolina-nobre/card', // é o indiport fixo a url da api externa
  timeout: 1000//pode receber outras requisições
}

const protocolo = axios.create(config)//prepara o ambiente e pegando as informções do const acima

export function getCard () { // qual função eu vou querer
  const url = '/card-curiosidades'//aqui posso pasar o id ou outras variaveis que tem dentro do objeto-aqui são os variaveis que quer acessar
  return protocolo.get(url)
}