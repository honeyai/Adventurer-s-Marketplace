package com.example.database.services;

import com.example.database.models.Potions;
import com.example.database.repositories.PotionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class PotionsServiceImpl implements PotionsService{

  @Autowired
  private PotionsRepository potionsRepository;

  @Override
  public Iterable<Potions> listPotions() {
    return potionsRepository.findAll();
  }

  @Override
  public Potions createPotionsItem(Potions newPotions) {
    return potionsRepository.save(newPotions);
  }

  @Override
  public HttpStatus deletePotionsItem(Long potionsId) {
    potionsRepository.deleteById(potionsId);
    return HttpStatus.OK;
  }
}
