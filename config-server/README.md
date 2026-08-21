# Config-Server

Centralized external configuration server for the ECA microservices ecosystem. It serves configuration properties to all registered services from a single source, enabling environment-specific settings without redeployment.

## About

This project is part of the Enterprise Cloud Application (ECA) module in the Higher Diploma in Software Engineering (HDSE) program at the Institute of Software Engineering (IJSE). It is intended exclusively for students enrolled in this program.

## Tech Stack

| Technology | Details |
|---|---|
| Java | 25 |
| Spring Boot | 4.0.3 |
| Spring Cloud | 2025.1.0 |
| Spring Cloud Config Server | Native filesystem backend |
| Spring Boot Actuator | Health & management endpoints |

## How It Works

The Config-Server uses a **native filesystem** backend, loading configuration files from the classpath. All microservices bootstrap by importing their configuration from this server before starting up.

### Configuration Layout

```
src/main/resources/configurations/
├── application.yaml          # Shared config for all services (Eureka URL, logging)
├── platform/
│   ├── api-gateway.yaml      # Api-Gateway routes & CORS config
│   └── service-registry.yaml # Eureka server settings
└── services/
    ├── student-service.yaml  # Student-Service datasource (PostgreSQL)
    ├── program-service.yaml  # Program-Service datasource (MongoDB)
    └── enrollment-service.yaml # Enrollment-Service datasource (MySQL)
```

## Service Details

| Property | Value |
|---|---|
| Port | `9000` |
| Artifact ID | `Config-Server` |
| Group ID | `lk.ijse.eca` |

## Getting Started

Follow the lecture guidelines, refer to the lecture video for more information and how to get started correctly.

> **Important:** Config-Server must be started **first** before any other service, as all other services fetch their configuration from this server on startup.

```bash
./mvnw spring-boot:run
```

The server will be available at: `http://localhost:9000`

You can verify a service's configuration is being served correctly by visiting:
```
http://localhost:9000/{service-name}/default
```

## Need Help?

If you encounter any issues, feel free to reach out and start a discussion via the Slack workspace.
