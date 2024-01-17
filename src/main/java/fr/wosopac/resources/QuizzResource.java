package fr.wosopac.resources;

import fr.wosopac.entities.Answer;
import fr.wosopac.entities.Quizz;
import fr.wosopac.services.QuizzService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.UriBuilder;
import jakarta.ws.rs.core.UriInfo;
import org.jboss.resteasy.reactive.RestPath;
import org.jboss.resteasy.reactive.RestResponse;

import java.util.List;
import java.util.UUID;

@Path("/quizz")
public class QuizzResource {
    QuizzService quizzService;

    public QuizzResource(QuizzService quizzService) {
        this.quizzService = quizzService;
    }

    @GET
    public RestResponse<List<Quizz>> getAllQuizz() {
        List<Quizz> quizz = quizzService.findAllQuizz();
        return RestResponse.ok(quizz);
    }

    @GET
    @Path("/{id}")
    public RestResponse<Quizz> getQuizz(@RestPath UUID id) {
        Quizz quizz = quizzService.findQuizzById(id);
        if (quizz != null) {
            return RestResponse.ok(quizz);
        } else {
            return RestResponse.noContent();
        }
    }

    @POST
    @Transactional
    public RestResponse<Void> createQuizz(@Valid Quizz quizz, @Context UriInfo uriInfo){
        quizzService.persistQuizz(quizz, uriInfo);
        UriBuilder builder = uriInfo.getAbsolutePathBuilder().path("quizz");
        return RestResponse.created(builder.build());
    }
}
