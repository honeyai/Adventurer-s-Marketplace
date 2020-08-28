package com.example.database.controller;

import com.example.database.models.Weapons;
import com.example.database.services.WeaponsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/weapons")
public class WeaponController {

  @Autowired
  private WeaponsService weaponsService;

  @GetMapping("/list")
  public Iterable<Weapons> listWeapons() {
    return weaponsService.listWeapons();
  }

  @PostMapping("/sell/weapons")
  public Weapons createWeaponItem(@RequestBody Weapons newWeapons) {
    return weaponsService.createWeaponItem(newWeapons);
  }

  @DeleteMapping("/{weaponsId}")
  public HttpStatus deleteWeaponItem(@PathVariable Long weaponsId) {
    return weaponsService.deleteWeaponItem(weaponsId);
  }
}
