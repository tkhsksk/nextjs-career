# 共通の設定を読み込む
from .settings_common import *

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django',
        'USER': 'guest',
        'PASSWORD': 'DK4XMDVATL2N8448CMF9',
        'HOST': 'localhost',
    }
}
