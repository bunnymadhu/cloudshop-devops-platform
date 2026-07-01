# Day 2 - Platform Foundation

```mermaid
flowchart TD
    Developer --> GitHub
    GitHub --> Documentation
    Documentation --> ServerInventory
    Documentation --> ADR
    Documentation --> Runbooks

    ServerInventory --> LinuxServer
    LinuxServer --> Git
    LinuxServer --> ShellAliases
    LinuxServer --> EssentialPackages

    EssentialPackages --> FutureDocker
    FutureDocker --> FutureKubernetes
```