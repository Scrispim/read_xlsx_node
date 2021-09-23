//Modulo para leitura do xlsx
const xlsx = require('node-xlsx')

var obj = [];

module.exports = class readxls{

    constructor(){}

    ListRegistros() {
        

        //Caminho do arquivo a xlsx a ser lido
        const filePath = './atividades_ssc.xlsx'

        //Função para retornar apenas valores existentes do .map
        const identity = x => x

        //Lendo a planilha
        const plan = xlsx.parse(filePath)

        var i = 0

        plan[0].data.forEach(p =>{
            //console.log(p);

            var Empresa, Tipo,	Periodicidade,	Check,	Tarefa,	 Valor, Observacoes,	Responsavel = "";

            for (let index = 0; index < p.length; ++index){
                //console.log(p[index]);
                switch(index) {
                    case 0:
                        Empresa = p[index];
                    break;
                    case 1:
                        Tipo = p[index];
                        break;
                    case 2:
                        Periodicidade = p[index];
                        break;
                    case 3:
                        Check = p[index];
                        break;
                    case 4:
                        Tarefa = p[index];
                        break;
                    case 5:
                        Valor = p[index];
                        break;
                    case 6:
                        Observacoes = p[index];
                        break;
                    case 7:
                        Responsavel = p[index];
                        break;
                    default:
                    // code block
                }                
                
            }

            if(i > 0){
                obj.push({
                    empresa: Empresa,
                    tipo: Tipo,
                    periodicidade: Periodicidade,
                    check: Check,
                    tarefa: Tarefa,
                    valor: Valor,
                    observacoes: Observacoes,
                    responsavel: Responsavel
                });
            }

            i++;

        })

        return obj;
    }

//console.log(obj);

}