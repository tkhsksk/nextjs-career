sudo yum install java-21-amazon-corretto -y
java -version

# openjdk version "21.0.4" 2024-07-16 LTS
# OpenJDK Runtime Environment Corretto-21.0.4.7.1 (build 21.0.4+7-LTS)
# OpenJDK 64-Bit Server VM Corretto-21.0.4.7.1 (build 21.0.4+7-LTS, mixed mode, sharing)

# javaを管理するためのmavenをインストール
# phpでいうcomposer,node.jsでいうnpm

sudo dnf -y install maven
mvn --version

# Apache Maven 3.8.4 (Red Hat 3.8.4-3.amzn2023.0.5)
# Maven home: /usr/share/maven
# Java version: 17.0.12, vendor: Amazon.com Inc., runtime: /usr/lib/jvm/java-17-amazon-corretto.x86_64
# Default locale: en, platform encoding: UTF-8
# OS name: "linux", version: "6.1.102-111.182.amzn2023.x86_64", arch: "amd64", family: "unix"

# 対話式でspring bootのインストール
cd <ドメインルート>
mvn archetype:generate
Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains): 2187: spring-boot
Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains): :  68
Choose a number: 164: 164
Define value for property 'groupId': org.spring.boot
Define value for property 'artifactId': mvn-spring
Define value for property 'version' 1.0-SNAPSHOT: 
Define value for property 'package' org.spring.boot: 

# spring bootのパッケージ化
cd mvn-spring/
mvn package

# パッケージの実行
mvn spring-boot:run