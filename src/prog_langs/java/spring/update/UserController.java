package org.spring.boot.controller;

import org.springframework.stereotype.Controller;
import org.spring.boot.model.User;
import org.spring.boot.service.UserService;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

import org.spring.boot.form.UserForm;

import java.time.LocalDateTime;
import java.util.List;

@Controller

public class UserController {
   private final UserService userService;

   public UserController(UserService userService) {
      this.userService = userService;
   }

   // ユーザーの詳細と更新フォームが登録されているページ
   @RequestMapping(value = "/user/edit/{id}")
   public String userEdit(Model model, @PathVariable("id") int id) {
      model.addAttribute("userForm", new UserForm());
      model.addAttribute("user", userService.findById(id)); 
      return "user/edit";
   }

   // 実際に更新が行われるページ
   @RequestMapping(value = "/user/update", method=RequestMethod.POST)
   public String userUpdate(@ModelAttribute UserForm userForm, Model model) {
      User user = new User(userForm.id, userForm.name, LocalDateTime.now(), LocalDateTime.now());
      userService.update(user);
      // 新規登録フォームにリダイレクト
      return "redirect:/user";
   }
}