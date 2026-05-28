import { useEffect } from "react";
import './azure-cloud.css';

export function AzureCloud() {

    const data =
    {
        "course": "Azure Cloud Engineering for .NET Developers",
        "phases": [
            {
                "phase": "PHASE 0 – Cloud Foundation Alignment",
                "duration": "1-2 Weeks",
                "project": {
                    "title": "3-Tier Web Application Deployment",
                    "difficulty": "Medium",
                    "scenario": "Deploy a production-style 3-tier architecture (Frontend, API, Database).",
                    "architecture": [
                        "Frontend: Azure App Service",
                        "Backend: ASP.NET Core API",
                        "Database: Azure SQL",
                        "Load Balancer / App Gateway",
                        "ARM/Bicep"
                    ],
                    "hands_on": [
                        "Create resource groups",
                        "Deploy frontend & backend",
                        "Connect API to SQL",
                        "Use ARM/Bicep",
                        "Estimate cost"
                    ],
                    "real_world_mapping": "Used in enterprise apps like banking and e-commerce",
                    "skills": [
                        "Architecture",
                        "Cost optimization",
                        "Resource design"
                    ]
                },
                "topics": [
                    {
                        "topic": "Cloud Computing Fundamentals",
                        "subtopics": [
                            {
                                "name": "What is Cloud Computing",
                                "description": "Understand the evolution of cloud, benefits like scalability, elasticity, and high availability."
                            },
                            {
                                "name": "IaaS vs PaaS vs SaaS",
                                "description": "Compare service models, responsibilities, and real-world Azure examples."
                            },
                            {
                                "name": "Shared Responsibility Model",
                                "description": "Understand division of security and management responsibilities between Azure and users."
                            }
                        ]
                    },
                    {
                        "topic": "Azure Global Infrastructure",
                        "subtopics": [
                            {
                                "name": "Regions and Availability Zones",
                                "description": "Learn how Azure ensures high availability and disaster recovery."
                            },
                            {
                                "name": "Data Centers",
                                "description": "Understand physical infrastructure and compliance considerations."
                            }
                        ]
                    },
                    {
                        "topic": "Resource Management",
                        "subtopics": [
                            {
                                "name": "Resource Groups",
                                "description": "Logical grouping of resources for lifecycle and access management."
                            },
                            {
                                "name": "Resource Hierarchy",
                                "description": "Management groups, subscriptions, and governance structure."
                            },
                            {
                                "name": "Azure Resource Manager (ARM)",
                                "description": "Understand declarative resource deployment model."
                            }
                        ]
                    },
                    {
                        "topic": "Tools and Interfaces",
                        "subtopics": [
                            {
                                "name": "Azure Portal",
                                "description": "GUI-based resource management."
                            },
                            {
                                "name": "Azure CLI",
                                "description": "Command-line automation and scripting."
                            }
                        ]
                    },
                    {
                        "topic": "Cost Management",
                        "subtopics": [
                            {
                                "name": "Pricing Model",
                                "description": "Understand pay-as-you-go, reserved instances, and cost drivers."
                            },
                            {
                                "name": "Cost Estimation",
                                "description": "Using pricing calculator and budgeting tools."
                            }
                        ]
                    }
                ],
                "hands_on": [
                    "Deploy Azure App Service",
                    "Deploy Azure SQL Database",
                    "Use Azure CLI for resource creation",
                    "Create basic ARM template"
                ]
            },
            {
                "phase": "PHASE 1 – Core Compute for .NET Developers",
                "duration": "3-4 Weeks",
                "project": {
                    "title": "Microservices App on AKS",
                    "difficulty": "Advanced",
                    "scenario": "Build scalable microservices system",
                    "architecture": [
                        "AKS",
                        "Docker",
                        "ACR",
                        "Autoscaling"
                    ],
                    "hands_on": [
                        "Containerize services",
                        "Deploy to AKS",
                        "Configure scaling",
                        "Monitor pods"
                    ],
                    "real_world_mapping": "Used in scalable apps like e-commerce",
                    "skills": [
                        "Kubernetes",
                        "Scaling",
                        "Microservices"
                    ]
                },
                "topics": [
                    {
                        "topic": "Compute & App Hosting",
                        "subtopics": [
                            {
                                "name": "Azure Virtual Machines",
                                "description": "Understand IaaS compute and when to use VMs."
                            },
                            {
                                "name": "Azure App Service",
                                "description": "PaaS hosting for web apps and APIs."
                            },
                            {
                                "name": "Azure Functions",
                                "description": "Serverless compute with event-driven execution."
                            },
                            {
                                "name": "Function Triggers",
                                "subtopics": [
                                    {
                                        "name": "HTTP Trigger",
                                        "description": "Trigger via REST API calls."
                                    },
                                    {
                                        "name": "Timer Trigger",
                                        "description": "Scheduled execution."
                                    },
                                    {
                                        "name": "Queue Trigger",
                                        "description": "Process queue messages."
                                    },
                                    {
                                        "name": "Event Grid Trigger",
                                        "description": "React to events."
                                    },
                                    {
                                        "name": "Blob Trigger",
                                        "description": "Triggered on file uploads."
                                    }
                                ]
                            },
                            {
                                "name": "Containers & Orchestration",
                                "subtopics": [
                                    {
                                        "name": "Azure Container Apps",
                                        "description": "Serverless containers."
                                    },
                                    {
                                        "name": "Azure Kubernetes Service (AKS)",
                                        "description": "Managed Kubernetes orchestration."
                                    }
                                ]
                            },
                            {
                                "name": "Scaling & Deployment",
                                "subtopics": [
                                    {
                                        "name": "Auto Scaling",
                                        "description": "Dynamic scaling based on load."
                                    },
                                    {
                                        "name": "Deployment Slots",
                                        "description": "Blue/green deployments."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "topic": "Azure Storage Deep Dive",
                        "subtopics": [
                            {
                                "name": "Storage Accounts",
                                "description": "Understand account types and redundancy (LRS, GRS, etc.)."
                            },
                            {
                                "name": "Blob Storage",
                                "subtopics": [
                                    {
                                        "name": "Blob Types",
                                        "description": "Block, Append, Page blobs."
                                    },
                                    {
                                        "name": "Access Tiers",
                                        "description": "Hot, Cool, Archive."
                                    },
                                    {
                                        "name": "Lifecycle Management",
                                        "description": "Automate data movement."
                                    }
                                ]
                            },
                            {
                                "name": "File Storage",
                                "description": "Shared file systems using SMB/NFS."
                            },
                            {
                                "name": "Queue Storage",
                                "description": "Message-based communication between services."
                            },
                            {
                                "name": "Table Storage",
                                "description": "NoSQL key-value store with PartitionKey and RowKey."
                            },
                            {
                                "name": "Security",
                                "subtopics": [
                                    {
                                        "name": "SAS Tokens",
                                        "description": "Temporary delegated access."
                                    },
                                    {
                                        "name": "Managed Identity",
                                        "description": "Secure access without secrets."
                                    },
                                    {
                                        "name": "RBAC",
                                        "description": "Role-based authorization."
                                    }
                                ]
                            },
                            {
                                "name": "Data Protection",
                                "subtopics": [
                                    {
                                        "name": "Soft Delete",
                                        "description": "Recover deleted data."
                                    },
                                    {
                                        "name": "Versioning",
                                        "description": "Track and restore blob versions."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "topic": "Azure Data Layer",
                        "subtopics": [
                            {
                                "name": "Azure SQL Database",
                                "description": "Managed relational database service."
                            },
                            {
                                "name": "Entity Framework Core",
                                "description": "ORM integration with Azure SQL."
                            },
                            {
                                "name": "Cosmos DB",
                                "description": "Globally distributed NoSQL database."
                            },
                            {
                                "name": "Partitioning Strategy",
                                "description": "Design scalable data models."
                            },
                            {
                                "name": "Azure Cache for Redis",
                                "description": "In-memory caching for performance."
                            },
                            {
                                "name": "Resiliency Patterns",
                                "description": "Retry policies and fault handling."
                            }
                        ]
                    }
                ],
                "hands_on": [
                    "Deploy ASP.NET Core API",
                    "Convert background job to Azure Function",
                    "Implement triggers",
                    "Deploy containerized app",
                    "Configure autoscaling",
                    "Blob upload/download via SDK",
                    "Queue-based processing",
                    "Managed Identity implementation",
                    "Lifecycle rules setup",
                    "Integrate Azure SQL and Redis"
                ]
            },
            {
                "phase": "PHASE 2 – Identity & Security",
                "duration": "2 Weeks",
                "project": {
                    "title": "Secure Enterprise API",
                    "difficulty": "Medium",
                    "scenario": "Secure APIs using identity and secrets",
                    "architecture": [
                        "Entra ID",
                        "Key Vault",
                        "RBAC"
                    ],
                    "hands_on": [
                        "Enable authentication",
                        "Store secrets",
                        "Apply RBAC"
                    ],
                    "real_world_mapping": "Used in enterprise SaaS apps",
                    "skills": [
                        "Security",
                        "Auth",
                        "RBAC"
                    ]
                },
                "topics": [
                    {
                        "topic": "Identity Management",
                        "subtopics": [
                            {
                                "name": "Microsoft Entra ID",
                                "description": "Azure identity and access management service."
                            },
                            {
                                "name": "OAuth2 & OpenID Connect",
                                "description": "Authentication and authorization protocols."
                            },
                            {
                                "name": "App Registrations",
                                "description": "Registering applications for identity integration."
                            }
                        ]
                    },
                    {
                        "topic": "Access Control",
                        "subtopics": [
                            {
                                "name": "RBAC",
                                "description": "Assign permissions using roles."
                            },
                            {
                                "name": "Managed Identity",
                                "description": "Secure service-to-service authentication."
                            }
                        ]
                    },
                    {
                        "topic": "Secrets & Protection",
                        "subtopics": [
                            {
                                "name": "Azure Key Vault",
                                "description": "Secure storage for secrets and keys."
                            },
                            {
                                "name": "Private Endpoints",
                                "description": "Secure private network access."
                            },
                            {
                                "name": "Web Application Firewall",
                                "description": "Protect apps from common attacks."
                            }
                        ]
                    }
                ]
            },
            {
                "phase": "PHASE 3 – Networking & API Gateway",
                "duration": "2 Weeks",
                "project": {
                    "title": "Hub-Spoke Network",
                    "difficulty": "Advanced",
                    "scenario": "Secure network design",
                    "architecture": [
                        "VNet",
                        "Private Endpoints",
                        "App Gateway"
                    ],
                    "hands_on": [
                        "Create VNets",
                        "Configure endpoints",
                        "Secure traffic"
                    ],
                    "real_world_mapping": "Used in enterprise landing zones",
                    "skills": [
                        "Networking",
                        "Security"
                    ]
                },
                "topics": [
                    {
                        "topic": "Networking Fundamentals",
                        "subtopics": [
                            {
                                "name": "Virtual Networks",
                                "description": "Isolated cloud networks."
                            },
                            {
                                "name": "Private vs Service Endpoints",
                                "description": "Secure service access patterns."
                            },
                            {
                                "name": "DNS in Azure",
                                "description": "Name resolution in cloud."
                            }
                        ]
                    },
                    {
                        "topic": "Traffic Management",
                        "subtopics": [
                            {
                                "name": "Application Gateway",
                                "description": "Layer 7 load balancing."
                            },
                            {
                                "name": "Load Balancer",
                                "description": "Layer 4 traffic distribution."
                            }
                        ]
                    },
                    {
                        "topic": "API Management",
                        "subtopics": [
                            {
                                "name": "Azure API Management",
                                "description": "API gateway and management service."
                            },
                            {
                                "name": "Policies",
                                "subtopics": [
                                    {
                                        "name": "Rate Limiting",
                                        "description": "Control API usage."
                                    },
                                    {
                                        "name": "JWT Validation",
                                        "description": "Secure APIs."
                                    },
                                    {
                                        "name": "Transformation",
                                        "description": "Modify requests/responses."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "phase": "PHASE 4 – Messaging & Event Architecture",
                "duration": "2-3 Weeks",
                "project": {
                    "title": "Order Processing System",
                    "difficulty": "Advanced",
                    "scenario": "Event-driven architecture",
                    "architecture": [
                        "Service Bus",
                        "Event Grid"
                    ],
                    "hands_on": [
                        "Send messages",
                        "Process queue",
                        "Retry logic"
                    ],
                    "real_world_mapping": "Used in e-commerce systems",
                    "skills": [
                        "Event-driven",
                        "Distributed systems"
                    ]
                },
                "topics": [
                    {
                        "topic": "Messaging Services",
                        "subtopics": [
                            {
                                "name": "Azure Service Bus",
                                "description": "Enterprise messaging system."
                            },
                            {
                                "name": "Event Grid",
                                "description": "Event routing service."
                            },
                            {
                                "name": "Event Hub",
                                "description": "Big data streaming platform."
                            }
                        ]
                    },
                    {
                        "topic": "Reliability Patterns",
                        "subtopics": [
                            {
                                "name": "Dead-letter Queues",
                                "description": "Handle failed messages."
                            },
                            {
                                "name": "Retry Patterns",
                                "description": "Exponential backoff strategies."
                            },
                            {
                                "name": "Idempotency",
                                "description": "Ensure safe retries."
                            },
                            {
                                "name": "Saga Pattern",
                                "description": "Distributed transaction management."
                            },
                            {
                                "name": "Outbox Pattern",
                                "description": "Ensure message consistency."
                            }
                        ]
                    }
                ]
            },
            {
                "phase": "PHASE 5 – DevOps & Infrastructure as Code",
                "duration": "3 Weeks",
                "project": {
                    "title": "CI/CD Pipeline",
                    "difficulty": "Advanced",
                    "scenario": "Automate deployment",
                    "architecture": [
                        "GitHub Actions",
                        "Bicep"
                    ],
                    "hands_on": [
                        "Create pipeline",
                        "Deploy app"
                    ],
                    "real_world_mapping": "Standard DevOps practice",
                    "skills": [
                        "CI/CD",
                        "Automation"
                    ]
                },
                "topics": [
                    {
                        "topic": "CI/CD",
                        "subtopics": [
                            {
                                "name": "Azure DevOps Pipelines",
                                "description": "Build and release pipelines."
                            },
                            {
                                "name": "GitHub Actions",
                                "description": "Automated workflows."
                            },
                            {
                                "name": "Deployment Strategies",
                                "description": "Blue/green deployments."
                            }
                        ]
                    },
                    {
                        "topic": "Infrastructure as Code",
                        "subtopics": [
                            {
                                "name": "Bicep",
                                "description": "Declarative resource provisioning."
                            }
                        ]
                    },
                    {
                        "topic": "Configuration Management",
                        "subtopics": [
                            {
                                "name": "Azure App Configuration",
                                "description": "Centralized configuration management."
                            },
                            {
                                "name": "Feature Flags",
                                "description": "Enable/disable features dynamically."
                            }
                        ]
                    }
                ]
            },
            {
                "phase": "PHASE 6 – Monitoring & Observability",
                "duration": "2 Weeks",
                "project": {
                    "title": "Monitoring System",
                    "difficulty": "Medium",
                    "scenario": "Observability system",
                    "architecture": [
                        "App Insights",
                        "Monitor"
                    ],
                    "hands_on": [
                        "Enable logs",
                        "Create alerts"
                    ],
                    "real_world_mapping": "Used in production systems",
                    "skills": [
                        "Monitoring",
                        "Debugging"
                    ]
                },
                "topics": [
                    {
                        "topic": "Monitoring Tools",
                        "subtopics": [
                            {
                                "name": "Application Insights",
                                "description": "Performance monitoring and tracing."
                            },
                            {
                                "name": "Azure Monitor",
                                "description": "Unified monitoring platform."
                            },
                            {
                                "name": "Log Analytics",
                                "description": "Query and analyze logs."
                            }
                        ]
                    },
                    {
                        "topic": "Observability",
                        "subtopics": [
                            {
                                "name": "Distributed Tracing",
                                "description": "Track requests across services."
                            },
                            {
                                "name": "Structured Logging",
                                "description": "Log data in structured format."
                            },
                            {
                                "name": "Custom Telemetry",
                                "description": "Capture business metrics."
                            }
                        ]
                    },
                    {
                        "topic": "Operations",
                        "subtopics": [
                            {
                                "name": "Alerts & Dashboards",
                                "description": "Proactive monitoring."
                            },
                            {
                                "name": "Incident Troubleshooting",
                                "description": "Diagnose and resolve production issues."
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const interviewq = {
        "interview_questions": [
            {
                "phase": "PHASE 0 – Cloud Foundation Alignment",
                "title": "Cloud Fundamentals",
                "questions": [
                    "Explain the difference between IaaS, PaaS, and SaaS with real Azure examples. When would you choose each in a production system?",
                    "How does the Azure Shared Responsibility Model work? Give a real-world scenario involving security responsibility.",
                    "Design a basic 3-tier architecture in Azure for an e-commerce application. What services will you use and why?",
                    "How do Resource Groups and Subscriptions help in organizing and managing costs in large enterprises?",
                    "You are given a budget constraint. How would you estimate and optimize cost before deploying resources in Azure?"
                ]
            },
            {
                "phase": "PHASE 1 – Core Compute for .NET Developers",
                "title": "Compute, Storage & Data",
                "questions": [
                    "What is the difference between Azure App Service, Azure Functions, and Virtual Machines? When would you use each in a real project?",
                    "How would you convert a monolithic .NET application into microservices using Azure Kubernetes Service (AKS)?",
                    "Explain how autoscaling works in Azure. What metrics would you use for scaling a web API?",
                    "Design a system to upload and process large files using Azure Blob Storage and Queue Storage.",
                    "How do you secure access to Azure Storage without using connection strings in code?"
                ]
            },
            {
                "phase": "PHASE 2 – Identity & Security",
                "title": "Authentication & Security",
                "questions": [
                    "How does Microsoft Entra ID (Azure AD) handle authentication and authorization in enterprise apps?",
                    "Explain OAuth2 and OpenID Connect flows. Which one would you use for a web API and why?",
                    "How would you securely store and access secrets in an Azure-based application?",
                    "What is Managed Identity? How does it eliminate the need for credentials in code?",
                    "Design a secure API architecture using Azure services including authentication, authorization, and secret management."
                ]
            },
            {
                "phase": "PHASE 3 – Networking & API Gateway",
                "title": "Networking & API Management",
                "questions": [
                    "Explain the difference between Virtual Network, Subnet, and Network Security Groups in Azure.",
                    "What is the difference between Azure Application Gateway and Load Balancer? When would you use each?",
                    "How do Private Endpoints improve security in Azure?",
                    "Design a secure hub-spoke network architecture for a multi-tier application.",
                    "How would you implement rate limiting and authentication in Azure API Management?"
                ]
            },
            {
                "phase": "PHASE 4 – Messaging & Event Architecture",
                "title": "Event-Driven Systems",
                "questions": [
                    "What is the difference between Azure Service Bus, Event Grid, and Event Hub? Provide real use cases.",
                    "How would you design an order processing system using queues and events in Azure?",
                    "What is a dead-letter queue and how do you handle failed messages in production?",
                    "Explain idempotency in distributed systems with an example.",
                    "How would you implement retry logic and ensure no duplicate processing in a message-driven system?"
                ]
            },
            {
                "phase": "PHASE 5 – DevOps & Infrastructure as Code",
                "title": "CI/CD & Automation",
                "questions": [
                    "Explain how you would design a CI/CD pipeline for deploying a .NET application to Azure.",
                    "What is the difference between ARM templates and Bicep? Why is Bicep preferred?",
                    "How do you implement blue-green or canary deployments in Azure?",
                    "How would you manage environment-specific configurations in a CI/CD pipeline?",
                    "Describe a real-world scenario where Infrastructure as Code improved deployment reliability."
                ]
            },
            {
                "phase": "PHASE 6 – Monitoring & Observability",
                "title": "Monitoring & Diagnostics",
                "questions": [
                    "How does Application Insights help in monitoring a distributed application?",
                    "What is the difference between Azure Monitor and Log Analytics?",
                    "How would you trace a request across multiple microservices in Azure?",
                    "What kind of alerts would you configure for a production system?",
                    "Describe how you would troubleshoot a slow-performing API in Azure."
                ]
            }
        ]
    };

    useEffect(() => {
        buildCom();
    }, []);

    function buildCom() {


        const app = document.getElementById("app");

        data.phases.forEach((phase, phaseindex) => {
            const card = document.createElement("div");
            card.className = "azure-card";

            let topicsHTML = "";

            phase.topics.forEach(t => {
                let subs = "";
                t.subtopics.forEach(s => {
                    subs += `<div class="azure-subtopic">&#9989; ${s.name} ${s.description ? " - " +s.description: ""}</div>`;
                });

                topicsHTML += `
            <div class="azure-topic">
                <div class="azure-topic-title">${t.topic}</div>
                ${subs}
            </div>
            `;
            });

            // Project section
            let projectHTML = "";
            if (phase.project) {
                projectHTML = `
            <div class="azure-project">
                <b>📌 ${phase.project.title}</b><br>
                <i>${phase.project.scenario}</i><br><br>

                <b>🏗 Architecture:</b>
                ${phase.project.architecture.map(a => `<div class="azure-hands">• ${a}</div>`).join("")}

                <b>🧪 Hands-On:</b>
                ${phase.project.hands_on.map(h => `<div class="azure-hands">✔ ${h}</div>`).join("")}

                <b>🌍 Real World:</b>
                <div class="azure-hands">${phase.project.real_world_mapping}</div>

                <b>🎯 Skills:</b>
                ${phase.project.skills.map(s => `<span class="azure-hands">#${s}</span>`).join(" ")}
            </div>
        `;
            }

            const q = interviewq.interview_questions[phaseindex];
            console.log(q.questions);
            let questionsHTML = "";

            q?.questions?.forEach((q, i) => {
                questionsHTML += `
            <div class="azure-question" onclick="toggleAnswer('ans-${phaseindex}-${i}')">
                👉 ${q}
                <div id="ans-${phaseindex}-${i}" class="azure-answer hidden">
                    (Think: explain concept + real-world example + Azure service)
                </div>
            </div>
        `;
            });



            card.innerHTML = `
            <div class="azure-phase">${phase.phase}</div>
            <div class="azure-details">${topicsHTML}</div>
            <div class="azure-details">${projectHTML}</div>
            <div class="azure-questions">${questionsHTML}</div>
            `;

            app.appendChild(card);
        });


    }

    return <div className="azure-cloud">

        <h1 className="azure-title">Azure Cloud Engineering Roadmap</h1>

        <div className="container" id="app"></div>


    </div>
}