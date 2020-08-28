package com.example.database.services;

import com.example.database.models.Potions;
import org.springframework.http.HttpStatus;

public interface PotionsService {
  Iterable<Potions> listPotions();
  Potions createPotionsItem(Potions newPotions);
  HttpStatus deletePotionsItem(Long potionsId);
}
