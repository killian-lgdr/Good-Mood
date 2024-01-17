package fr.wosopac.services;

import fr.wosopac.entities.Question;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.UriInfo;
import org.jboss.resteasy.reactive.RestResponse;

public class QuestionService {

    @POST
    @Transactional
    public void persistQuestion(@Valid Question question, @Context UriInfo uriInfo){
        Question.persist(question);
    }
}
