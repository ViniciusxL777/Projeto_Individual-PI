CREATE DATABASE bleach_info;
USE bleach_info;

CREATE TABLE usuario (
 idUsuario INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100) UNIQUE NOT NULL,
 email VARCHAR(100) UNIQUE NOT NULL,
 senha VARCHAR(100) NOT NULL
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
pkUsuario INT NOT NULL,
pkQuestao INT UNIQUE NOT NULL,
CONSTRAINT pkComposta PRIMARY KEY (idResposta, pkusuario, pkQuestao),
CONSTRAINT pkUsuarioResposta FOREIGN KEY (pkUsuario) REFERENCES usuario (idUsuario),
CONSTRAINT pkQuestaoResposta FOREIGN KEY (pkQuestao) REFERENCES questao (idQuestao),
resultadoQuestao INT,
CONSTRAINT chkResultadoQuestao CHECK (resultadoQuestao IN (1,0))
);

INSERT INTO questao (pergunta, alternativaA, alternativaB, alternativaC, alternativaD, alternativaCorreta) VALUES
('Qual é o nome da cidade central da Sociedade das Almas?', 'Las Noches', 'Seireitei', 'Hueco Mundo', 'Wandenreich', 'alternativaB'),
('Quem foi o fundador da 1ª Divisão do Gotei 13?', 'Byakuya Kuchiki', 'Sōsuke Aizen', 'Genryūsai Yamamoto', 'Tōshirō Hitsugaya', 'alternativaC'),
('Qual divisão é responsável pelas missões médicas e de cura?', '2ª Divisão', '4ª Divisão', '9ª Divisão', '11ª Divisão', 'alternativaB'),
('Qual capitão é famoso por sua aparência de cientista e conduta excêntrica?', 'Mayuri Kurotsuchi', 'Kenpachi Zaraki', 'Jūshirō Ukitake', 'Kaname Tōsen', 'alternativaA'),
('Qual local é o lar dos Hollow e Arrancar?', 'Hueco Mundo', 'Seireitei', 'Karakura', 'Rukongai', 'alternativaA'),
('Qual Espada tem a forma de ressurreição chamada "Pantera"?', 'Ulquiorra', 'Starrk', 'Grimmjow', 'Nnoitra', 'alternativaC'),
('O que representa o Wandenreich?', 'Uma cidade no Hueco Mundo', 'A divisão médica dos Shinigami', 'O império Quincy', 'A central dos Arrancar', 'alternativaC'),
('Quem é o líder supremo do Wandenreich?', 'Uryu Ishida', 'Yhwach', 'Sternritter F', 'Jugram Haschwalth', 'alternativaB'),
('Qual personagem é conhecido por ter o Bankai Senbonzakura Kageyoshi?', 'Kenpachi Zaraki', 'Byakuya Kuchiki', 'Ichigo Kurosaki', 'Renji Abarai', 'alternativaB'),
('Quem é o capitão da 11ª Divisão?', 'Tōshirō Hitsugaya', 'Shunsui Kyōraku', 'Kenpachi Zaraki', 'Soi Fon', 'alternativaC'),
('Qual personagem é considerado o Shinigami mais jovem a se tornar capitão?', 'Renji Abarai', 'Gin Ichimaru', 'Tōshirō Hitsugaya', 'Ikkaku Madarame', 'alternativaC'),
('Qual divisão lida com operações secretas e assassinatos?', '6ª Divisão', '2ª Divisão', '3ª Divisão', '9ª Divisão', 'alternativaB'),
('Qual é o nome da espada de Ichigo Kurosaki?', 'Senbonzakura', 'Zangetsu', 'Hyōrinmaru', 'Suzumebachi', 'alternativaB'),
('Quem é o capitão da 8ª Divisão conhecido por usar um chapéu de palha?', 'Komamura', 'Shunsui Kyōraku', 'Mayuri', 'Ukitake', 'alternativaB'),
('O que é Las Noches?', 'Um poder Quincy', 'Um castelo no Hueco Mundo', 'Uma divisão médica', 'Uma arma de Yhwach', 'alternativaB'),
('Qual Espada tem a aparência mais calma e fria, e lida com a morte como conceito?', 'Grimmjow', 'Nnoitra', 'Ulquiorra', 'Barragan', 'alternativaC'),
('Quem lidera a 4ª Divisão, responsável pela cura?', 'Unohana', 'Soi Fon', 'Retsu Kotetsu', 'Hinamori', 'alternativaA'),
('Qual divisão cuida da comunicação e jornal oficial da Sociedade das Almas?', '12ª Divisão', '7ª Divisão', '9ª Divisão', '10ª Divisão', 'alternativaC'),
('Qual personagem era conhecido por sua busca obsessiva por justiça, mesmo traindo a Soul Society?', 'Tōshirō Hitsugaya', 'Kaname Tōsen', 'Renji Abarai', 'Sajin Komamura', 'alternativaB'),
('Qual é o nome da forma completa Hollow de Ichigo?', 'Bankai Ichigo', 'Vizard Ichigo', 'Vasto Lorde Ichigo', 'Resurrección Ichigo', 'alternativaC'),
('Qual divisão é famosa por sua agressividade e sede de combate?', '11ª Divisão', '3ª Divisão', '5ª Divisão', '9ª Divisão', 'alternativaA'),
('Quem era o Capitão da 5ª Divisão antes de trair a Soul Society?', 'Gin Ichimaru', 'Yamamoto', 'Aizen', 'Kensei Muguruma', 'alternativaC'),
('Qual é o nome do arco mais poderoso dos Quincy?', 'Reishi Bow', 'Licht Regen', 'Sanrei Glove', 'Heilig Bogen', 'alternativaD'),
('Quem é o Quincy que representa a letra "A" entre os Sternritter?', 'Uryu Ishida', 'Jugram Haschwalth', 'Yhwach', 'Bambietta Basterbine', 'alternativaC'),
('Quem é o Tenente da 6ª Divisão?', 'Ikkaku Madarame', 'Renji Abarai', 'Marechiyo Ōmaeda', 'Izuru Kira', 'alternativaB'),
('Qual é o nome da habilidade final de Yhwach?', 'The Vision', 'The Almighty', 'The End', 'The Future Eye', 'alternativaB'),
('Qual dos seguintes locais não pertence à Soul Society?', 'Seireitei', 'Rukongai', 'Hueco Mundo', 'Gotei 13', 'alternativaC'),
('Qual é a especialidade da 12ª Divisão?', 'Força de choque', 'Pesquisa e Desenvolvimento', 'Treinamento Espiritual', 'Reconhecimento', 'alternativaB'),
('Qual capitão é conhecido por ter sido um dos primeiros Kenpachi?', 'Shunsui Kyōraku', 'Mayuri Kurotsuchi', 'Retsu Unohana', 'Ukitake', 'alternativaC'),
('Qual é o nome do jornal oficial da Sociedade das Almas?', 'Soul News', 'Seireitei News', 'Seireitei Communication', 'Karakura Times', 'alternativaC');

SELECT * FROM usuario;
SELECT * FROM resposta;
SELECT * FROM questao;

SELECT * FROM usuario JOIN resposta 
	ON usuario.idUsuario = resposta.pkUsuario 
JOIN questao 
	ON resposta.pkQuestao = questao.idQuestao 
ORDER BY resposta.pkQuestao ASC WHERE resultado.pkUsuario = 1;
