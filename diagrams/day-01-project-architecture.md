# Day 1 - CloudShop High-Level Architecture

```mermaid
flowchart TD

Developer --> GitHub

GitHub --> GitHubActions

GitHubActions --> Jenkins

Jenkins --> Docker

Docker --> Kubernetes

Kubernetes --> Frontend

Kubernetes --> Backend

Backend --> MySQL

Backend --> Redis

Kubernetes --> Prometheus

Prometheus --> Grafana

Kubernetes --> Loki

Loki --> Grafana

Grafana --> AlertManager

AlertManager --> Email

AlertManager --> Slack
```