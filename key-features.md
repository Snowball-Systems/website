---
layout: page
title: Key Features
---

<div class="container">

# Clarion: Key Features

This document outlines the core features of the Clarion platform.

### 1. Unified Knowledge Graph & Digital Twin
Clarion automatically ingests and processes a wide variety of data sources, building a comprehensive knowledge graph that represents the real-world relationships between assets, documents, and operational processes.
- **Supported Sources:** PDF, TXT, DOCX, GIS data (e.g., GeoJSON), and hydraulic models (.inp).
- **Automated Relationship Extraction:** The AI identifies and maps connections between entities mentioned across all data sources.
- **Data Deduplication:** Intelligent tools identify and merge duplicate information to ensure a clean, authoritative data model.

### 2. AI-Powered Conversational Interface (RAG)
Users can query the entire knowledge base using natural language questions.
- **Context-Aware Answers:** The Retrieval-Augmented Generation (RAG) agent finds the most relevant information from the graph and documents to provide precise, trustworthy answers.
- **Source-Grounded Responses:** Every answer is backed by citations to the original source documents or data points, ensuring transparency and trust.
- **Complex Queries:** Capable of answering multi-hop questions that require synthesizing information from multiple sources (e.g., "Find all pumps mentioned in maintenance reports from last year that are located in the Doney Park service area").

### 3. Geospatial Asset Mapping (GIS Integration)
Visualize your infrastructure in its real-world geographic context.
- **Interactive Maps:** Overlay asset data, pipe networks, and other features on a dynamic map.
- **ArcGIS & GeoJSON Support:** Directly integrates with popular GIS formats.
- **Layer Toggling:** Users can toggle different data layers (e.g., pipes, tanks, simulation results) to customize their view.

### 4. Hydraulic Modeling & Simulation
Integrates EPANET for advanced water network analysis directly within the platform.
- **Simulation Runner:** Execute hydraulic simulations (e.g., pressure, flow rate, water quality) from within the Clarion interface.
- **Results Visualization:** Overlay simulation results directly onto the network map to easily identify issues like low pressure or high velocity.
- **Graph-to-Model Pipeline:** Generate simulation input files (`.inp`) directly from the knowledge graph's asset data, ensuring models are always up-to-date.

### 5. Integrated Project & Task Management
A complete suite of tools to manage operations and maintenance work.
- **Multiple Views:** Organize tasks and projects using Kanban boards, Gantt charts for timeline planning, calendars, and simple list views.
- **Asset-Linked Tasks:** Link tasks directly to specific assets in the digital twin. Pull up a valve or pump and see all associated maintenance history and open work orders.
- **Team Collaboration:** Supports comments, task assignments, and status updates to keep the entire team in sync.

### 6. Centralized Document & Asset Registry
A single source of truth for all documentation and asset information.
- **Document Viewer:** View original source documents (PDFs, text files) directly in the UI.
- **Asset Registry:** A searchable and filterable list of all physical assets, from pipes and pumps to tanks and valves.
- **Rich Metadata:** The graph stores not just the asset, but its relationships, maintenance history, and links to relevant documentation. 

</div> 