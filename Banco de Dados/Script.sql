CREATE DATABASE bleach_info;
USE bleach_info;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL,
    imagemPerfil TEXT
);

CREATE TABLE questao (
    idQuestao INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    pergunta VARCHAR(300) NOT NULL,
    alternativaA VARCHAR(100) NOT NULL,
    alternativaB VARCHAR(100) NOT NULL,
    alternativaC VARCHAR(100) NOT NULL,
    alternativaD VARCHAR(100) NOT NULL,
    alternativaCorreta CHAR(12) NOT NULL,
    pontos INT NOT NULL
);

CREATE TABLE resposta (
    idResposta INT AUTO_INCREMENT,
    pkUsuario INT,
    pkQuestao INT,
    CONSTRAINT pkComposta PRIMARY KEY (idResposta , pkusuario , pkQuestao),
    CONSTRAINT pkUsuarioResposta FOREIGN KEY (pkUsuario)
        REFERENCES usuario (idUsuario),
    CONSTRAINT pkQuestaoResposta FOREIGN KEY (pkQuestao)
        REFERENCES questao (idQuestao),
    resultadoQuestao INT,
    CONSTRAINT chkResultadoQuestao CHECK (resultadoQuestao IN (1 , 0)),
    pontosQuestao INT
);

CREATE TABLE quiz (
    idQuiz INT AUTO_INCREMENT NOT NULL,
    pkUsuario INT NOT NULL,
    PRIMARY KEY (idQuiz , pkUsuario),
    CONSTRAINT pkUsuarioQuiz FOREIGN KEY (pkUsuario)
        REFERENCES usuario (idusuario),
    pontos INT NOT NULL
);

CREATE TABLE debates (
    idDebate INT AUTO_INCREMENT NOT NULL,
    pkUsuario INT,
    PRIMARY KEY (idDebate , pkUsuario),
    titulo VARCHAR(100) NOT NULL
);

CREATE TABLE comentario (
    idComentario INT AUTO_INCREMENT NOT NULL,
    pkUsuario INT NOT NULL,
    PRIMARY KEY (idComentario , pkUsuario),
    CONSTRAINT pkUsuarioComentario FOREIGN KEY (pkUsuario)
        REFERENCES usuario (idUsuario),
    comentario TEXT,
    imagem TEXT
);

CREATE TABLE comentarioDebate (
    pkComentario INT NOT NULL,
    pkDebate INT NOT NULL,
    PRIMARY KEY (pkComentario , pkDebate),
    CONSTRAINT pkComentarioDebate FOREIGN KEY (pkComentario)
        REFERENCES comentario (idComentario),
    CONSTRAINT pkDebateComentario FOREIGN KEY (pkDebate)
        REFERENCES debates (idDebate)
);

INSERT INTO questao (pergunta, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta, pontos) VALUES
('Qual é o nome da cidade central da Sociedade das Almas?', 'Las Noches', 'Seireitei', 'Hueco Mundo', 'Wandenreich', 'alternativaB', 5),
('Quem foi o fundador da 1ª Divisão do Gotei 13?', 'Byakuya Kuchiki', 'Sōsuke Aizen', 'Genryūsai Yamamoto', 'Tōshirō Hitsugaya', 'alternativaC', 10),
('Qual divisão é responsável pelas missões médicas e de cura?', '2ª Divisão', '4ª Divisão', '9ª Divisão', '11ª Divisão', 'alternativaB', 7),
('Qual capitão é famoso por sua aparência de cientista e conduta excêntrica?', 'Mayuri Kurotsuchi', 'Kenpachi Zaraki', 'Jūshirō Ukitake', 'Kaname Tōsen', 'alternativaA', 8),
('Qual local é o lar dos Hollow e Arrancar?', 'Hueco Mundo', 'Seireitei', 'Karakura', 'Rukongai', 'alternativaA', 6),
('Qual Espada tem a forma de ressurreição chamada "Pantera"?', 'Ulquiorra', 'Starrk', 'Grimmjow', 'Nnoitra', 'alternativaC', 9),
('O que representa o Wandenreich?', 'Uma cidade no Hueco Mundo', 'A divisão médica dos Shinigami', 'O império Quincy', 'A central dos Arrancar', 'alternativaC', 10),
('Quem é o líder supremo do Wandenreich?', 'Uryu Ishida', 'Yhwach', 'Sternritter F', 'Jugram Haschwalth', 'alternativaB', 10),
('Qual personagem é conhecido por ter o Bankai Senbonzakura Kageyoshi?', 'Kenpachi Zaraki', 'Byakuya Kuchiki', 'Ichigo Kurosaki', 'Renji Abarai', 'alternativaB', 8),
('Quem é o capitão da 11ª Divisão?', 'Tōshirō Hitsugaya', 'Shunsui Kyōraku', 'Kenpachi Zaraki', 'Soi Fon', 'alternativaC', 7),
('Qual personagem é considerado o Shinigami mais jovem a se tornar capitão?', 'Renji Abarai', 'Gin Ichimaru', 'Tōshirō Hitsugaya', 'Ikkaku Madarame', 'alternativaC', 8),
('Qual divisão lida com operações secretas e assassinatos?', '6ª Divisão', '2ª Divisão', '3ª Divisão', '9ª Divisão', 'alternativaB', 9),
('Qual é o nome da espada de Ichigo Kurosaki?', 'Senbonzakura', 'Zangetsu', 'Hyōrinmaru', 'Suzumebachi', 'alternativaB', 7),
('Quem é o capitão da 8ª Divisão conhecido por usar um chapéu de palha?', 'Komamura', 'Shunsui Kyōraku', 'Mayuri', 'Ukitake', 'alternativaB', 7),
('O que é Las Noches?', 'Um poder Quincy', 'Um castelo no Hueco Mundo', 'Uma divisão médica', 'Uma arma de Yhwach', 'alternativaB', 6),
('Qual Espada tem a aparência mais calma e fria, e lida com a morte como conceito?', 'Grimmjow', 'Nnoitra', 'Ulquiorra', 'Barragan', 'alternativaC', 9),
('Quem lidera a 4ª Divisão, responsável pela cura?', 'Unohana', 'Soi Fon', 'Retsu Kotetsu', 'Hinamori', 'alternativaA', 8),
('Qual divisão cuida da comunicação e jornal oficial da Sociedade das Almas?', '12ª Divisão', '7ª Divisão', '9ª Divisão', '10ª Divisão', 'alternativaC', 7),
('Qual personagem era conhecido por sua busca obsessiva por justiça, mesmo traindo a Soul Society?', 'Tōshirō Hitsugaya', 'Kaname Tōsen', 'Renji Abarai', 'Sajin Komamura', 'alternativaB', 9),
('Qual é o nome da forma completa Hollow de Ichigo?', 'Bankai Ichigo', 'Vizard Ichigo', 'Vasto Lorde Ichigo', 'Resurrección Ichigo', 'alternativaC', 9),
('Qual divisão é famosa por sua agressividade e sede de combate?', '11ª Divisão', '3ª Divisão', '5ª Divisão', '9ª Divisão', 'alternativaA', 8),
('Quem era o Capitão da 5ª Divisão antes de trair a Soul Society?', 'Gin Ichimaru', 'Yamamoto', 'Aizen', 'Kensei Muguruma', 'alternativaC', 10),
('Qual é o nome do arco mais poderoso dos Quincy?', 'Reishi Bow', 'Licht Regen', 'Sanrei Glove', 'Heilig Bogen', 'alternativaD', 9),
('Quem é o Quincy que representa a letra "A" entre os Sternritter?', 'Uryu Ishida', 'Jugram Haschwalth', 'Yhwach', 'Bambietta Basterbine', 'alternativaC', 10),
('Quem é o Tenente da 6ª Divisão?', 'Ikkaku Madarame', 'Renji Abarai', 'Marechiyo Ōmaeda', 'Izuru Kira', 'alternativaB', 7),
('Qual é o nome da habilidade final de Yhwach?', 'The Vision', 'The Almighty', 'The End', 'The Future Eye', 'alternativaB', 10),
('Qual dos seguintes locais não pertence à Soul Society?', 'Seireitei', 'Rukongai', 'Hueco Mundo', 'Gotei 13', 'alternativaC', 6),
('Qual é a especialidade da 12ª Divisão?', 'Força de choque', 'Pesquisa e Desenvolvimento', 'Treinamento Espiritual', 'Reconhecimento', 'alternativaB', 9),
('Qual capitão é conhecido por ter sido um dos primeiros Kenpachi?', 'Shunsui Kyōraku', 'Mayuri Kurotsuchi', 'Retsu Unohana', 'Ukitake', 'alternativaC', 10),
('Qual é o nome do jornal oficial da Sociedade das Almas?', 'Soul News', 'Seireitei News', 'Seireitei Communication', 'Karakura Times', 'alternativaC', 7);

SELECT * FROM usuario;
SELECT imagemPerfil FROM usuario WHERE idUsuario = 2;
SELECT * FROM resposta where pkUsuario = 2;
SELECT * FROM questao;
SELECT * FROM quiz;

UPDATE resposta SET resultadoQuestao = 1, pontosQuestao = 10 WHERE pkQuestao = 7 AND pkUsuario = 2;
SELECT * FROM resposta WHERE pkQuestao = 1;

SELECT * FROM usuario WHERE idUsuario = 2;
SELECT * FROM questao;
SELECT * FROM resposta WHERE pkUsuario = 2;
SELECT * FROM quiz WHERE pkUsuario = 1;

SELECT 
    debates.idDebate,
    comentario.idComentario,
    comentario.pkUsuario,
    usuario.nome,
    usuario.imagemPerfil,
    debates.titulo,
    comentario.comentario,
    comentario.imagem
FROM
    debates
        JOIN
    comentarioDebate ON comentarioDebate.pkComentario = debates.idDebate
        JOIN
    comentario ON comentario.idComentario = comentarioDebate.pkComentario
        JOIN
    usuario ON usuario.idUsuario = comentario.pkUsuario
WHERE
    debates.idDebate = 0;
    
SELECT * FROM comentarioDebate;
SELECT * FROM debates;

SELECT 
    usuario.nome,
    usuario.imagemPerfil,
    comentario.comentario,
    comentario.imagem,
    comentario.idComentario,
    debates.idDebate
FROM
    usuario
        JOIN
    comentario ON usuario.idUsuario = comentario.pkUsuario
        JOIN
    comentarioDebate ON comentarioDebate.pkComentario = comentario.idComentario
        JOIN
    debates ON comentarioDebate.pkDebate = debates.idDebate
WHERE
    debates.idDebate = 1;