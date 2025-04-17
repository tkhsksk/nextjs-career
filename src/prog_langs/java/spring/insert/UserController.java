package org.spring.boot.controller;

import org.springframework.stereotype.Controller;
import org.spring.boot.model.User;
import org.spring.boot.service.UserService;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

import org.spring.boot.form.UserForm;

import java.time.LocalDateTime;
import java.util.List;

@Controller

public class UserController {
   private final UserService userService;

   public UserController(UserService userService) {
      this.userService = userService;
   }

   // userの新規登録フォーム
   @RequestMapping("/user")
   private String user(Model model) {
      model.addAttribute("userForm", new UserForm());
      return "user/index";
   }

   // userの登録
   @RequestMapping(value="/user/new", method=RequestMethod.POST)
   private String userNew(@ModelAttribute UserForm userForm, Model model) {
      User user = new User(0, userForm.name, LocalDateTime.now(), LocalDateTime.now());
      userService.insert(user);
      // 新規登録フォームにリダイレクト
      return "redirect:/user";
   }
}