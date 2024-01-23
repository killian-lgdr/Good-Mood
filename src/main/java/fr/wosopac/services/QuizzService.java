package fr.wosopac.services;

import fr.wosopac.entities.Question;
import fr.wosopac.entities.Quizz;
import fr.wosopac.entities.Answer;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;


import java.util.List;
import java.util.UUID;

import static jakarta.transaction.Transactional.TxType.REQUIRED;
import static jakarta.transaction.Transactional.TxType.SUPPORTS;

@ApplicationScoped
@Transactional(REQUIRED)
public class QuizzService {
    @Transactional(SUPPORTS)
    public List<Quizz> findAllQuizz() {
        return Quizz.listAll();
    }

    @Transactional(SUPPORTS)
    public Quizz findQuizzById(UUID id) {
        return Quizz.findById(id);
    }

    public void persistQuizz(@Valid Quizz quizz) {
        QuestionService questionService = new QuestionService();
        for (Question question : quizz.questions) {
            questionService.persistQuestion(question);
        }
        Quizz.persist(quizz);
    }

    public void deleteQuizzById(UUID id) {
        Quizz quizz = findQuizzById(id);
        List<Answer> answers = Answer.list("quizz.id", quizz.id);

        for (Answer answer : answers) {
            AnswerService.deleteAnswerById(answer.id);
        }

        for (Question question : quizz.questions) {
            QuestionService.deleteQuestionById(question.id);
        }

        Quizz.deleteById(id);
    }
}
