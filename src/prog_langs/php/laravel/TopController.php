<?php
	protected function cookie(Request $request)
   {
      if($request->type == 'theme'){
         $val          = 'dark';// 初期値
         $theme_cookie = Cookie::get($request->type);

         if($theme_cookie)
            if($theme_cookie == 'dark'){
               $val = 'light';
            } else {
               $val = 'dark';
            }
      }

      if($request->type == 'tab'){
         $val = $request->val;
      }

      Cookie::queue(Cookie::forget($request->type));
      Cookie::queue($request->type, $val, 1440);

      return response()->json($val);
   }