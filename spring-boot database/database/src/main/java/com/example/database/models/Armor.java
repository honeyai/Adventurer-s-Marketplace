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
  private String Price;

  @Column
  private Text Description;

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
    return Price;
  }

  public void setPrice(String price) {
    Price = price;
  }

  public Text getDescription() {
    return Description;
  }

  public void setDescription(Text description) {
    Description = description;
  }
}
