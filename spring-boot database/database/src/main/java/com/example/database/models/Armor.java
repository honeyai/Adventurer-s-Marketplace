package com.example.database.models;

import org.w3c.dom.Text;

import javax.persistence.*;

@Entity
@Table(name= "Armor")
public class Armor {

  @Id
  @Column
  @GeneratedValue(strategy = GenerationType.IDENTITY)

  private Long id;

  @Column
  private String nameOfItem;

  @Column
  private String AC;

  @Column
  private String price;

  @Column
  private String description;

  public Armor() {}

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getNameOfItem() {
    return nameOfItem;
  }

  public void setNameOfItem(String nameOfItem) {
    this.nameOfItem = nameOfItem;
  }

  public String getAC() {
    return AC;
  }

  public void setAC(String AC) {
    this.AC = AC;
  }

  public String getPrice() {
    return price;
  }

  public void setPrice(String price) {
    this.price = price;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
