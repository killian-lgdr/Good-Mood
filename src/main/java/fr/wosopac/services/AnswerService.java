package fr.wosopac.services;

import fr.wosopac.entities.Answer;
import fr.wosopac.entities.AppUser;
import fr.wosopac.entities.Question;
import fr.wosopac.entities.Quizz;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

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

    public static void deleteAnswerById(UUID id) {
        Answer.deleteById(id);
    }
    public Map<LocalDate, Double> calculateAverageByQuestionAndDay(UUID questionId) {
        List<Answer> answers = Answer.find("question.id", questionId).list();

        return answers.stream()
                .collect(Collectors.groupingBy(answer -> answer.date,
                        Collectors.averagingDouble(answer -> Double.parseDouble(answer.value))));
    }
}
