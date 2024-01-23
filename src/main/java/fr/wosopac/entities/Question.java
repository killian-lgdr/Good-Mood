package fr.wosopac.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
public class Question extends PanacheEntityBase {
    @Id
    @UuidGenerator
    public UUID id;
    public String title;
    public int type;
}