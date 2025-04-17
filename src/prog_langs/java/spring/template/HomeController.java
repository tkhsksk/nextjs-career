package org.spring.boot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

@Controller
public class HomeController { /*ファイル名と一致させる*/
   @GetMapping("/") /*URLを指定する*/
   private String index(Model model) { /*Modelのモジュールを利用する*/
      model.addAttribute("message", "Hello World !!"); /*messageに文字列を渡す*/
      return "index"; /*templatesのindex.htmlがページファイルとなる*/
   }
}