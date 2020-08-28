package com.example.database.controller;

import com.example.database.models.Potions;
import com.example.database.services.PotionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("/potions")
public class PotionController {
  @Autowired
  private PotionsService potionsService;

  @GetMapping("/list")
  public Iterable<Potions> listPotions() {
    return potionsService.listPotions();
  }

  @PostMapping("/sellPotions")
  public Potions createPotionsItem(@RequestBody Potions newPotions) {
    return potionsService.createPotionsItem(newPotions);
  }

  @DeleteMapping("/{potionsId}")
  public HttpStatus deletePotionsItem(@PathVariable Long potionsId) {
    return potionsService.deletePotionsItem(potionsId);
  }
}
