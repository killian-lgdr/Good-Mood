-- Insérer deux utilisateurs
INSERT INTO appuser (id)
VALUES ('e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO appuser (id)
VALUES ('b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');

-- Insérer un quizz
INSERT INTO quizz (id, name, type)
VALUES ('89ef7139-58d9-4a2e-911e-17ae5993acb2', 'Quizz de Bien-être', 4);

-- Insérer deux questions pour le quizz
INSERT INTO question (id, title, type)
VALUES ('106bf881-b05a-4253-bf0a-4245c1cf0baf', 'Votre niveau de stress', 1);
INSERT INTO question (id, title, type)
VALUES ('b4232058-b7fc-4ddd-b92b-0cfca6f9e085', 'Votre niveau de bonne humeur', 2);
INSERT INTO question (id, title, type)
VALUES ('890901e8-be06-49dd-a95c-fec971d01301', 'Votre niveau d énergie', 3);
INSERT INTO question (id, title, type)
VALUES ('d3618fef-93de-45c6-b633-d7388ee6bf71', 'Partagez vos pensées ou commentaires', 4);

-- Associer les questions au quizz
INSERT INTO quizz_question (quizz_id, questions_id)
VALUES ('89ef7139-58d9-4a2e-911e-17ae5993acb2', '106bf881-b05a-4253-bf0a-4245c1cf0baf');
INSERT INTO quizz_question (quizz_id, questions_id)
VALUES ('89ef7139-58d9-4a2e-911e-17ae5993acb2', 'b4232058-b7fc-4ddd-b92b-0cfca6f9e085');
INSERT INTO quizz_question (quizz_id, questions_id)
VALUES ('89ef7139-58d9-4a2e-911e-17ae5993acb2', '890901e8-be06-49dd-a95c-fec971d01301');
INSERT INTO quizz_question (quizz_id, questions_id)
VALUES ('89ef7139-58d9-4a2e-911e-17ae5993acb2', 'd3618fef-93de-45c6-b633-d7388ee6bf71');

-- Insérer les réponses pour le premier utilisateur
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('65de18e1-b6bb-4159-8b9a-82a6b9c05c84', '3', '2024-01-19', '89ef7139-58d9-4a2e-911e-17ae5993acb2', '106bf881-b05a-4253-bf0a-4245c1cf0baf', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('b76ac10e-8b32-40f2-8250-72321ed2bcab', '4', '2024-01-19', '89ef7139-58d9-4a2e-911e-17ae5993acb2', 'b4232058-b7fc-4ddd-b92b-0cfca6f9e085', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('dc0e4b7e-3fbd-854c-1faa-264ad933db9a', '5', '2024-01-19', '89ef7139-58d9-4a2e-911e-17ae5993acb2', '890901e8-be06-49dd-a95c-fec971d01301', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('24b7e3fd-86c2-4c1f-aa26-4ad933db9b9a', 'Bonne journée aujourd qhui!', '2024-01-14', '89ef7139-58d9-4a2e-911e-17ae5993acb2', 'd3618fef-93de-45c6-b633-d7388ee6bf71', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');

INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('c54b3e2a-960b-4f62-8b17-ff36b45dd36d', '2', '2024-01-19', '89ef7139-58d9-4a2e-911e-17ae5993acb2', '106bf881-b05a-4253-bf0a-4245c1cf0baf', 'b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('bf8d4c58-dfa9-4a5e-9ebf-af077a907204', '3', '2024-01-19', '89ef7139-58d9-4a2e-911e-17ae5993acb2', 'b4232058-b7fc-4ddd-b92b-0cfca6f9e085', 'b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('a91f1c6e-7315-477b-8e04-1b4f58c73de9', '4', '2024-01-19', '89ef7139-58d9-4a2e-911e-17ae5993acb2', '890901e8-be06-49dd-a95c-fec971d01301', 'b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('c3ee7e05-3dd9-4053-8f0d-05c78181a6a7', 'Très fatigué aujourd hui.', '2024-01-14', '89ef7139-58d9-4a2e-911e-17ae5993acb2', 'd3618fef-93de-45c6-b633-d7388ee6bf71', 'b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');

INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('7f465b1a-4af1-42de-9b5b-38c9bb855a94', '4', '2024-01-22', '89ef7139-58d9-4a2e-911e-17ae5993acb2',
        '106bf881-b05a-4253-bf0a-4245c1cf0baf', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('72dd9b6a-0e45-4020-9c1b-e5fc2a9b7d0f', '5', '2024-01-22', '89ef7139-58d9-4a2e-911e-17ae5993acb2', 'b4232058-b7fc-4ddd-b92b-0cfca6f9e085', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('647f1da2-808a-40ea-a2aa-e61cfeaa07c4', '3', '2024-01-22', '89ef7139-58d9-4a2e-911e-17ae5993acb2', '890901e8-be06-49dd-a95c-fec971d01301', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('187ae2b4-088f-46cf-94e9-fa9bf662597d', 'Belle journée!', '2024-01-15', '89ef7139-58d9-4a2e-911e-17ae5993acb2', 'd3618fef-93de-45c6-b633-d7388ee6bf71', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');

INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('75be0f56-6c36-4d8d-87f9-7a47fcd9a894', '3', '2024-01-23', '89ef7139-58d9-4a2e-911e-17ae5993acb2', '106bf881-b05a-4253-bf0a-4245c1cf0baf', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('f184f8ab-5518-4a20-bb15-16b9e155a8fc', '4', '2024-01-23', '89ef7139-58d9-4a2e-911e-17ae5993acb2', 'b4232058-b7fc-4ddd-b92b-0cfca6f9e085', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('3729a545-903b-4f9d-a22a-696fd607df5e', '5', '2024-01-23', '89ef7139-58d9-4a2e-911e-17ae5993acb2', '890901e8-be06-49dd-a95c-fec971d01301', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('c4cd4d22-c828-4d98-9299-37c01cc1d52b', 'Très occupé aujourd hui.', '2024-01-23', '89ef7139-58d9-4a2e-911e-17ae5993acb2', 'd3618fef-93de-45c6-b633-d7388ee6bf71', 'e61e16cf-90cb-4e94-aae1-01c9a0f8d005');

INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('13b0e0c0-691b-4022-8005-a2792aa23afb', '3', '2024-01-23', '89ef7139-58d9-4a2e-911e-17ae5993acb2', '106bf881-b05a-4253-bf0a-4245c1cf0baf', 'b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('2ea2f15f-4658-40e7-89e3-37d8437f23e1', '5', '2024-01-23', '89ef7139-58d9-4a2e-911e-17ae5993acb2', 'b4232058-b7fc-4ddd-b92b-0cfca6f9e085', 'b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('932b178e-613c-48b8-a4b2-46e77451c363', '2', '2024-01-23', '89ef7139-58d9-4a2e-911e-17ae5993acb2', '890901e8-be06-49dd-a95c-fec971d01301', 'b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');
INSERT INTO answer (id, value, date, quizz_id, question_id, appuser_id)
VALUES ('cec55480-874b-40de-9498-966c5f3d1dca', 'Complètement malade', '2024-01-23', '89ef7139-58d9-4a2e-911e-17ae5993acb2', 'd3618fef-93de-45c6-b633-d7388ee6bf71', 'b0b3d76b-ec13-4cb5-9e57-6a3c7d5aa77e');
