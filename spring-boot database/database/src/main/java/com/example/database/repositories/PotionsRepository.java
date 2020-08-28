package com.example.database.repositories;

import com.example.database.models.Potions;
import org.springframework.data.repository.CrudRepository;

public interface PotionsRepository extends CrudRepository<Potions, Long> {
}
