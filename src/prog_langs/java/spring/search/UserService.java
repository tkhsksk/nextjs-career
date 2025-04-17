package org.spring.boot.service;

import org.spring.boot.mapper.UserMapper;
import org.spring.boot.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

// Mapperをserviceとして利用する
@Service
public class UserService {
    private final UserMapper userMapper;

    public UserService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public List<User> findAll() {
        return userMapper.findAll();
    }

    public User findById(int id) {
        return userMapper.findById(id);
    }

    public void insert(User user) {
        userMapper.insert(user);
    }

    public void update(User user) {
        userMapper.update(user);
    }

    public void delete(int id) {
        userMapper.delete(id);
    }

    public List<User> findSearch(String string) {
        return userMapper.findSearch(string);
    }
}