package com.example.database.models;

import org.w3c.dom.Text;

import javax.persistence.*;

@Entity
@Table(name = "weapons")
public class Weapons {

  @Id
  @Column
  @GeneratedValue(strategy = GenerationType.IDENTITY)

  private Long id;

  @Column
  private String nameOfItem;

  @Column
  private String type;

  @Column
  private String price;

  @Column
  private String description;

  public Weapons() {
  }

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

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
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
