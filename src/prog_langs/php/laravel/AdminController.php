<?php
	public function add(Request $request)
    {
        $user = new User();

        $request->validate([
            'name'     => ['required','max:50'],
            'email'    => ['required','unique:users,email',new RuleEmail],// emailは必須且つユニークであること
        ]);

        $user = $user->create([
            'name'       => $request->name,
            'email'      => $request->email,
            'password'   => Str::password(12),
            'created_at' => now(),
        ]);

        // とりあえずadmin
        Admin::updateOrCreate(
            ['id'      => $user->id],
            ['user_id' => $user->id]
        );

        // 会員登録完了のメール;
        $mail = new EntryMail($request);
        $recipients = Admin::query()
                        ->where('status','E')
                        ->where('role','M')
                        ->get();

        $cc = [];
        foreach($recipients as $recipient)
        {
           $cc[] = $recipient->user->email;
        }

        // 本人に送信、マスター権限にcc
        Mail::to($request['email'])->cc($cc)->send($mail);

        return redirect('/admin')->with('flash.success','新規ユーザーを追加しました');
    }