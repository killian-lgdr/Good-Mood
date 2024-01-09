package fr.wosopac.resources;

import fr.wosopac.entities.Answer;
import fr.wosopac.services.AnswerService;
import jakarta.validation.Valid;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.UriInfo;
import org.jboss.resteasy.reactive.RestResponse;
import jakarta.ws.rs.core.UriBuilder;

import java.util.List;

@Path("/answer")
public class AnswerResource {
    AnswerService answerService;

    public AnswerResource(AnswerService answerService) {
        this.answerService = answerService;
    }

    @GET
    public RestResponse<List<Answer>> getAllAnswer() {
        List<Answer> answers = answerService.findAllAnswers();
        return RestResponse.ok(answers);
    }

    @POST
    public RestResponse<Void> createIngredient(@Valid List<Answer> answers, @Context UriInfo uriInfo) {
        Answer lastAddedAnswer = new Answer();
        for (Answer answer : answers) {
            lastAddedAnswer = answerService.persistAnswer(answer);
        }
        UriBuilder builder = uriInfo.getAbsolutePathBuilder().path(lastAddedAnswer.id.getClass());
        return RestResponse.created(builder.build());
    }
}
