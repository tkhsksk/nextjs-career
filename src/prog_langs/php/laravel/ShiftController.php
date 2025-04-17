<?php
	if($requestRegisters && $request->month){
      foreach($requestRegisters as $requestRegister){
          $shifts = Shift::getTotalShifts($requestRegister, substr($request->month, 0, 4), substr($request->month, 5, 2))->get();
          $shift_ids = [];
          foreach($shifts as $shift){
              $shift_ids[] = $shift->id;
          }
          $totals[$requestRegister]['user_id'] = $requestRegister;
          $totals[$requestRegister]['days']    = count($shifts);
          $totals[$requestRegister]['secs']    = Shift::getTotalShiftsTimes($shift_ids);
      }
  }

  $totalCollection = collect($totals);

  if($request->status && $request->status != 0) {
      $totalCollection = $totalCollection->sortByDesc(Shift::SORT[$request->status][1]);
  }