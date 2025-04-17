# フォームのクラスをインポート
from django import forms
# モデルをインポート
from .models import User

# Musicialモデルを利用したMusicialFormを作成
class UserForm(forms.ModelForm):
    class Meta:
        # モデルはUserを使用
        model = User
        # フィールドはすべてを利用
        fields = '__all__'
        ##  みぎでもOK → fields = ["name"]