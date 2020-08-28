package com.example.database.repositories;

import com.example.database.models.Weapons;
import org.springframework.data.repository.CrudRepository;

public interface WeaponRepository extends CrudRepository<Weapons, Long> {
}
