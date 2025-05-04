CREATE DATABASE bleach_info;
USE bleach_info;

CREATE TABLE usuario (
 idUsuario INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100) UNIQUE,
 email VARCHAR(100) UNIQUE,
 senha VARCHAR(100),
 confSenha VARCHAR(100)
)

