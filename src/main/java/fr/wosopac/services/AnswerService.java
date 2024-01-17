package fr.wosopac.services;

import fr.wosopac.entities.Answer;
import fr.wosopac.entities.AppUser;
import fr.wosopac.entities.Question;
import fr.wosopac.entities.Quizz;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.UUID;

import static jakarta.transaction.Transactional.TxType.REQUIRED;

@ApplicationScoped
@Transactional(REQUIRED)
public class AnswerService {

    public void persistAnswer(Answer answer) {
        answer.persist();
    }

    public Quizz findQuizzById(UUID quizzId) {
        return Quizz.findById(quizzId);
    }

    public AppUser findAppUserById(UUID userId) {
        return AppUser.findById(userId);
    }

    public Question findQuestionById(UUID questionId) {
        return Question.findById(questionId);
    }
}
