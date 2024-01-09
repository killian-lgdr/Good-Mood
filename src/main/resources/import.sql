-- Insérer deux utilisateurs
INSERT INTO appuser (id) VALUES ('e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO appuser (id) VALUES ('b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');

-- Insérer un quizz
INSERT INTO quizz (id, name, type) VALUES ('7492b4a3-2e8c-46e7-bda6-6d616d258745', 'Mon Quizz', 1);

-- Insérer deux questions pour le quizz
INSERT INTO question (id, title, type) VALUES ('8e1b9a0d-8e86-4594-86f5-3ef420dc40f4', 'Question 1', 1);
INSERT INTO question (id, title, type) VALUES ('b04981a4-4c9a-4e69-8639-1938b2c5c10c', 'Question 2', 1);

-- Associer les questions au quizz
INSERT INTO quizz_question (quizz_id, questions_id) VALUES ('7492b4a3-2e8c-46e7-bda6-6d616d258745', '8e1b9a0d-8e86-4594-86f5-3ef420dc40f4');
INSERT INTO quizz_question (quizz_id, questions_id) VALUES ('7492b4a3-2e8c-46e7-bda6-6d616d258745', 'b04981a4-4c9a-4e69-8639-1938b2c5c10c');

-- Insérer les réponses pour le premier utilisateur
INSERT INTO answer (id, value, quizz_id, question_id, appuser_id) VALUES ('98e5c81d-4a34-41f0-ba63-2a607e36e67b', 'Réponse 1 Utilisateur 1', '7492b4a3-2e8c-46e7-bda6-6d616d258745', '8e1b9a0d-8e86-4594-86f5-3ef420dc40f4', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO answer (id, value, quizz_id, question_id, appuser_id) VALUES ('1f3d3e89-1636-4e1b-8715-8c14b573c24f', 'Réponse 2 Utilisateur 1', '7492b4a3-2e8c-46e7-bda6-6d616d258745', '8e1b9a0d-8e86-4594-86f5-3ef420dc40f4', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO answer (id, value, quizz_id, question_id, appuser_id) VALUES ('458cbb1d-76d6-4e6e-9cf3-8e72b432ee3e', 'Réponse 1 Utilisateur 1', '7492b4a3-2e8c-46e7-bda6-6d616d258745', 'b04981a4-4c9a-4e69-8639-1938b2c5c10c', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO answer (id, value, quizz_id, question_id, appuser_id) VALUES ('bbc9c5c4-23ef-4e50-96e6-0af671a7bc67', 'Réponse 2 Utilisateur 1', '7492b4a3-2e8c-46e7-bda6-6d616d258745', 'b04981a4-4c9a-4e69-8639-1938b2c5c10c', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');

-- Insérer les réponses pour le deuxième utilisateur
INSERT INTO answer (id, value, quizz_id, question_id, appuser_id) VALUES ('5e80efeb-ecdf-4c48-bf27-c019f12b5a38', 'Réponse 1 Utilisateur 2', '7492b4a3-2e8c-46e7-bda6-6d616d258745', '8e1b9a0d-8e86-4594-86f5-3ef420dc40f4', 'b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');
INSERT INTO answer (id, value, quizz_id, question_id, appuser_id) VALUES ('2b9c54e5-2850-4eae-b434-908fbd1bfe8a', 'Réponse 2 Utilisateur 2', '7492b4a3-2e8c-46e7-bda6-6d616d258745', '8e1b9a0d-8e86-4594-86f5-3ef420dc40f4', 'b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');
INSERT INTO answer (id, value, quizz_id, question_id, appuser_id) VALUES ('a8a4d79b-8404-46cd-bca6-6a6cd2e8c122', 'Réponse 1 Utilisateur 2', '7492b4a3-2e8c-46e7-bda6-6d616d258745', 'b04981a4-4c9a-4e69-8639-1938b2c5c10c', 'b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');
INSERT INTO answer (id, value, quizz_id, question_id, appuser_id) VALUES ('0e4b7e3f-bd85-4c1f-aa26-4ad933db9b9a', 'Réponse 2 Utilisateur 2', '7492b4a3-2e8c-46e7-bda6-6d616d258745', 'b04981a4-4c9a-4e69-8639-1938b2c5c10c', 'b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');
