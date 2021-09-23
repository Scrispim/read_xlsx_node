const C = require('./constants');

const path = require('path');
const fs = require('fs');

const fetch = require("node-fetch");

const Dados = require('./class/Dados');

const DadosExcel = new Dados();

const axios = require('axios');

const data = new Date().getDate() +'/'+ (new Date().getMonth()+1) + '/' + new Date().getFullYear();

const slackToken = 'xoxb-929187731495-1933904855459-GRCeKgcP69qEIgLAjPun75KX';


run().catch(err => console.log(err));

async function run() {

  var Planilha = await DadosExcel.getDadosExcel();

  Planilha = Planilha.filter(x=>x.periodicidade == 'Diário').sort(y=>y.responsavel) //pegando somente as atividades diarias

  await SanderAtividades(Planilha.filter(x=>x.responsavel == 'Sander'));
  
  await SandroAtividades(Planilha.filter(x=>x.responsavel == 'Sandro'));

  //console.log('Done', res.data);
}

async function SanderAtividades(Planilha){

  var mensagem = "Suas atividades de hoje " + data + ': \n';

  for (const registro of Planilha) {

    try {

      mensagem += "\nEmpresa: " + registro.empresa;
      mensagem += "\nTarefa: " + registro.tarefa;
      mensagem += "\nObservação: " + registro.observacao;
      mensagem += "\n------------------------------------------------------------\n"
      
      // ...
    } catch (error) {
      console.log(error)
    }     

  }

  mensagem += "\n!!!mensagem de teste!!!\n\n";
  console.log(mensagem);

  await PostSlack(mensagem, 'UTBFSR5PY');
}

async function SandroAtividades(Planilha){

  var mensagem = "Suas atividades de hoje " + data + ': \n';

  for (const registro of Planilha) {

    try {

      mensagem += "\nEmpresa: " + registro.empresa;
      mensagem += "\nTarefa: " + registro.tarefa;
      mensagem += "\nObservação: " + registro.observacao;
      mensagem += "\n------------------------------------------------------------\n"
      
      // ...
    } catch (error) {
      console.log(error)
    }     

  }

  mensagem += "\n!!!mensagem de teste!!!\n\n";
  console.log(mensagem);

  await PostSlack(mensagem, 'U01TH08EFSS');
}

async function PostSlack(mensagem, userid){

  const url = 'https://slack.com/api/chat.postMessage';

  var res = await axios.post(url, {
    channel: userid,
    text: mensagem
  }, { headers: { authorization: `Bearer ${slackToken}` } });

}


  async function getAccessClients() {
      

    const planilha = await DadosExcel.getDadosExcel();
    
    var json;
    

    for (const registro of planilha) {
        //if(i == 5){return false;}
        try {

          
          // ...
        } catch (error) {
          console.log(error)
        }     

        console.log(JSON.stringify(registro))
        json = JSON.stringify(obj);
      }

      console.log("salvando arquivo: " + json)
      fs.writeFileSync('DadosExcel.json', json, 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
          }
        });  


  }

  
  
  
  

  