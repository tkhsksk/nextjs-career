package org.spring.boot.mapper;

import org.spring.boot.model.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

// Mapperで各種db文を定義する
@Mapper
public interface UserMapper {
    @Select("SELECT * FROM user")
    List<User> findAll();

    @Select("SELECT * FROM user WHERE id = #{id}")
    User findById(int id);

    @Insert("INSERT INTO user(name, created_at, updated_at) VALUES(#{name}, #{createdAt}, #{updatedAt})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(User user);

    @Update("UPDATE user SET name=#{name}, updated_at=#{updatedAt} WHERE id=#{id}")
    void update(User user);

    @Delete("DELETE FROM user WHERE id=#{id}")
    void delete(int id);
}