package com.example.database.services;

import com.example.database.models.Armor;
import org.springframework.http.HttpStatus;

public interface ArmorService {
  Iterable<Armor> listArmor();
  Armor createArmorItem(Armor armorItem);
  HttpStatus deleteArmorItem(Long armorId);
}
