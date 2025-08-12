CREATE TABLE Promotion (
    Id_Promotion SERIAL PRIMARY KEY,
    Nom VARCHAR(100) NOT NULL,
    Annee INT NOT NULL
);

CREATE TABLE Classe (
    Id_Classe SERIAL PRIMARY KEY,
    Nom VARCHAR(100) NOT NULL,
    Id_Promotion INT REFERENCES Promotion(Id_Promotion)
);

CREATE TABLE Utilisateur (
    Id_Utilisateur SERIAL PRIMARY KEY,
    Mdp VARCHAR(255) NOT NULL,
    Nom VARCHAR(100) NOT NULL,
    Prenom VARCHAR(100) NOT NULL,
    Email VARCHAR(150),
    Role VARCHAR(20) NOT NULL, -- 'admin' ou 'etudiant'
    Id_Classe INT REFERENCES Classe(Id_Classe)
);

CREATE TABLE Questionnaire (
    Id_Questionnaire SERIAL PRIMARY KEY,
    Titre VARCHAR(200) NOT NULL,
    Description TEXT,
    Duree INT -- en secondes
);

CREATE TABLE Question (
    Id_Question SERIAL PRIMARY KEY,
    TypeQuestion VARCHAR(20) NOT NULL, -- qcm / qcu / ouverte
    Contenu TEXT NOT NULL,
    Bareme FLOAT NOT NULL,
    Penalite FLOAT NOT NULL,
    Feedback TEXT,
    Id_Questionnaire INT REFERENCES Questionnaire(Id_Questionnaire)
);

CREATE TABLE ChoixQuestion (
    Id_ChoixQuestion SERIAL PRIMARY KEY,
    Contenu TEXT NOT NULL,
    EstCorrecte BOOLEAN NOT NULL,
    Id_Question INT REFERENCES Question(Id_Question)
);

CREATE TABLE SessionQuestionnaire (
    Id_SessionQuestionnaire SERIAL PRIMARY KEY,
    Date TIMESTAMP NOT NULL,
    Duree INT,
    Statut VARCHAR(20) NOT NULL,
    Id_Administrateur INT REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE SelectionQuestionnaire (
    Id_SessionQuestionnaire INT REFERENCES SessionQuestionnaire(Id_SessionQuestionnaire),
    Id_Questionnaire INT REFERENCES Questionnaire(Id_Questionnaire),
    PRIMARY KEY (Id_SessionQuestionnaire, Id_Questionnaire)
);

CREATE TABLE SessionEtudiant (
    Id_SessionEtudiant SERIAL PRIMARY KEY,
    PerteFocus INT,
    Id_SessionQuestionnaire INT REFERENCES SessionQuestionnaire(Id_SessionQuestionnaire),
    Id_Etudiant INT REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE ReponseEtudiant (
    Id_ReponseEtudiant SERIAL PRIMARY KEY,
    ReponseLibre TEXT,
    Id_SessionEtudiant INT REFERENCES SessionEtudiant(Id_SessionEtudiant)
);

CREATE TABLE SelectionEtudiant (
    Id_ChoixQuestion INT REFERENCES ChoixQuestion(Id_ChoixQuestion),
    Id_ReponseEtudiant INT REFERENCES ReponseEtudiant(Id_ReponseEtudiant),
    PRIMARY KEY (Id_ChoixQuestion, Id_ReponseEtudiant)
);
