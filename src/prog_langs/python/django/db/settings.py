from .settings_common import *

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

# OPTIONSの部分を追加
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django',
        'USER': 'dev',
        'PASSWORD': 'NMHLJMTS2LWHU28MFBVG',
        'HOST': 'localhost',
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        },
    }
}

CSRF_TRUSTED_ORIGINS = [ "https://django.ksk318.me" ] # 追記
