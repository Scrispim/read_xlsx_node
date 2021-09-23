//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const readxls = require('./read_excel');

module.exports = class Dados {
    //propriedades e funções da classe aqui
    constructor(url) {
        this.url = "";        
    }

    async getDadosExcel(){
        
        const xlsx = new readxls();
        var obj = xlsx.ListRegistros();

        return obj.sort();
       
    }

}

