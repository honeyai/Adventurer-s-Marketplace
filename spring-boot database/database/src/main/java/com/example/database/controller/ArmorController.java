package com.example.database.controller;

import com.example.database.models.Armor;
import com.example.database.services.ArmorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/armor")
public class ArmorController {

  @Autowired
  private ArmorService armorService;

  @GetMapping("/list")
  public Iterable<Armor> listArmor() {
    return armorService.listArmor();
  }

  @PostMapping("/sellArmor")
  public Armor createArmorItem(@RequestBody Armor newArmor) {
    return armorService.createArmorItem(newArmor);
  }

  @DeleteMapping("/{armorId}")
  public HttpStatus deleteArmorItem(@PathVariable Long armorId) {
    return armorService.deleteArmorItem(armorId);
  }
}
