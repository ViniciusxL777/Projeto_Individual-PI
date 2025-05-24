    var database = require("../database/config")

    function buscarDadosResultados(pkUsuario) {
        var instrucaoSql = `
            SELECT * FROM resposta WHERE pkUsuario = '${pkUsuario}';`;
        console.log("Executando a instrução SQL: Consulta de resultados \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    function buscarDadosQuestoes() {
        var instrucaoSql = `
            SELECT * FROM questao;`;
        console.log("Executando a instrução SQL: Consulta de resultados \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    function buscarDadosQuiz(pkUsuario) {
        var instrucaoSql = `
            SELECT * FROM quiz WHERE pkUsuario = '${pkUsuario}';`;
        console.log("Executando a instrução SQL: Consulta de quizzes do usuário \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    function trazerDebatesCriados(pkUsuario) {
        var instrucaoSql = `
            SELECT * FROM debates WHERE pkUsuario = '${pkUsuario}';`;
        console.log("Executando a instrução SQL: Consulta de debates do usuário \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    function trazerComentario(pkUsuario) {
        var instrucaoSql = `
            SELECT * FROM comentario WHERE pkUsuario = '${pkUsuario}';`;
        console.log("Executando a instrução SQL: Consulta de comentario do usuário \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    module.exports = {
        buscarDadosResultados,
        buscarDadosQuestoes,
        buscarDadosQuiz,
        trazerDebatesCriados,
        trazerComentario
    }
