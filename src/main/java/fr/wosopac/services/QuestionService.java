package fr.wosopac.services;

import fr.wosopac.entities.Question;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import jakarta.ws.rs.POST;

import java.util.UUID;

public class QuestionService {

    public static void deleteQuestionById(UUID id) {
        Question.deleteById(id);
    }

    @POST
    @Transactional
    public void persistQuestion(@Valid Question question){
        Question.persist(question);
    }
}
