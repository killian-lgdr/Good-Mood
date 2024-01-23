package fr.wosopac.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.UUID;

@Entity
public class AppUser extends PanacheEntityBase {
    @Id
    public UUID id;
}
