package org.spring.boot.controller;

@Controller

public class UserController {
   // userの新規登録フォーム
   @RequestMapping(value="/user")
   private String user(Model model) {
      model.addAttribute("userList", userService.findAll()); // 一覧をモデルに受け渡し
      model.addAttribute("userForm", new UserForm());
      return "user/index";
   }
}