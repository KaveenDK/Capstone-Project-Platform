module.exports = {
  apps: [
    {
      name: "config-server",
      script: "java.exe",
      args: "-jar config-server/target/Config-Server-1.0.0.jar",
      log_file: "./logs/config-server.log",
      env: { SPRING_PROFILES_ACTIVE: 'native' }
    },
    {
      name: "service-registry",
      script: "java.exe",
      args: "-jar service-registry/target/Service-Registry-1.0.0.jar",
      log_file: "./logs/service-registry.log",
      env: { SPRING_PROFILES_ACTIVE: 'dev', SPRING_CLOUD_CONFIG_URI: 'http://localhost:9000' }
    },
    {
      name: "api-gateway",
      script: "java.exe",
      args: "-jar api-gateway/target/Api-Gateway-1.0.0.jar",
      log_file: "./logs/api-gateway.log",
      env: { SPRING_PROFILES_ACTIVE: 'dev', SPRING_CLOUD_CONFIG_URI: 'http://localhost:9000' }
    }
  ]
}
