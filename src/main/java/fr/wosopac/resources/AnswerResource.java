package fr.wosopac.resources;

import fr.wosopac.entities.Answer;
import fr.wosopac.entities.AppUser;
import fr.wosopac.entities.Question;
import fr.wosopac.entities.Quizz;
import fr.wosopac.services.AnswerService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.UriInfo;
import org.jboss.resteasy.reactive.RestResponse;
import jakarta.ws.rs.core.UriBuilder;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Path("/answer")
public class AnswerResource {
    AnswerService answerService;

    public AnswerResource(AnswerService answerService) {
        this.answerService = answerService;
    }

    @POST
    @Transactional
    public RestResponse<Void> createAnswer(@Valid List<Answer> answers, @Context UriInfo uriInfo) {
        LocalDate currentDate = LocalDate.now();
        for (Answer answer : answers) {

            answer.date = currentDate;
            Quizz quizz = answerService.findQuizzById(answer.quizz.id);
            AppUser appUser = answerService.findAppUserById(answer.appUser.id);
            Question question = answerService.findQuestionById(answer.question.id);

            if (quizz == null || question == null) {
                return RestResponse.noContent();
            }

            if (appUser == null) {
                AppUser newAppUser = new AppUser();
                newAppUser.id = answer.appUser.id;
                newAppUser.persist();
                answer.appUser = newAppUser;
            } else {
                answer.appUser = appUser;
            }

            answer.quizz = quizz;
            answer.question = question;

            answerService.persistAnswer(answer);
        }

        UriBuilder builder = uriInfo.getAbsolutePathBuilder().path("answers");
        return RestResponse.created(builder.build());
    }

    @GET
    @Path("/coordinate")
    public RestResponse<List<List<Double>>> getCoordinates() {
        List<List<Double>> coordinates = answerService.calculateCoordinates();
        return RestResponse.ok(coordinates);
    }
    @GET
    @Path("/averageByDay")
    public RestResponse<List<Map<String, Object>>> getAverageByDay() {
        List<Map<String, Object>> averageByDay = answerService.calculateAverageByDay();
        return RestResponse.ok(averageByDay);
    }
    @GET
    @Path("/proposal")
    public RestResponse<List<String>> getProposals() {
        List<String> proposalValues = answerService.getProposalValues();
        return RestResponse.ok(proposalValues);
    }
}
