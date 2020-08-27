package com.example.database.controller;

import com.example.database.models.Armor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/armor")
public class ArmorController {

  //@ Autowired
  //ArmorService armorService;

  @GetMapping("/all")
  public Iterable<Armor> findAll() {
    return null;
  }
}
