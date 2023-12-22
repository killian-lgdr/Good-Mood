package fr.wosopac.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.UUID;

import jakarta.persistence.OneToOne;
import org.hibernate.annotations.GenericGenerator;


@Entity
public class Answer extends PanacheEntityBase {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator")
    public UUID id;
    public String value;
    @OneToOne
    public Quizz quizz;
    @OneToOne
    public Question question;
    @OneToOne
    public AppUser appUser;
}
