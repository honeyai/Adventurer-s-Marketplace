package com.example.database.repositories;

import com.example.database.models.Armor;
import org.springframework.data.repository.CrudRepository;

public interface ArmorRepository  extends CrudRepository<Armor, Long> {
}
