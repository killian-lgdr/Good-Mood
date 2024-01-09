package fr.wosopac.entities;


import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.*;

import java.util.UUID;

import org.hibernate.annotations.GenericGenerator;


@Entity
public class Answer extends PanacheEntityBase {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator")
    public UUID id;
    public String value;
    @ManyToOne
    public Quizz quizz;
    @ManyToOne
    public Question question;
    @ManyToOne
    public AppUser appUser;
}
