-- Promotion
INSERT INTO Promotion (Nom, Annee) VALUES
('Promotion 2023', 2023),
('Promotion 2024', 2024);

-- Classe
INSERT INTO Classe (Nom, Id_Promotion) VALUES
('Classe A', 1),
('Classe B', 2);

-- Utilisateur
INSERT INTO Utilisateur (Mdp, Nom, Prenom, Email, Role, Id_Classe) VALUES
('password123', 'Doe', 'John', 'john.doe@example.com', 'admin', NULL),
('password456', 'Smith', 'Jane', 'jane.smith@example.com', 'etudiant', 1);

-- Questionnaire
INSERT INTO Questionnaire (Titre, Description, Duree) VALUES
('Math Quiz', 'Quiz sur les mathématiques de base', 1800),
('Science Quiz', 'Quiz sur les sciences générales', 3600);

-- Question
INSERT INTO Question (TypeQuestion, Contenu, Bareme, Penalite, Feedback, Id_Questionnaire) VALUES
('qcm', 'Quelle est la capitale de la France ?', 1.0, 0.25, 'La réponse est Paris.', 1),
('qcu', 'Combien font 2 + 2 ?', 1.0, 0.0, 'La réponse est 4.', 1);

-- ChoixQuestion
INSERT INTO ChoixQuestion (Contenu, EstCorrecte, Id_Question) VALUES
('Paris', TRUE, 1),
('Londres', FALSE, 1),
('4', TRUE, 2),
('5', FALSE, 2);

-- SessionQuestionnaire
INSERT INTO SessionQuestionnaire (Date, Duree, Statut, Id_Administrateur) VALUES
('2023-10-01 10:00:00', 1800, 'en cours', 1),
('2023-10-02 14:00:00', 3600, 'terminé', 1);

-- SelectionQuestionnaire
INSERT INTO SelectionQuestionnaire (Id_SessionQuestionnaire, Id_Questionnaire) VALUES
(1, 1),
(2, 2);

-- SessionEtudiant
INSERT INTO SessionEtudiant (PerteFocus, Id_SessionQuestionnaire, Id_Etudiant) VALUES
(2, 1, 2),
(0, 2, 2);

-- ReponseEtudiant
INSERT INTO ReponseEtudiant (ReponseLibre, Id_SessionEtudiant) VALUES
('Paris', 1),
('4', 2);

-- SelectionEtudiant
INSERT INTO SelectionEtudiant (Id_ChoixQuestion, Id_ReponseEtudiant) VALUES
(1, 1),
(3, 2);