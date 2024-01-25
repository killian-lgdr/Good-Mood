package fr.wosopac.services;

import fr.wosopac.entities.Answer;
import fr.wosopac.entities.AppUser;
import fr.wosopac.entities.Question;
import fr.wosopac.entities.Quizz;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.*;
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

    public List<List<Double>> calculateCoordinates() {
        List<Answer> answers = Answer.find("question.type in (?1, ?2)", 2, 3).list();

        LocalDate currentDate = LocalDate.now();
        answers = answers.stream()
                .filter(answer -> answer.date.equals(currentDate))
                .collect(Collectors.toList());

        Map<UUID, Map<Integer, Double>> averagesByUserAndType = answers.stream()
                .collect(Collectors.groupingBy(answer -> answer.appUser.id,
                        Collectors.groupingBy(answer -> answer.question.type,
                                Collectors.averagingDouble(answer -> Double.parseDouble(answer.value)))));

        // Convertissez les moyennes en listes de coordonnées (x, y)
        return averagesByUserAndType.entrySet().stream()
                .map(entry -> {
                    double x = entry.getValue().getOrDefault(2, 0.0); // Bonne humeur
                    double y = entry.getValue().getOrDefault(3, 0.0); // Stress
                    return Arrays.asList(x, y);
                })
                .collect(Collectors.toList());
    }

    public List<Map<String, Object>> calculateAverageByDay() {
        List<Map<String, Object>> result = new ArrayList<>();


        for (int questionType = 1; questionType <= 3; questionType++) {
            List<Answer> answers = Answer.find("question.type = ?1", questionType).list();

            LocalDate currentDate = LocalDate.now();
            LocalDate twoWeeksAgo = currentDate.minus(2, ChronoUnit.WEEKS);
            answers = answers.stream()
                    .filter(answer -> answer.date.isAfter(twoWeeksAgo))
                    .collect(Collectors.toList());

            Map<LocalDate, Double> averageByDay = answers.stream()
                    .collect(Collectors.groupingBy(answer -> answer.date,
                            Collectors.averagingDouble(answer -> Double.parseDouble(answer.value))));

            List<Double> averages = new ArrayList<>();
            LocalDate current = twoWeeksAgo;
            while (!current.isAfter(currentDate)) {
                averages.add(averageByDay.getOrDefault(current, 0.0));
                current = current.plusDays(1);
            }

            Map<String, Object> typeResult = new HashMap<>();
            typeResult.put("name", getTypeName(questionType));
            typeResult.put("data", averages);
            result.add(typeResult);
        }

        return result;
    }

    public List<String> getProposalValues() {
        List<Answer> answers = Answer.find("question.type = ?1", 4).list();

        return answers.stream()
                .map(answer -> answer.value)
                .collect(Collectors.toList());
    }

    private String getTypeName(int questionType) {
        switch (questionType) {
            case 1:
                return "Stress";
            case 2:
                return "Bonne Humeur";
            case 3:
                return "Energie";
            default:
                return "unknown";
        }
    }
}
