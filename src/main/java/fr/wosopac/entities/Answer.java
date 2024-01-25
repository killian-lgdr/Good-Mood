package fr.wosopac.entities;


import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.UUID;

import org.hibernate.annotations.UuidGenerator;

@Entity
public class Answer extends PanacheEntityBase {
    @Id
    @UuidGenerator
    public UUID id;
    public String value;
    public LocalDate date;
    @ManyToOne
    public Quizz quizz;
    @ManyToOne
    public Question question;
    @ManyToOne
    public AppUser appUser;
}
