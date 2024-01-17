package fr.wosopac.services;

import fr.wosopac.entities.Question;
import fr.wosopac.entities.Quizz;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.UriInfo;

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

    public void persistQuizz(@Valid Quizz quizz, @Context UriInfo uriInfo){
        QuestionService questionService = new QuestionService();
        for (Question question : quizz.questions) {
            questionService.persistQuestion(question, uriInfo);
        }
        Quizz.persist(quizz);
    }
}
