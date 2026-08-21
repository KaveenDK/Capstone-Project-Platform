# Api-Gateway

A reactive API Gateway built with Spring Cloud Gateway (WebFlux). It serves as the single entry point for all client requests, routing traffic to the appropriate microservices discovered via the Service-Registry.

## About

This project is part of the Enterprise Cloud Application (ECA) module in the Higher Diploma in Software Engineering (HDSE) program at the Institute of Software Engineering (IJSE). It is intended exclusively for students enrolled in this program.

## Tech Stack

| Technology | Details |
|---|---|
| Java | 25 |
| Spring Boot | 4.0.3 |
| Spring Cloud | 2025.1.0 |
| Spring Cloud Gateway (WebFlux) | Reactive API routing |
| Spring Cloud Netflix Eureka Client | Service discovery |
| Spring Cloud Config Client | Fetches config from Config-Server |
| Spring Boot Actuator | Health & management endpoints |

## Routing Table

All requests go through `http://localhost:7000`. The gateway forwards them to the registered service instances.

| Route ID | Path Prefix | Target Service |
|---|---|---|
| `student-service` | `/api/v1/students/**` | `lb://STUDENT-SERVICE` |
| `program-service` | `/api/v1/programs/**` | `lb://PROGRAM-SERVICE` |
| `enrollment-service` | `/api/v1/enrollments/**` | `lb://ENROLLMENT-SERVICE` |

## Service Details

| Property | Value |
|---|---|
| Port | `7000` |
| Artifact ID | `Api-Gateway` |
| Group ID | `lk.ijse.eca` |
| Config Source | `http://localhost:9000` (Config-Server) |
| Service Registry | `http://localhost:9001/eureka` |

## CORS

Cross-Origin Resource Sharing is configured globally to allow all origins, methods, and headers — suitable for development and the Next.js frontend webapp.

## Getting Started

Follow the lecture guidelines, refer to the lecture video for more information and how to get started correctly.

> **Important:** Config-Server and Service-Registry must be running before starting the Api-Gateway.

**Startup order:**
1. Config-Server (`9000`)
2. Service-Registry (`9001`)
3. **Api-Gateway** (`7000`)
4. Domain services...

```bash
./mvnw spring-boot:run
```

The gateway will be available at: `http://localhost:7000`

## Need Help?

If you encounter any issues, feel free to reach out and start a discussion via the Slack workspace.
