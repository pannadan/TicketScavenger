plugins {
    id("java")
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(platform("org.junit:junit-bom:5.9.1"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    implementation 'com.hedera.hashgraph:sdk:2.19.0'
    implementation 'io.grpc:grpc-netty-shaded:1.46.0'
    implementation 'io.github.cdimascio:dotenv-java:2.3.2'
    implementation 'org.slf4j:slf4j-nop:2.0.3'
    implementation 'com.google.code.gson:gson:2.8.8'
}

tasks.test {
    useJUnitPlatform()
}