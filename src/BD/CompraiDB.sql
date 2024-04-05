CREATE DATABASE comprai;

CREATE TABLE Usuario (
	IdUsuario int IDENTITY(1,1) PRIMARY KEY NOT NULL,
	NomeDeUsuario varchar(255)  NOT NULL,
	Email varchar(50) Not Null,
	Senha varchar(50) not NUll,  	
)


CREATE TABLE ListaDeCompras (
    IdLista int IDENTITY(1,1) PRIMARY KEY NOT NULL,
    NomeDaLista varchar(255) NOT NULL,
    Total decimal(13,2),
    IdUsuario int, 
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario) 
)
Create Table Item(
	IdItem int Identity (1,1) PRIMARY KEY Not Null,
	NomeDoItem varchar(255),
	Preco decimal (13,2),
	Quantidade int,
	IdLista int,
	Foreign Key (IdLista) References ListaDeCompras(IdLista)
)


INSERT INTO Usuario (NomeDeUsuario, Email, Senha)
VALUES ('nome_usuario', 'exemplo@email.com', 123456);

Select * from Usuario