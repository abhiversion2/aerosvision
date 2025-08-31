import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, BookOpen, Briefcase, Zap, ClipboardList, Download, Calendar, Users } from 'lucide-react'; // Added Calendar and Users icons

const MicrosoftAzurePage = () => {
  const [activeTab, setActiveTab] = useState('overview'); // State to manage active tab
  const [activeTrainingSubTab, setActiveTrainingSubTab] = useState('instructorLed'); // State for sub-tabs within Trainings

  // Sample Training Data (will be fetched from DB in future)
  const sampleTraining = {
    id: 'sample-az-devops-001',
    title: 'Azure DevOps Fundamentals Workshop',
    description: 'A comprehensive hands-on workshop covering the essentials of Azure DevOps, including CI/CD pipelines, Azure Repos, Boards, and Artifacts.',
    meetingDateTime: '2025-08-15T10:00:00', // ISO 8601 format
    meetingMethod: 'Google Meet',
    bannerUrl: 'https://placehold.co/600x300/6366F1/FFFFFF?text=Azure+DevOps+Workshop', // Placeholder banner
    registerLink: '/register-training/az-devops-001', // Example registration link
  };

  // Helper function to format date and time
  const formatDateTime = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <Zap size={32} className="mr-3 text-indigo-600 dark:text-indigo-400" />
              Overview
            </h2>
            <div className="text-center max-w-full md:max-w-4xl mx-auto px-2"> {/* Adjusted max-w for responsiveness */}
              {/* What is Microsoft Azure? */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">
                What is Microsoft Azure?
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Microsoft Azure is a cloud computing platform and service created by Microsoft. It offers on-demand cloud services like compute, storage, databases, networking, AI, DevOps, and more. These services allow users to build, deploy, and manage applications through Microsoft-managed data centers.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Think of Azure as Microsoft’s cloud version of a global data center infrastructure that provides everything needed to run applications and services over the internet.
              </p>

              {/* Why Use Microsoft Azure? */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">
                Why Use Microsoft Azure?
              </h3>
              <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-2 mb-6 list-disc list-inside inline-block text-left">
                <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Scalable</span> – Automatically adjusts resources based on demand</li>
                <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Cost-effective</span> – Pay-as-you-go pricing</li>
                <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Global</span> – Data centers in 60+ regions</li>
                <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Secure</span> – Enterprise-grade security and compliance</li>
                <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Hybrid</span> – Seamless integration with on-premises (via Azure Arc, Stack)</li>
                <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">Integrated with Microsoft ecosystem</span> – Ideal for businesses using Office 365, Windows Server, etc.</li>
                <li><span className="font-semibold text-indigo-600 dark:text-indigo-400">DevOps-ready</span> – CI/CD pipelines, Infrastructure as Code, etc.</li>
              </ul>

              {/* Azure Usage Overview */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">
                Azure Usage Overview
              </h3>
              <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">Who Uses Azure?</h4>
              <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-2 mb-6 list-disc list-inside inline-block text-left">
                <li><span className="font-semibold">Enterprises</span> – Migrate infrastructure and apps</li>
                <li><span className="font-semibold">Developers</span> – Host apps, APIs, and mobile backends</li>
                <li><span className="font-semibold">Startups</span> – Cost-effective launch and scaling</li>
                <li><span className="font-semibold">Government & Education</span> – Secure, compliant hosting</li>
                <li><span className="font-semibold">DevOps teams</span> – Automate deployments, testing, monitoring</li>
                <li><span className="font-semibold">AI/ML professionals</span> – Use ready AI models or train custom ones</li>
                <li><span className="font-semibold">Data Engineers</span> – Store, process, and analyze big data</li>
              </ul>

              {/* Azure Services by Category */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">
                Azure Services by Category
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Here’s a breakdown of major Azure services by category:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">1. Compute</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">For running applications and workloads</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>Azure Virtual Machines (VMs) – Windows/Linux VMs</li>
                    <li>Azure App Service – PaaS for web apps, REST APIs</li>
                    <li>Azure Kubernetes Service (AKS) – Managed Kubernetes</li>
                    <li>Azure Container Instances (ACI) – Lightweight container execution</li>
                    <li>Azure Functions – Serverless computing</li>
                    <li>Azure Batch – Large-scale parallel job processing</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">2. Storage</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">To store structured, semi-structured, or unstructured data</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>Azure Blob Storage – Object storage for unstructured data</li>
                    <li>Azure Files – Fully managed file shares (SMB/NFS)</li>
                    <li>Azure Queue Storage – Message queues for async processing</li>
                    <li>Azure Disk Storage – Persistent storage for VMs</li>
                    <li>Azure Data Lake Storage – Big data storage built on top of Blob</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">3. Databases</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">Managed database solutions</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>Azure SQL Database – PaaS SQL Server</li>
                    <li>Azure Cosmos DB – Globally distributed NoSQL DB</li>
                    <li>Azure Database for PostgreSQL / MySQL / MariaDB – Managed open-source DBs</li>
                    <li>Azure Synapse Analytics – Data warehouse + analytics</li>
                    <li>Azure Database Migration Service – For DB migrations</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">4. Networking</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">To connect resources and deliver content</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>Azure Virtual Network (VNet) – Isolated networks in Azure</li>
                    <li>Azure VPN Gateway – Site-to-site VPN</li>
                    <li>Azure ExpressRoute – Private network connection to Azure</li>
                    <li>Azure Load Balancer – Distribute traffic across VMs</li>
                    <li>Azure Application Gateway – Layer 7 load balancer with WAF</li>
                    <li>Azure Front Door – Global load balancing and acceleration</li>
                    <li>Azure DNS – Host and manage DNS domains</li>
                    <li>Azure Traffic Manager – DNS-based traffic routing</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">5. Identity & Security</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">Control access and protect data</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>Azure Active Directory (AAD) – Identity management (SSO, MFA)</li>
                    <li>Azure Key Vault – Store secrets, keys, certs</li>
                    <li>Azure Security Center – Unified security management</li>
                    <li>Microsoft Defender for Cloud – Threat protection</li>
                    <li>Azure Sentinel – SIEM + SOAR for security analytics</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">6. DevOps & Developer Tools</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">Tools for CI/CD and automation</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>Azure DevOps Services – Boards, Repos, Pipelines, Artifacts, Test Plans</li>
                    <li>GitHub Actions – Integrated with Azure for CI/CD</li>
                    <li>Azure Bicep / ARM Templates – Infrastructure as Code (IaC)</li>
                    <li>Terraform (via Azure Provider) – 3rd-party IaC integration</li>
                    <li>Azure CLI / PowerShell – Scripting and automation</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">7. AI & Machine Learning</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">Build intelligent applications</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>Azure Cognitive Services – Vision, Speech, Language, and Decision APIs</li>
                    <li>Azure OpenAI Service – Access GPT models</li>
                    <li>Azure Machine Learning – Build, train, and deploy ML models</li>
                    <li>Azure Bot Services – Build conversational bots</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">8. Analytics & Big Data</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">Analyze large-scale data</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>Azure Data Factory – ETL and data integration</li>
                    <li>Azure Synapse Analytics – SQL + Spark analytics</li>
                    <li>Azure Databricks – Apache Spark-based analytics</li>
                    <li>Azure HDInsight – Hadoop, Hive, Spark on Azure</li>
                    <li>Azure Stream Analytics – Real-time event processing</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">9. Monitoring & Management</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">Track, log, and govern your environment</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>Azure Monitor – Logs, metrics, alerts</li>
                    <li>Azure Log Analytics – Query logs and data</li>
                    <li>Azure Application Insights – App performance monitoring</li>
                    <li>Azure Policy – Enforce rules and compliance</li>
                    <li>Azure Cost Management – Monitor and optimize cost</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">10. Hybrid & Multi-Cloud</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">Connect Azure with other clouds or on-premises</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>Azure Arc – Manage resources across environments</li>
                    <li>Azure Stack HCI / Hub / Edge – Bring Azure services on-prem</li>
                    <li>Azure Lighthouse – Manage multiple tenants</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">11. Migration Tools</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">Migrate existing workloads to Azure</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    <li>Azure Migrate – Assess and move VMs, apps, and DBs</li>
                    <li>Database Migration Service</li>
                    <li>Azure Site Recovery – Disaster recovery (DRaaS)</li>
                  </ul>
                </div>
              </div>

              {/* Common Use Cases */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">
                Common Use Cases
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Web App Hosting</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Azure App Service, Azure SQL, Blob Storage</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">DevOps Pipelines</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Azure DevOps, GitHub Actions, Key Vault</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Data Analytics</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Data Factory, Synapse, Power BI, Cosmos DB</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Hybrid Cloud Architecture</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Azure Arc, ExpressRoute, Stack</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">AI Chatbot</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Azure Bot Service, Cognitive Services</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Enterprise VPN & Firewall</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Virtual Network, VPN Gateway, Azure Firewall</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">Disaster Recovery</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Azure Site Recovery, Storage, VM snapshots</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">IoT & Edge Computing</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Azure IoT Hub, Stream Analytics, Azure Functions</p>
                </div>
              </div>

              {/* Global Azure Footprint */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">
                Global Azure Footprint
              </h3>
              <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-2 mb-6 list-disc list-inside inline-block text-left">
                <li>Available in 60+ Azure regions and 200+ data centers</li>
                <li>Services available in multiple Availability Zones for high availability</li>
                <li>Global content delivery via Azure CDN and Front Door</li>
              </ul>
            </div>
          </section>
        );
      case 'certifications':
        return (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <Award size={32} className="mr-3 text-emerald-600 dark:text-emerald-400" />
              Certifications
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Achieve industry recognition with official Microsoft Azure certifications. These certifications validate
              your expertise and open doors to new career opportunities.
            </p>

            {/* Fundamentals Certifications */}
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8 flex items-center justify-center text-center">
              <CheckCircle size={24} className="mr-2 text-green-500" /> Fundamentals Certifications (Beginner Level)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AZ-900: Microsoft Certified: Azure Fundamentals</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Introductory certification covering basic cloud concepts, Azure services, pricing, SLAs, and governance.
                  Ideal for beginners to cloud or IT, and non-technical roles like sales, marketing, PMs.
                </p>
                <Link to="/explore/azure/az900-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AI-900: Microsoft Certified: Azure AI Fundamentals</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Covers AI/ML concepts and Azure services like Cognitive Services and Azure Machine Learning.
                  Prepares for AI-related work or higher AI certifications without needing coding knowledge.
                </p>
                <Link to="/explore/azure/ai900-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">DP-900: Microsoft Certified: Azure Data Fundamentals</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Introduction to data services on Azure, like relational/non-relational data, big data, and analytics.
                  Lays the groundwork for data-related roles and certs like DP-203 or AI-102.
                </p>
                <Link to="/explore/azure/dp900-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">SC-900: Microsoft Certified: Security, Compliance, and Identity Fundamentals</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Basics of Microsoft security, compliance, and identity services. Explains how Azure handles security and identity—ideal if considering security roles later.
                </p>
                <Link to="/explore/azure/sc900-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
            </div>

            {/* Associate-Level Certifications */}
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8 flex items-center justify-center text-center">
              <Award size={24} className="mr-2 text-blue-500" /> Associate-Level Certifications (Intermediate Level)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AZ-104: Microsoft Certified: Azure Administrator Associate</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Managing Azure subscriptions, VMs, networks, identities, storage, and more. Core certification for Azure operational roles.
                </p>
                <Link to="/explore/azure/az104-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AZ-204: Microsoft Certified: Azure Developer Associate</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Developing Azure apps and services using Azure SDKs, APIs, Logic Apps, and more. Focuses on modern cloud-native app development.
                </p>
                <Link to="/explore/azure/az204-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AZ-305: Microsoft Certified: Azure Solutions Architect Expert</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  (Requires AZ-104 knowledge) Designing cloud and hybrid solutions for compute, network, storage, and security. Validates architectural design skills for enterprise-scale Azure deployments.
                </p>
                <Link to="/explore/azure/az305-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">DP-203: Microsoft Certified: Azure Data Engineer Associate</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Building data pipelines, integrating, transforming, and storing data on Azure. For handling big data and analytics projects on Azure.
                </p>
                <Link to="/explore/azure/dp203-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AI-102: Microsoft Certified: Azure AI Engineer Associate</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Designing and deploying AI solutions using Cognitive Services, Azure ML, and bots. Focuses on practical AI deployment skills on Azure.
                </p>
                <Link to="/explore/azure/ai102-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">SC-200: Microsoft Certified: Security Operations Analyst Associate</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Detecting, responding, and investigating security incidents using Microsoft Sentinel and Defender. Great for starting a security analyst career.
                </p>
                <Link to="/explore/azure/sc200-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">SC-300: Microsoft Certified: Identity and Access Administrator Associate</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Managing identities, access, and authentication in Azure Active Directory. Specializes in identity governance and access control.
                </p>
                <Link to="/explore/azure/sc300-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">SC-400: Microsoft Certified: Information Protection Administrator Associate</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Implementing information protection, data loss prevention, and governance. Focuses on securing data at rest/in transit.
                </p>
                <Link to="/explore/azure/sc400-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
            </div>

            {/* Expert-Level Certifications */}
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8 flex items-center justify-center text-center">
              <Award size={24} className="mr-2 text-red-500" /> Expert-Level Certifications (Advanced Level)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AZ-400: Microsoft Certified: DevOps Engineer Expert</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Covers DevOps practices like CI/CD, Infrastructure as Code (IaC), monitoring, and collaboration using Azure DevOps and GitHub.
                  High-demand skillset—bridges development and operations.
                </p>
                <Link to="/explore/azure/az400-prep" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
                  Learn More &rarr;
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/plans" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
                View All Certification Prep Plans <CheckCircle size={20} className="ml-2" />
              </Link>
            </div>
          </section>
        );
      case 'trainings':
        return (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <BookOpen size={32} className="mr-3 text-orange-600 dark:text-orange-400" />
              Trainings
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Our comprehensive training programs are designed to equip you with practical Azure skills.
              Choose from various formats to suit your learning style.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Vertical Tabs for Training Sub-sections */}
              <div className="md:w-1/4 w-full bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Training Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setActiveTrainingSubTab('instructorLed')}
                      className={`w-full text-left px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center
                        ${activeTrainingSubTab === 'instructorLed'
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      <Users size={18} className="mr-2" /> Instructor-Led Workshops
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTrainingSubTab('selfPaced')}
                      className={`w-full text-left px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center
                        ${activeTrainingSubTab === 'selfPaced'
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      <BookOpen size={18} className="mr-2" /> Self-Paced Learning Paths
                    </button>
                  </li>
                </ul>
              </div>

              {/* Content Area for Training Sub-tabs */}
              <div className="md:w-3/4 w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {activeTrainingSubTab === 'instructorLed' && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Instructor-Led Workshops</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base mb-6">
                      Engage with expert instructors in live, interactive sessions. Perfect for hands-on learning
                      and direct Q&A. Available in virtual and in-person formats.
                    </p>

                    {/* Sample Training Card - Styled to match image */}
                    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                      {/* Banner/Thumbnail */}
                      <div className="md:w-1/3 w-full flex-shrink-0">
                        <img
                          src={sampleTraining.bannerUrl}
                          alt={sampleTraining.title}
                          className="w-full h-48 md:h-full object-cover"
                          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x300/6366F1/FFFFFF?text=Azure+Training"; }}
                        />
                      </div>
                      {/* Content */}
                      <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{sampleTraining.title}</h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{sampleTraining.description}</p>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                            <Calendar size={16} className="mr-2" />
                            <span>{formatDateTime(sampleTraining.meetingDateTime)}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                            <Users size={16} className="mr-2" />
                            <span>Meeting Method: {sampleTraining.meetingMethod}</span>
                          </div>
                        </div>
                        <div className="flex justify-end"> {/* Aligned to bottom right */}
                          <Link
                            to={sampleTraining.registerLink}
                            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 transition-colors duration-300"
                          >
                            Register
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* End Sample Training Card */}

                    <div className="text-center mt-8">
                      <Link to="/all-instructor-workshops" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
                        View All Instructor-Led Workshops <BookOpen size={20} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                )}

                {activeTrainingSubTab === 'selfPaced' && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Self-Paced Learning Paths</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-base mb-6">
                      Learn at your own pace with our structured online content, including video lectures, coding exercises,
                      and quizzes. These paths offer flexibility and in-depth coverage of various Azure domains.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Azure DevOps Engineer Path</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Comprehensive modules from beginner to advanced, covering CI/CD, IaC, and monitoring.</p>
                        <Link to="/learning-path/azure-devops" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                          Start Path &rarr;
                        </Link>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Azure AI Engineer Path</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Build and deploy intelligent solutions with Azure AI, including Cognitive Services and Machine Learning.</p>
                        <Link to="/learning-path/azure-ai" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                          Start Path &rarr;
                        </Link>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Azure Security Engineer Path</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Master security best practices and services, including identity, network, and data protection.</p>
                        <Link to="/learning-path/azure-security" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                          Start Path &rarr;
                        </Link>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Azure Data Engineer Path</h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Design and implement data solutions on Azure, covering data storage, processing, and analytics.</p>
                        <Link to="/learning-path/azure-data" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                          Start Path &rarr;
                        </Link>
                      </div>
                    </div>
                    <div className="text-center mt-8">
                      <Link to="/explore/learning-paths" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300">
                        Explore All Learning Paths <BookOpen size={20} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      case 'courses':
        return (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <BookOpen size={32} className="mr-3 text-cyan-600 dark:text-cyan-400" />
              Courses
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Browse our extensive catalog of individual courses covering specific Azure services and concepts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Introduction to Azure Cosmos DB</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Learn about Microsoft's globally distributed, multi-model database service.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Beginner | 4 hours</p>
                <Link to="/course/azure-cosmosdb" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Start Course &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Azure Kubernetes Service (AKS) Deep Dive</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Master deploying and managing containerized applications with AKS.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Intermediate | 8 hours</p>
                <Link to="/course/azure-aks" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Start Course &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Securing Azure Resources</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Learn best practices for securing your Azure environment and applications.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Advanced | 6 hours</p>
                <Link to="/course/azure-security" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Start Course &rarr;
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/explore" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
                Browse All Azure Courses <BookOpen size={20} className="ml-2" />
              </Link>
            </div>
          </section>
        );
      case 'jobs':
        return (
          <section>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <Briefcase size={32} className="mr-3 text-purple-600 dark:text-purple-400" />
              Azure Job Opportunities
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Azure skills are highly in demand. Here are some common job roles and why expertise in Azure is crucial.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Cloud Administrator</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Responsible for implementing, monitoring, and maintaining Microsoft Azure solutions,
                  including major services related to compute, storage, network, and security.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Key Skills:</span> Azure Virtual Machines, Azure Networking, Azure Storage, Azure AD.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">DevOps Engineer</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Designs and implements strategies for collaboration, code, infrastructure, source control,
                  security, compliance, continuous integration, testing, delivery, monitoring, and feedback.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Key Skills:</span> Azure DevOps, ARM Templates, PowerShell, Git, CI/CD.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Cloud Developer</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Designs, builds, tests, and maintains cloud applications and services on Azure.
                  Works with cloud solutions architects, cloud DBAs, and cloud administrators.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Key Skills:</span> Azure SDKs, Logic Apps, Azure Functions, Azure App Service, Databases.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Cloud Security Engineer</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Implements security controls and threat protection, manages identity and access,
                  and protects data, applications, and networks in cloud and hybrid environments.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Key Skills:</span> Azure Security Center, Azure Sentinel, Network Security Groups, Azure AD Identity Protection.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                Connect with Recruiters <Briefcase size={20} className="ml-2" />
              </Link>
            </div>
          </section>
        );
      case 'practiceTests':
        return (
          <section className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <ClipboardList size={32} className="mr-3 text-pink-600 dark:text-pink-400" />
              Practice Tests
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Prepare for your Azure certifications with our comprehensive practice tests. Simulate exam conditions
              and identify areas for improvement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AZ-900 Practice Exam</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Full-length practice test for Azure Fundamentals. Includes detailed explanations for each answer.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">60 questions | Timed</p>
                <Link to="/practice-tests/az900" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Start Test &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AZ-104 Practice Exam</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Simulate the Azure Administrator Associate exam. Focuses on practical administration scenarios.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">90 questions | Timed</p>
                <Link to="/practice-tests/az104" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Start Test &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AZ-305 Practice Exam</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Advanced practice test for Azure Solutions Architect Expert. Covers complex design scenarios.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">120 questions | Timed</p>
                <Link to="/practice-tests/az305" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Start Test &rarr;
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/practice-tests" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-300">
                Browse All Practice Tests <ClipboardList size={20} className="ml-2" />
              </Link>
            </div>
          </section>
        );
      case 'studyDumps':
        return (
          <section>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center text-center">
              <Download size={32} className="mr-3 text-teal-600 dark:text-teal-400" />
              Study Dumps
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
              Access high-quality study dumps to aid your exam preparation. These resources can provide
              additional context and reinforce your understanding of key topics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AZ-900 Study Guide</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  A comprehensive study guide for Azure Fundamentals, covering all exam objectives.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">PDF | 50 pages</p>
                <Link to="/dumps/az900-study-guide" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Download &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">AZ-104 Key Concepts</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Summarized key concepts and quick reference guide for Azure Administrator Associate.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">PDF | 30 pages</p>
                <Link to="/dumps/az104-key-concepts" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Download &rarr;
                </Link>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Azure Security Cheat Sheet</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  A concise cheat sheet covering essential Azure security services and best practices.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">PDF | 15 pages</p>
                <Link to="/dumps/azure-security-cheatsheet" className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-3 inline-block">
                  Download &rarr;
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/dumps" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300">
                Browse All Study Dumps <Download size={20} className="ml-2" />
              </Link>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-8 mb-12 transition-colors duration-300">
      <h1 className="text-5xl lg:text-5xl font-extrabold text-center text-indigo-700 dark:text-indigo-400 mb-10 leading-tight">
        Explore Microsoft Azure
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 text-center max-w-full md:max-w-3xl mx-auto mb-12 px-2">
        Unlock the power of Microsoft's cloud platform. From fundamental concepts to advanced solutions,
        AerosVision provides the resources you need to master Azure.
      </p>

      {/* Horizontal Tabs Navigation */}
      <nav className="mb-12 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap justify-center -mb-px">
          <li>
            <button
              onClick={() => setActiveTab('overview')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'overview'
                  ? 'text-indigo-600 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <Zap size={20} className="mr-2" /> Overview
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'certifications'
                  ? 'text-indigo-600 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <Award size={20} className="mr-2" /> Certifications
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('trainings')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'trainings'
                  ? 'text-indigo-600 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <BookOpen size={20} className="mr-2" /> Trainings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('courses')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'courses'
                  ? 'text-indigo-600 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <BookOpen size={20} className="mr-2" /> Courses
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'jobs'
                  ? 'text-indigo-600 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <Briefcase size={20} className="mr-2" /> Azure Job Opportunities
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('practiceTests')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'practiceTests'
                  ? 'text-indigo-600 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <ClipboardList size={20} className="mr-2" /> Practice Tests
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('studyDumps')}
              className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group text-base md:text-lg font-medium transition-colors duration-200
                ${activeTab === 'studyDumps'
                  ? 'text-indigo-600 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-400 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-500'
                }`}
            >
              <Download size={20} className="mr-2" /> Study Dumps
            </button>
          </li>
        </ul>
      </nav>

      {/* Render content based on active tab */}
      {renderTabContent()}

    </div>
  );
};

export default MicrosoftAzurePage;
