package com.example.database.services;

import com.example.database.models.Armor;
import com.example.database.models.Weapons;
import org.springframework.http.HttpStatus;

public interface WeaponsService {
  Iterable<Weapons> listWeapons();
  Weapons createWeaponItem(Weapons newWeapon);
  HttpStatus deleteWeaponItem(Long weaponId);
}
