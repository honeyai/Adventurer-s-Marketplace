package com.example.database.services;

import com.example.database.models.Weapons;
import com.example.database.repositories.WeaponRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class WeaponsServiceImpl implements WeaponsService {

  @Autowired
  private WeaponRepository weaponRepository;

  @Override
  public Iterable<Weapons> listWeapons() {
    return weaponRepository.findAll();
  }

  @Override
  public Weapons createWeaponItem(Weapons newWeapon) {
    return weaponRepository.save(newWeapon);
  }

  @Override
  public HttpStatus deleteWeaponItem(Long weaponId) {
    weaponRepository.deleteById(weaponId);
    return HttpStatus.OK;
  }
}
