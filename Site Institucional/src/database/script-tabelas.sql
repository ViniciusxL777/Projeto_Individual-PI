CREATE DATABASE bleach_info;
USE bleach_info;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) UNIQUE,
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(100)
);

CREATE TABLE questao (
    idQuestao INT PRIMARY KEY AUTO_INCREMENT,
    pergunta VARCHAR(300),
    alternativaA VARCHAR(100),
    alternativaB VARCHAR(100),
    alternativaC VARCHAR(100),
    alternativaD VARCHAR(100),
    alternativaCorreta CHAR(12)
);

CREATE TABLE resposta (
    idResposta INT AUTO_INCREMENT,
    pkUsuario INT,
    pkQuestao INT,
    CONSTRAINT pkComposta PRIMARY KEY (idResposta, pkusuario, pkQuestao),
    CONSTRAINT pkUsuarioResposta FOREIGN KEY (pkUsuario) REFERENCES usuario (idUsuario),
    CONSTRAINT pkQuestaoResposta FOREIGN KEY (pkQuestao) REFERENCES questao (idQuestao),
    resultadoQuestao INT,
    CONSTRAINT chkResultadoQuestao CHECK (resultadoQuestao IN (1,0))
);

SELECT * FROM usuario;
SELECT * FROM resposta;
SELECT * FROM questao;
