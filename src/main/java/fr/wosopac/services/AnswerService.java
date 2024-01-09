package fr.wosopac.services;

import fr.wosopac.entities.Answer;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;

import java.util.List;

import static jakarta.transaction.Transactional.TxType.REQUIRED;
import static jakarta.transaction.Transactional.TxType.SUPPORTS;

@ApplicationScoped
@Transactional(REQUIRED)
public class AnswerService {
    @Transactional(SUPPORTS)
    public List<Answer> findAllAnswers() {
        return Answer.listAll();
    }

    public Answer persistAnswer(Answer answer) {
        answer.persist();
        return answer;
    }
}
