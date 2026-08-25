# Capstone Project Platform (Backend Platform)

## Student Information
- **Student Name:** Dimantha Kaveen
- **Student Number:** 241722029
- **Slack Handle:** @KaveenDK
- **GCP Project ID:** project-46ec948e-0d3d-4923-927

## Project Description
This repository acts as the super-repository containing the core Spring Cloud microservice platform components for the ECA Campus Management System. It includes the **Eureka Service Registry**, **Config Server**, and **API Gateway**. The platform is designed to be deployed on Google Cloud Platform (GCP) using an Infrastructure as a Service (IaaS) model utilizing Managed Instance Groups (MIGs).

## Technology Stack
- Java 25
- Spring Boot
- Spring Cloud
- PM2 (for process management)

## Setup / Getting Started
To run these platform services locally, you can use the included Maven wrapper in each component's directory:
\\\ash
./mvnw spring-boot:run
\\\
*Note: For production deployment on GCP IaaS, the system utilizes PM2 to manage the Java processes.*
