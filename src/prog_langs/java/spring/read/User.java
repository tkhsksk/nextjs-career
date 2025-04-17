package org.spring.boot.model;

import lombok.Data;
import java.time.LocalDateTime;

// lombokのDataを利用してmodelを見やすくする
@Data
public class User {
    private int id;
    private String name;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // 本来はlombokのDataで@Getterが自動的に出力されるはずだが
    // 出力されなかったので自作
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public User(int id, String name, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}