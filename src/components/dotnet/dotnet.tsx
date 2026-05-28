import { useEffect } from "react";
import './dotnet.css';

export function DotNet() {

  const data = {
    "course": "DotNet Interview Preparation Syllabus",
    "totalRecords": 52,
    "days": [
      {
        "Week": "Week 1",
        "Day": 1,
        "Topic": "Introduction & C# Basics",
        "SubTopics": "CLR, CTS, CLS, Stack vs Heap, Value Types vs Reference Types, Boxing & Unboxing",
        "Description": "Understand .NET ecosystem fundamentals and internal memory concepts.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 1",
        "Day": 2,
        "Topic": "OOPs Concepts",
        "SubTopics": "Encapsulation, Abstraction, Inheritance, Polymorphism, Abstract Class vs Interface",
        "Description": "Master core object-oriented programming concepts used in enterprise applications.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 1",
        "Day": 3,
        "Topic": "Advanced C#",
        "SubTopics": "Extension Methods, Partial Classes, Nullable Types, var vs dynamic, StringBuilder, ref vs out",
        "Description": "Learn advanced C# language features commonly asked in interviews.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 1",
        "Day": 4,
        "Topic": "Exception Handling",
        "SubTopics": "try/catch/finally, Custom Exceptions, Global Exception Handling",
        "Description": "Implement robust exception handling and debugging techniques.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 1",
        "Day": 5,
        "Topic": "Delegates & Events",
        "SubTopics": "Delegates, Multicast Delegates, Action, Func, Predicate, Events",
        "Description": "Understand event-driven programming and callback mechanisms.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 1",
        "Day": 6,
        "Topic": "Collections & Generics",
        "SubTopics": "List, Dictionary, HashSet, Queue, Stack, IEnumerable",
        "Description": "Work with efficient data structures and generic collections.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 1",
        "Day": 7,
        "Topic": "LINQ Deep Dive",
        "SubTopics": "Select, Where, GroupBy, Joins, Deferred Execution",
        "Description": "Write optimized LINQ queries for real-time scenarios.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 2",
        "Day": 8,
        "Topic": "Memory Management",
        "SubTopics": "Garbage Collection, IDisposable, Finalize vs Dispose, Memory Leaks",
        "Description": "Understand .NET memory lifecycle and performance optimization.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 2",
        "Day": 9,
        "Topic": "Async Programming",
        "SubTopics": "Threads, Tasks, async/await, ConfigureAwait, Deadlocks",
        "Description": "Build scalable asynchronous applications.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 2",
        "Day": 10,
        "Topic": "SOLID Principles",
        "SubTopics": "SRP, OCP, LSP, ISP, DIP",
        "Description": "Design maintainable and loosely coupled applications.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 2",
        "Day": 11,
        "Topic": "Dependency Injection",
        "SubTopics": "IOC Container, Service Lifetimes, Constructor Injection",
        "Description": "Implement dependency injection using .NET Core DI.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 2",
        "Day": 12,
        "Topic": "Design Patterns Part 1",
        "SubTopics": "Singleton, Factory, Repository, Unit of Work",
        "Description": "Apply common enterprise design patterns.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 2",
        "Day": 13,
        "Topic": "Design Patterns Part 2",
        "SubTopics": "Strategy Pattern, Mediator Pattern, CQRS",
        "Description": "Handle complex business workflows and scalable architecture.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 3",
        "Day": 14,
        "Topic": "ASP.NET Core Overview",
        "SubTopics": "Middleware Pipeline, Request Lifecycle, Program.cs",
        "Description": "Understand ASP.NET Core architecture and flow.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 3",
        "Day": 15,
        "Topic": "Routing & Controllers",
        "SubTopics": "Attribute Routing, Model Binding, Action Results",
        "Description": "Build structured and maintainable APIs.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 3",
        "Day": 16,
        "Topic": "Web API Fundamentals",
        "SubTopics": "REST Principles, HTTP Methods, Status Codes",
        "Description": "Develop RESTful APIs following best practices.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 3",
        "Day": 17,
        "Topic": "Entity Framework Core",
        "SubTopics": "DbContext, Migrations, CRUD Operations",
        "Description": "Perform database operations using EF Core.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 3",
        "Day": 18,
        "Topic": "EF Core Advanced",
        "SubTopics": "Relationships, Lazy/Eager Loading, Optimization",
        "Description": "Improve database performance and query efficiency.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 3",
        "Day": 19,
        "Topic": "Authentication",
        "SubTopics": "JWT Authentication, Claims, Roles",
        "Description": "Secure APIs using token-based authentication.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 3",
        "Day": 20,
        "Topic": "Authorization",
        "SubTopics": "Role-Based & Policy-Based Authorization",
        "Description": "Control access and permissions effectively.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 4",
        "Day": 21,
        "Topic": "Logging & Monitoring",
        "SubTopics": "ILogger, Serilog, Correlation IDs",
        "Description": "Implement structured logging and monitoring.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 4",
        "Day": 22,
        "Topic": "Configuration Management",
        "SubTopics": "appsettings.json, Environment Variables, Secret Management",
        "Description": "Manage configurations securely across environments.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 4",
        "Day": 23,
        "Topic": "API Versioning",
        "SubTopics": "URL Versioning, Header Versioning",
        "Description": "Maintain backward compatibility in APIs.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 4",
        "Day": 24,
        "Topic": "Caching Concepts",
        "SubTopics": "In-Memory Cache, Distributed Cache, Cache Strategies",
        "Description": "Improve performance using caching mechanisms.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 4",
        "Day": 25,
        "Topic": "Redis Caching",
        "SubTopics": "Redis Basics, Distributed Caching",
        "Description": "Implement scalable distributed caching solutions.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 4",
        "Day": 26,
        "Topic": "RabbitMQ Basics",
        "SubTopics": "Producer/Consumer, Exchange Types, Retry Mechanism",
        "Description": "Build asynchronous message-driven systems.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 5",
        "Day": 27,
        "Topic": "Clean Architecture",
        "SubTopics": "Domain, Application, Infrastructure Layers",
        "Description": "Design scalable enterprise applications.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 5",
        "Day": 28,
        "Topic": "Repository & Unit of Work",
        "SubTopics": "Generic Repository, Best Practices",
        "Description": "Organize data access layers effectively.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 5",
        "Day": 29,
        "Topic": "Microservices Fundamentals",
        "SubTopics": "Monolith vs Microservices, API Gateway",
        "Description": "Understand distributed system architecture.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 5",
        "Day": 30,
        "Topic": "Docker Basics",
        "SubTopics": "Containers, Dockerfile, Docker Compose",
        "Description": "Containerize and deploy APIs.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 5",
        "Day": 31,
        "Topic": "API Gateway & Communication",
        "SubTopics": "Synchronous, Asynchronous, Event-Driven Architecture",
        "Description": "Manage communication between services.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 5",
        "Day": 32,
        "Topic": "Distributed System Challenges",
        "SubTopics": "Scalability, Retry Mechanism, Circuit Breaker",
        "Description": "Handle production-scale distributed systems.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 5",
        "Day": 33,
        "Topic": "System Design Basics",
        "SubTopics": "URL Shortener, E-Commerce Design",
        "Description": "Learn high-level architecture design approaches.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 6",
        "Day": 34,
        "Topic": "Scenario-Based Coding",
        "SubTopics": "Optimize API, Reduce DB Calls",
        "Description": "Solve real-time backend performance problems.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 6",
        "Day": 35,
        "Topic": "Coding Round Practice",
        "SubTopics": "LINQ Problems, API Design Questions",
        "Description": "Practice interview-focused coding problems.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 6",
        "Day": 36,
        "Topic": "SQL for .NET Interviews",
        "SubTopics": "Joins, Indexes, Query Optimization",
        "Description": "Improve database query and SQL skills.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 6",
        "Day": 37,
        "Topic": "Resume Preparation",
        "SubTopics": "ATS Resume, Project Descriptions",
        "Description": "Create strong resumes for recruiter visibility.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 6",
        "Day": 38,
        "Topic": "HR Interview Preparation",
        "SubTopics": "Salary Negotiation, Project Explanation",
        "Description": "Prepare for behavioral and HR discussions.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 7",
        "Day": 39,
        "Topic": "Advanced C# Questions",
        "SubTopics": "Threading, Memory, Performance",
        "Description": "Handle advanced backend interview discussions.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 7",
        "Day": 40,
        "Topic": "Advanced API Scenarios",
        "SubTopics": "Secure APIs, Rate Limiting, Optimization",
        "Description": "Design production-grade APIs.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 7",
        "Day": 41,
        "Topic": "Advanced Microservices",
        "SubTopics": "Saga Pattern, Event Bus, Distributed Transactions",
        "Description": "Understand enterprise microservice patterns.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 7",
        "Day": 42,
        "Topic": "Azure Basics",
        "SubTopics": "App Service, Azure SQL, Deployment",
        "Description": "Deploy applications to Azure cloud.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 7",
        "Day": 43,
        "Topic": "CI/CD Basics",
        "SubTopics": "Git Workflow, GitHub Actions, Pipelines",
        "Description": "Automate builds and deployments.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 7",
        "Day": 44,
        "Topic": "Real Project Discussion",
        "SubTopics": "Architecture Walkthrough, Best Practices",
        "Description": "Understand real-world project implementation.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 7",
        "Day": 45,
        "Topic": "Take-Home Assignment Review",
        "SubTopics": "Code Review, Improvements",
        "Description": "Review coding assignments and optimization techniques.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 8",
        "Day": 46,
        "Topic": "System Design Mock",
        "SubTopics": "API Design, Scalable Architecture, Caching",
        "Description": "Practice system design interviews.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 8",
        "Day": 47,
        "Topic": "Live Coding Round",
        "SubTopics": "Coding Problems, Logic Questions",
        "Description": "Simulate real interview coding rounds.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 8",
        "Day": 48,
        "Topic": "Advanced Scenario Questions",
        "SubTopics": "Debugging, Performance Bottlenecks",
        "Description": "Troubleshoot production-level issues.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 8",
        "Day": 49,
        "Topic": "Real Interview Questions",
        "SubTopics": "TCS, Infosys, Product Companies",
        "Description": "Discuss commonly asked company interview questions.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 8",
        "Day": 50,
        "Topic": "End-to-End Project Discussion",
        "SubTopics": "Authentication, Deployment, Optimization",
        "Description": "Explain complete project architecture confidently.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 8",
        "Day": 51,
        "Topic": "Resume & LinkedIn Optimization",
        "SubTopics": "LinkedIn Branding, Recruiter Visibility",
        "Description": "Enhance professional branding for job search.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      },
      {
        "Week": "Week 8",
        "Day": 52,
        "Topic": "Final Mock Interview",
        "SubTopics": "Technical, System Design, HR",
        "Description": "Final assessment and improvement suggestions.",
        "InterviewQuestions": [
          "Explain the concept in real-time projects.",
          "What are the common interview questions related to this topic?",
          "How would you optimize performance for this feature?",
          "What are the differences between older and latest approaches?",
          "What are the best practices followed in enterprise applications?"
        ],
        "ScenarioQuestions": [
          "You are facing performance issues in production. How would you troubleshoot?",
          "A deployment failed after release. How would you identify the root cause?",
          "How would you design this module for scalability?",
          "A client reports intermittent API failures. How would you debug?",
          "How would you handle security and logging for this implementation?"
        ]
      }
    ]
  };

  useEffect(() => {
    buildCom();
  }, []);

  function buildCom() {


    const app = document.getElementById("app");

    data.days.forEach((phase, phaseindex) => {
      const card = document.createElement("div");
      card.className = "azure-card";

      let subs = "";

      phase.SubTopics.split(",").map(s => {
        subs += `<div class="azure-subtopic">&#9989; ${s} </div>`
      });

      let topicsHTML = `
            <div class="azure-topic">
                <div class="azure-topic-title">${phase.Topic}</div>
                ${subs}                
            </div>
            `;

      let questionsHTML = "";
      let scenarios = "";

      phase.InterviewQuestions.forEach((q, i) => {
        questionsHTML += `
            <div class="azure-question" onclick="toggleAnswer('ans-${phaseindex}-${i}')">
                👉 ${q}
                <div id="ans-${phaseindex}-${i}" class="azure-answer hidden">
                    (Think: explain concept + real-world example + Azure service)
                </div>
            </div>
        `;
      });

      phase.ScenarioQuestions.forEach((q, i) => {
        scenarios += `
            <div class="azure-question" onclick="toggleAnswer('ans-${phaseindex}-${i}')">
                📌 ${q}
                <div id="ans-${phaseindex}-${i}" class="azure-answer hidden">
                    (Think: explain concept + real-world example + Azure service)
                </div>
            </div>
        `;
      });



      card.innerHTML = `
            <div class="azure-phase">🎯 ${phase.Description}</div>
            <div class="azure-details">${topicsHTML}</div>
            <div class="azure-phase">Interview Questions</div>
            <div class="azure-questions">${questionsHTML}</div>
            <div class="azure-phase">Scenario Based Questions</div>
            <div class="azure-questions">${scenarios}</div>
            `;

      app.appendChild(card);
    });


  }

  return <div className="azure-cloud">

    <h1 className="azure-title">.Net Roadmap</h1>

    <div className="container" id="app"></div>


  </div>
}