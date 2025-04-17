package org.spring.boot.controller;

import org.springframework.stereotype.Controller;
import org.spring.boot.model.User;
import org.spring.boot.service.UserService;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

import org.spring.boot.form.UserForm;
import org.spring.boot.form.UserSearchForm;

import java.time.LocalDateTime;
import java.util.List;

@Controller

public class UserController {
   private final UserService userService;

   public UserController(UserService userService) {
      this.userService = userService;
   }

   // userの新規登録フォーム
   @RequestMapping(value="/user")
   private String user(Model model) {
      model.addAttribute("userList", userService.findAll()); // 一覧をモデルに受け渡し
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

   @RequestMapping(value = "/user/edit/{id}")
   public String userEdit(Model model, @PathVariable("id") int id) {
      model.addAttribute("userForm", new UserForm());
      model.addAttribute("user", userService.findById(id)); 
      return "user/edit";
   }

   @RequestMapping(value = "/user/update", method=RequestMethod.POST)
   public String userUpdate(@ModelAttribute UserForm userForm, Model model) {
      User user = new User(userForm.id, userForm.name, LocalDateTime.now(), LocalDateTime.now());
      userService.update(user);
      // 新規登録フォームにリダイレクト
      return "redirect:/user";
   }

   // userの検索フォーム
   @RequestMapping(value="/user/search")
   private String userSearch(Model model, @RequestParam(required = false, name="word") String word) {
      model.addAttribute("userSearchList", userService.findSearch(word));
      model.addAttribute("userSearchForm", new UserSearchForm());
      return "user/search";
   }
}