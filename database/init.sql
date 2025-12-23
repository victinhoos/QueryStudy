-- 1. Tabela de Tecnologias (SGBD)
CREATE TABLE Banco (
    pk_IDbanco INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL, 
    tipo VARCHAR(20),                    
);

-- 2. Tabela de Comandos (Blocos soltos)
CREATE TABLE Comandos (
    pk_IDcomando INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL  
);

-- 3. Tabela de Questões (Queries)
CREATE TABLE Query (
    pk_IDquery INT PRIMARY KEY AUTO_INCREMENT,
    fk_IDbanco INT,
    enunciado TEXT NOT NULL,   
    FOREIGN KEY (fk_IDbanco) REFERENCES Banco(pk_IDbanco)
);

-- 4. Tabela Associativa (Gabarito com Ordem)
CREATE TABLE Gabarito (
    fk_IDquery INT,
    fk_IDcomando INT,
    ordem INT NOT NULL,       
    PRIMARY KEY (fk_IDquery, ordem), 
    FOREIGN KEY (fk_IDquery) REFERENCES Query(pk_IDquery),
    FOREIGN KEY (fk_IDcomando) REFERENCES Comandos(pk_IDcomando)
);

-- 5. Tabela de Histórico (Log)
CREATE TABLE Historico (
    ipk_IDhistorico INT PRIMARY KEY AUTO_INCREMENT,
    fk_IDquery INT,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    verificidade BOOLEAN,      
    FOREIGN KEY (fk_IDquery) REFERENCES Query(pk_IDquery)
);