package fr.wosopac.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Id;
import org.hibernate.annotations.GenericGenerator;

import java.util.UUID;
import java.util.List;

@Entity
public class Quizz extends PanacheEntityBase {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID",
            type = org.hibernate.id.uuid.UuidGenerator.class)
    public UUID id;
    public String name;
    public int type;
    @OneToMany
    public List<Question> questions;
}