sudo mysql -u root
use django;
MariaDB [django]> select * from myapp_user;
+----+------+
| id | name |
+----+------+
|  1 | hoge |
+----+------+
1 row in set (0.001 sec)