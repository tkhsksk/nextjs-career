package org.spring.boot.form;

// formの定義
public class UserForm {
    public int id;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String name;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}