package com.example.database.services;

import com.example.database.models.Armor;
import com.example.database.repositories.ArmorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class ArmorServiceImpl implements ArmorService{

  @Autowired
  private ArmorRepository armorRepository;

  @Override
  public Iterable<Armor> listArmor() {
    return armorRepository.findAll();
  }

  @Override
  public Armor createArmorItem(Armor armorItem) {
    return null;
  }

  @Override
  public HttpStatus deleteArmorItem(Long armorId) {
    return null;
  }
}
