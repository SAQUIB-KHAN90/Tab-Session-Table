document.addEventListener("DOMContentLoaded", () => {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabLinks.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and panels
      tabLinks.forEach((link) => link.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      // Add active class to the clicked tab and corresponding panel
      tab.classList.add("active");
      const target = tab.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });
});

// FOR CDEC BATCH
const topics = {
  Linux: {
    "Day 1 :Embarking on the DevOps Journey	": [
      "Introduction to DevOps",
      "How IT Company Works",
      "What is an Application?",
      "Developers vs Testers vs DevOps",
    ],
    "Day 2 :The Strategic Imperative of DevOps	 ": [
      "Top Features of Linux",
      "Linux Everywhere",
      "Unlocking Linux Careers",
      "Why AWS Stands Out in the Cloud Market",
      "Overview of AWS",
      "Customer Success Stories",
      "Scalability and Flexibility of Business with AWS",
      "Comparing AWS with Competitors",
      "Why DevOps is a Growing Career Field",
      "High Demand for DevOps Professionals",
      "Salary Expectations and Career Growth",
      "Skills and Expertise in DevOps",
      "Certifications and Learning Resources",
      "The Future of DevOps Careers",
      "Goal to Achieve in CDEC",
    ],
    "Day 3 :Navigating the Linux Landscape	  ": [
      "Getting Started with Operating Systems",
      "Different Types of Operating Systems",
      "How Operating Systems Impact Your Daily Life",
      "Windows vs Unix vs Linux",
      "Ownership and Origin",
      "Cost and Licensing",
      "Security and Privacy",
      "User Interface",
      "What is a Server?",
      "Desktop OS vs Server OS",
      "Introduction to Linux",
      "Architecture of Linux",
    ],
    "Day 4 :Mastering the Linux Prompt	 ": [
      "Understanding the Linux Command Prompt",
      "Decoding the Structure of the Command Prompt",
      "Effective Command Prompt Usage: A Step-by-Step Guide",
      "Making the Command Prompt Your Own: Customization Tips ",
      "Introduction to Linux Basic Commands",
      "Getting Started with the Linux Terminal",
      "Essential System Information: Commands and Tools for Linux",
    ],
    "Day 5 :Delving Deep into the Linux File System": [
      "Navigating the File System",
      "File and Directory Management",
      "Viewing and Editing Files",
      "Copy, Move, and Delete Files",
    ],
    "Day 6 :Delving Deep into the Linux File System ": [
      "Mastering the Linux File System Hierarchy",
      "The Significance of the Linux File System Hierarchy",
      "Inside the Linux Root Directory: What You Need to Know",
      "Understanding the Functionality of Common Linux Directories",
      "Introduction to Linux Shortcuts: Boost Your Efficiency",
    ],
    "Day 7 :Mastering Text Editing with VIM": [
      "Overview of Vim and its History",
      "Basic Concepts: Modes in Vim (Command, Insert, Visual, Execute)",
      "Basic Navigation in Command Mode",
      "Text Manipulation",
      "Undo and Redo",
      "Entering Insert Mode",
      "Editing Text in Insert Mode",
      "Navigating and Editing in Insert Mode",
      "Exiting Insert Mode",
    ],
    "Day 8 :The Editor's Lair: Mastering Text Editing with VIM": [
      "Entering Execute Mode",
      "Executing Basic Commands: File Operations, Searching, Line Numbering",
      "Entering Visual Mode",
      "Manipulating Text in Visual Mode",
      "Revisioning the complete vim editor",
    ],
    "Day 9 :Managing Users and Permissions in Linux": [
      "Overview of User and Permission Management",
      "Types of Users",
      "Using useradd Command",
      "Setting User Passwords",
      "Managing User Groups",
      "Removing Users",
      "Introduction to Affected Files",
      "User Home Directories",
      "Configuration Files",
      "Switching Between Users in Linux",
      "Using su Command",
      "Using Sudo Command",
    ],
    "Day 10 :Managing Users and Permissions in Linux ": [
      "Importance of Password Security",
      "Using passwd Command",
      "Password Policy Settings",
      "Account Locking and Expiration",
      "Understanding /etc/shadow fields",
      "Using chage Command",
      "Introduction to Linux Groups",
      "Fields of /etc/group and /etc/gshadow",
      "Types of Groups",
      "Creating and Deleting Groups",
      "Modifying Groups",
      "Managing group Memberships",
      "Viewing and Editing Group Information",
    ],
    "Day 11 :Managing Users and Permissions in Linux	 ": [
      "Importance of File Permissions in Linux",
      "Explanation of rwx (read, write, execute) Permissions",
      "How Permissions are Displayed with ls -l",
      "Example: Breaking Down the Permission String (e.g., -rwxr-xr--)",
      "Introduction to File Types",
      "User Defined File Types",
      "System Defined File Types",
    ],
    "Day 12 :Managing Users and Permissions in Linux	": [
      " Link Count Basics",
      "Link Count for Directories",
      "Link Count for Files",
      "Comparing Hard and Soft Links",
      "Importance of sudo for Privilege Escalation",
      "Difference Between Regular User Commands and sudo Commands",
      "Configuring sudo Access",
      "sudo Command Syntax and Example",
    ],
    "Day 13 :Automation and Data Handling in Linux ": [
      " Overview of Archiving",
      "Common Use Cases: Backups, Data Transfer, Organization",
      "Creating and Extracting Archives with tar",
      "Managing Archive Contents",
      "Introduction to Compression",
      "The Role of Compression in Reducing File Sizes",
      "Differences Between Compression Formats (e.g., gzip, bzip2, xz)",
      "Using gzip and gunzip",
      "Using bzip2 and bunzip2",
      "Using xz and unxz",
      "Combining Archiving and Compression",
      "Practical: Compressing Files with tar, gzip, bzip2, xz",
      "Practical: Decompressing Files with tar, gunzip, bunzip2, unxz",
      "Introduction to CronTab",
      "Understanding The CronTab Syntax",
      "Creating and Managing Cron Jobs",
      "Automating Routine Tasks like Backups, System Updates, and Cleanup Scripts",
    ],
    "Day 14 :Automation and Data Handling in Linux ": [
      "Introduction to Search and Filter Utilities",
      "Importance of Searching and Filtering Data in Linux",
      "Overview of Key Utilities: grep, cat, sort, UNIQUE",
      "Read Files Using cat, uniq, and SORT",
      "Introduction to the find Utility",
      "Basic Syntax of FIND",
      "Advanced Usage and Filtering Options",
      "Practical Examples of Finding Files by Name, Type, Size, and Modification DATE",
    ],
    "Day 15 :Managing Processes and Optimizing Performance ": [
      "Introduction to Processes",
      "Types of Processes and Jobs",
      "Basic Process Management Commands",
      "Understanding Process States",
      "Job Control Basics",
      "Understanding Process and Thread Management",
      "Exploring with ps Command",
      "Real-Time Monitoring with top",
      "Analyzing Performance Metrics",
    ],
    "Day 16 :Managing Processes and Optimizing Performance	 ": [
      "Understanding Process Priority and nice Values",
      "Finding Process IDs",
      "Sending Signals to Processes",
      "Practical Example: Adjusting Priority of Long-Running Processes",
      "Overview of Process States",
      "Different Job Types and States",
      "Visualizing The Process Tree",
      "Practical Example: Analyzing Process Behavior and Lifecycle",
    ],
    "Day 17 :Basic Networking in Linux	": [
      "Overview of Networking Fundamentals",
      "Network Types and Protocols",
      "Using ifconfig and ip Commands",
      "Basic Network Configuration Steps",
      "Configuring Static IP with nmtui and nmcli",
      "Example: Configuring a Static IP Address and Verifying Network Connectivity",
    ],
    "Day 18 : Revision Session": ["Revision Session (ONLY SATURDAY)"],
    "Day 19 : Exam": ["Exam (ONLY SATURDAY)"],
  },
  AWS: {
    "Day 1 : Introduction to Virtualization and Cloud Computing	": [
      "Introduction to Virtualization",
      "Virtualization vs Cloud",
      "Cloud Models (IAAS, PAAS, SAAS)",
      "AWS Account Creation",
    ],
    "Day 2 :Getting Started with AWS and EC2 Instances	": [
      "Introduction to AWS Dashboard",
      "Region vs Availability Zone (AZ)",
      "Introduction to EC2 Service",
      "Create First Instance of Ubuntu",
    ],
    "Day 3 :Getting Started with AWS and EC2 Instances	": [
      "Security Group (SSH and RDP Port)",
      "Create Instance of Windows",
      "Remote Access of Linux and Windows Machines",
    ],
    "Day 4 :Linux Essentials and Web Server Deployment": [
      "SSH Service (Key-based Authentication)",
      "Practical: Create Another Login User",
      "Deploy Web Server Using NGINX",
    ],
    "Day 5 :Exploring the EC2 Dashboard and Advanced Features": [
      "Explain Complete Dashboard of EC2",
      "Instance Types",
      "Status Check, AMI (Types, Create, and Copy)",
      "Launch Template, Purchasing Options",
    ],
    "Day 6 :EBS Volume Management and Backup Strategies	": [
      "EBS Volumes and Its Types",
      "Attach Volumes, Create Partition, and Mount",
    ],
    "Day 7 :EBS Volume Management and Backup Strategies	": [
      "Partitions / Permanent Mount",
      "Take Backup Using Snapshot",
      "Automate Snapshot Using Snapshot Policy",
    ],
    "Day 8 :Network File Systems in AWS": [
      "Introduction to NFS",
      "Create EFS File System",
      "Attach and Mount EFS File System",
    ],
    "Day 9 :Networking Fundamentals and CIDR Basics": [
      "Basics of Networking",
      "CIDR (Classless Inter-Domain Routing)",
    ],
    "Day 10:Virtual Private Cloud (VPC) Configuration	": [
      "Introduction to VPC",
      "CIDR Calculation for Subnets",
      "Create VPC and Subnet",
    ],
    "Day 11 :Virtual Private Cloud (VPC) Configuration	": [
      "Create IGW and Route",
      "Launch Private and Public Instance",
      "NAT Gateway",
      "VPC Peering",
    ],
    "Day 12 :Network Interface and Security Enhancements": [
      "NIC and Elastic IP",
      "Placement Groups",
      "NACL vs Security Group",
    ],
    "Day 13:Load Balancing in AWS	": [
      "Introduction to Load Balancer",
      "Load Balancer and Its Types",
      "Difference: Application Load Balancer & Network Load Balancer",
    ],
    "Day 14 :Load Balancing in AWS": ["Create Application Load Balancer"],
    "Day 15:Auto Scaling for High Availability	": [
      "Auto Scaling and Its Types",
      "Create Launch Template",
      "Create Auto Scaling Group (Demo)",
    ],
    "Day 16:Auto Scaling for High Availability": [
      "Demo Auto Scaling Using Stress Command",
      "Scheduled Scaling Theory",
      "Predictive Scaling Theory",
    ],
    "Day 17:Revision and Recap Session(ONLY SATURDAY)": [
      "Recap of EC2, VPC, Load Balancing, Auto Scaling",
      "Q&A Session for Clarification",
    ],
    "Day 18:EXAM(ONLY SATURDAY)": ["EXAM (ONLY SATURDAY)"],
    "Day 19:Identity and Access Management (IAM) in AWS": [
      "Introduction to IAM Services",
      "Creating IAM Users",
      "Assigning Console and Programmatic Access",
      "Group Creation and Policy Attachment",
      "Practical Demo: Policy Implementation and Restriction Tests",
      "Different Types of Roles, Importance of Roles & Practical Demo for Role",
    ],
    "Day 20:Amazon S3: Object Storage and Management": [
      "Introduction to S3",
      "Create Bucket",
      "Upload Objects",
      "S3 Properties",
      "Versioning, Static Website Hosting, Server Access Logging",
    ],
    "Day 21:Amazon S3: Object Storage and Management": [
      "Storage Classes",
      "Replication Rule",
      "Permission and Metrics Tab",
    ],
    "Day 22:Command-Line Interface: AWS CLI Essentials": [
      "Introduction to AWS CLI",
      "Configuring and Using AWS CLI for S3 and EC2 Management",
      "Practical Demo of CLI Commands",
    ],
    "Day 23:Monitoring and Logging with CloudWatch": [
      "CloudWatch Dashboard",
      "Metrics",
      "Alarms",
      "Logs Insights",
    ],
    "Day 24:Monitoring and Logging with CloudWatch": [
      "Custom Metrics",
      "CloudWatch Logging",
      "CloudWatch Events",
      "SNS Topic",
    ],
    "Day 25:Relational Database Services (RDS)": [
      "Introduction to RDS",
      "Advantages of RDS",
      "Introduction to DBMS, SQL, MariaDB",
    ],
    "Day 26:Relational Database Services (RDS)": [
      "Launching RDS Instances and Connecting to Tomcat Student App",
      "Database Backup and Restore Strategies: Full DB, Data Only, Schema Only",
    ],
    "Day 27:DNS and Route 53 for Domain Management": [
      "Introduction to DNS Service",
      "Explain Records and Zones",
      "Introduction to Route53",
      "Purchase Domain",
    ],
    "Day 28:DNS and Route 53 for Domain Management	": [
      "Create Hosted Zone and Simple A Record to Map Instance IP",
      "Routing Policy",
    ],
    "Day 29:Content Delivery with CloudFront": [
      "CloudFront",
      "CloudFront + S3 Integration to Host Frontend of Website",
    ],
    "Day 30:Serverless Computing with AWS Lambda": [
      "Introduction to Lambda",
      "Demo on Lambda",
    ],
    "Day 31:Revision Session(ONLY SATURDAY)": [
      "Recap of All Key Concepts Covered (VPC, EC2, Load Balancing, S3, Auto Scaling, RDS, etc.)",
      "Q&A and Clarifications",
    ],
    "Day 32:Revision Session(ONLY SATURDAY)": [
      "Practical Hands-On Lab: Deploy a Complete Cloud Solution with VPC, EC2, RDS, S3, and Load Balancer",
      "Comprehensive Q&A to Cover Remaining Doubts and Final Concepts Review",
    ],
    "Day 33:EXAM(ONLY SATURDAY)": ["EXAM (ONLY SATURDAY)"],
  },
  DevOps: {
    "Day 1:Introduction to DevOps": [
      "Introduction Software Industry",
      "SDLC - Waterfall and Agile Model",
      "Explain DevOps Syllabus",
      "Introduction to API, its types, and use cases",
      "What is Frontend vs backend",
      "Stages of application development [developer/tester/db/devops teams]",
    ],
    "Day 2:Source Code Management Tool (GIT)": [
      "Introduction to SCM tool",
      "Difference Between Centralise-VCS and Distributed-VCS",
      "Introduction to GIT",
      "Explain Lifecycle of GIT",
      "GIT CLI installation",
      "GIT Command (work on local-repo)",
      "git init, add, commit, logs, revert, restore, status",
    ],
    "Day 3:Source Code Management Tool (GIT)": [
      "git branch, common types of branches, checkout, diff, merge",
      "Introduction to Remote Repo (GitHub)",
      "git clone, pull, push commands",
      "git init, config, remote",
    ],
    "Day 4:Collaborate in project using GITHUB": [
      "GITHUB DASHBOARD",
      "Difference between Public and Private Repo",
      "How to Search Public Repos",
      "Fork and Pull Requests",
      "Authentication methods (HTTP, SSH)",
    ],
    "Day 5:Collaborate in project using GITHUB": [
      "Difference between Github and Gitlab",
      "Difference between CE and EE Gitlab",
      "How to merge repo branches in gitlab",
      "How to resolve conflicts",
      "Explain IDE, install visual studio code, Auto Git",
    ],
    "Revision Session(ONLY SATURDAY) ": [
      "Recap of all key concepts of GIT, GITHUB, GITLAB",
    ],
    "Day 6:Containerisation using Docker": [
      "Difference between Monolithic and MicroServices",
      "Difference between Traditional, Virtualization, and Containerization Deployment",
      "Introduction to Containerization, Container, Image",
      "Introduction to Docker",
      "Difference between Docker CE and Docker EE",
      "Install Docker engine",
      "Run first container",
    ],
    "Day 7:Containerisation using Docker": [
      "Explain docker container commands",
      "Essential Commands for Container Management using Docker",
      "Experiment with Docker Containers - Create, Start, Stop, and Run",
      "Expose applications to the World",
      "Interact with Containers using 'exec'",
      "Inspects and Troubleshooting Steps in Docker",
      "docker run (-d, -p, -P, -e, --name), create, start, stop, rm, ps (-aq), exec (-it), inspect, cp, logs, stats",
    ],
    "Day 8:Containerisation using Docker": [
      "Introduction to docker images and its naming",
      "Introduction to Dockerhub and ECR",
      "docker image commands",
      "docker pull, login, push",
      "docker commit, tag, image rm, rmi, save, load, prune",
    ],
    "Day 9:Containerisation using Docker": [
      "Introduction to Docker Network",
      "Explain different network drivers",
      "docker network commands",
      "create, delete, run (--network)",
    ],
    "Day 10:Containerisation using Docker": [
      "Introduction to Docker Volume",
      "docker volume commands",
      "Create, delete, run (-v)",
    ],
    "Day 11:Containerisation using Docker": [
      "Introduction to Dockerfile",
      "FROM, LABEL, RUN, CMD, ENTRYPOINT, ENV, ARG, COPY, ADD, EXPOSE, USER, WORKDIR",
      "Docker build, push, pull",
    ],
    "Day 12:Containerisation using Docker": [
      "Create docker file for frontend and backend application",
      "Deploy three-tier application deployment example",
    ],
    "Day 13:Briefing of Docker Compose": [
      "Brief Introduction to Docker Compose",
      "Deploy three-tier application using Docker Compose",
    ],
    "Day 14 : Revision Session(ONLY SATURDAY)": [
      "Recap of all key concepts of Docker",
    ],
    "Day 15:Orchestration tool (Kubernetes)": [
      "Introduction to Kubernetes",
      "Why we need orchestration tool",
      "Architecture of Kubernetes",
      "Why kubernetes",
      "Lifecycle of the pods",
      "Enlist Cluster creation methods (minikube, kind, kubeadm, EKS, GKE, AKS, etc)",
    ],
    "Day 16:Orchestration tool (Kubernetes)": [
      "Create cluster using EKS",
      "Install kubectl, access EKS cluster",
      "Introduction to Pods, and service",
      "Main Container and Side Car Containers",
      "Run first Pod by kubectl run",
      "Expose pod using kubectl expose",
    ],
    "Day 17:Orchestration tool (Kubernetes)": [
      "Kubernetes network (intra-pod and inter-pod communication) with examples",
      "Pod IP, Container Port, Node IP, Node Port, Load balancer",
    ],
    "Day 18:Orchestration tool (Kubernetes)": [
      "Introduction to YAML scripts",
      "Write manifest files for Pods and Services",
      "Concept of Namespace, ReplicationController, ReplicaSet",
    ],
    "Day 19:Orchestration tool (Kubernetes)": [
      "Deployments vs StatefulSet",
      "Write Manifests for Deployments and StatefulSet",
      "Explain DaemonSet",
    ],
    "Day 20: Orchestration tool (Kubernetes)": [
      "Store variables using ConfigMap and Secrets",
      "Achieve Persistent Storage using PV and PVC, Dynamic Volume using EBS",
    ],
    "Day 21: Orchestration tool (Kubernetes)": [
      "Types of AutoScaling in k8s",
      "Write Manifests for HPA",
    ],
    "Day 22: Orchestration tool (Kubernetes)": [
      "Introduction to Ingress",
      "Install Nginx Ingress Controller using Manifests",
      "Write Manifest for Ingress (Path-based routing and Name-based routing)",
    ],
    "Day 23: Orchestration tool (Kubernetes)": [
      "Write manifests to deploy three-tier application: HPA, Deployment, Service, Ingress",
    ],
    "Revision Session (ONLY SATURDAY)": [
      "Recap of all key concepts of Kubernetes",
    ],
    "Half Syllabus Exam (ONLY SATURDAY)": [],
    "Day 24: Code Infrastructure with Terraform": [
      "Introduction to IAC",
      "Why we need IAC (Difference between Shell Script, Ansible, and IAC tool)",
      "Introduction to Terraform",
      "Terraform Language (Basic Syntax)",
      "Enlist the Blocks used in Terraform Language",
    ],
    "Day 25: Code Infrastructure with Terraform": [
      "Install Terraform in Linux system",
      "Write first Terraform script to deploy EC2 instance",
      "Explain Terraform lifecycle",
      "Explain different files that are created in Terraform lifecycle",
    ],
    "Day 26: Code Infrastructure with Terraform": [
      "Write Terraform script to deploy Security Group",
      "Explain HEREDOC concept in UserData",
      "Explain (Provider, Resource, Variable, Data, Output) blocks in the above example",
    ],
    "Day 27: Code Infrastructure with Terraform": [
      "Write a Terraform script to deploy LoadBalancer and Autoscaling",
    ],
    "Day 28: Code Infrastructure with Terraform": [
      "Explain module concept",
      "Write module for VPC, Subnet, and EC2 instance",
      "Explain types of dependencies",
      "Explain Blocks (terraform, module, output)",
    ],
    "Day 29: Code Infrastructure with Terraform": [
      "Storing tfstate file on remote location",
      "Create multi-environment script using .tfvar file",
    ],
    "Day 30: Code Infrastructure with Terraform": [
      "Explain concept of terraform workspace (Theory)",
      "Explain Loops (count, for-each, for)",
    ],
    "Day 31: Code Infrastructure with Terraform": [
      "Terraform Commands (Taint, Import, Destroy -t)",
      "Terraform Provisioners (remote, local, file)",
    ],
    "Day 32: Code Infrastructure with Terraform": [
      "Write a Terraform script to deploy EKS cluster",
    ],
    "Terraform Revision (ONLY SATURDAY)": [],
    "Day 33: Jenkins Essentials": [
      "Introduction to CI process",
      "Difference between Continuous Delivery and Deployment",
      "Introduction to Jenkins",
      "Install Jenkins server",
    ],
    "Day 34: Jenkins Essentials": [
      "Create first freestyle job",
      "Install GIT plugin",
      "Create freestyle job to pull the source code",
    ],
    "Day 35: Jenkins Essentials": [
      "Install SSH Build Agent Plugin",
      "Create and attach SSH agents to Master Jenkins",
      "Explain JOB Configuration, Parameterize Jobs",
    ],
    "Day 36: Jenkins Pipeline": [
      "Install Pipeline plugin",
      "Scripted Pipeline vs Declarative Pipeline",
      "Write a basic 4-stage pipeline",
      "Add Pull stage",
    ],
    "Day 37: Build Tool Maven": [
      "Install Maven",
      "Show creating Maven Project",
      "Explain Maven Dir Hierarchy, pom.xml file",
      "Explain Maven Phases",
      "Maven Clean Package to build .war artifact",
    ],
    "Day 38: Build Tool Maven": [
      "Integrate Maven in Jenkins",
      "Add Build Stage to Maven",
    ],
    "Day 39: Check Quality of Code (Sonarqube)": [
      "Explain Sonarqube",
      "Explain QA Result (bugs, vulnerabilities, code smell, etc)",
      "Create Sonarqube server",
      "Scan Project using Maven",
      "Create Quality Gate to explain code QA Failure",
    ],
    "Day 40: Check Quality of Code (Sonarqube)": [
      "Integrate Sonarqube with Jenkins",
      "Add Test stage",
      "Create webhook with Sonarqube for Quality Gate wait",
    ],
    "Day 41: Jenkins Pipeline": [
      "Store artifact (.war) to S3",
      "Add Deploy stage",
    ],
    "Day 42: Jenkins Pipeline": [
      "Create Infrastructure Pipeline with Pull, Test (tf plan), Deploy (tf apply) stage",
      "Create above pipeline to deploy EKS cluster",
    ],
    "Day 43: Jenkins Pipeline": [
      "Deploy three-tier application using pipeline on EKS",
    ],
    "Day 44:Revision Session (ONLY SATURDAY)": [
      "Recap of all key concepts covered Jenkins, Maven, Sonarqube",
    ],
    "Day 45: Monitoring Tool (Datadog)": [
      "Introduction to Datadog",
      "Installing the Datadog Agent on Linux, Docker",
      "Introduction to the Datadog UI",
      "Introduction to Infrastructure Monitoring",
      "Monitoring Hosts",
      "Monitoring Docker and Kubernetes",
    ],
    "Day 46: Monitoring Tool (Datadog)": [
      "Setting up Datadog agent on Kubernetes",
      "Host Maps and Container Maps",
      "Basic Integrations with AWS",
      "Understanding metrics in Datadog",
      "Types of metrics (gauge, counter, histogram)",
      "Collecting and visualizing metrics",
    ],
    "Day 47: Monitoring Tool (Datadog)": [
      "Custom Metrics in DataDog",
      "Sending custom metrics to Datadog",
      "Building basic dashboards for metrics",
      "Creating custom dashboards",
      "Timeboards and Screenboards",
    ],
    "Day 48: Monitoring Tool (Datadog)": [
      "Introduction to Log Management",
      "Collecting logs with the Datadog agent",
      "Introduction to alerting in Datadog",
      "Creating monitors and alerts",
    ],
    "Day 49: Revision Session (ONLY SATURDAY)": [
      "Comprehensive Q&A to cover remaining doubts and final concepts review",
    ],
    "Day 50: Exam (ONLY SATURDAY)": ["EXAM"],
  },
};

// Populate Main Topics based on selected Topic
document.getElementById("topic").addEventListener("change", function () {
  const topic = this.value;
  const mainTopicSelect = document.getElementById("mainTopic");
  const subtopicCheckboxGroup = document.getElementById(
    "subtopicCheckboxGroup"
  );

  mainTopicSelect.innerHTML = '<option value="">--Select Main Topic--</option>'; // Clear options
  subtopicCheckboxGroup.innerHTML = ""; // Clear subtopics

  if (topics[topic]) {
    Object.keys(topics[topic]).forEach((mainTopic) => {
      const option = document.createElement("option");
      option.value = mainTopic;
      option.textContent = mainTopic;
      mainTopicSelect.appendChild(option);
    });
  }
});

// Populate Subtopics based on selected Main Topic
document.getElementById("mainTopic").addEventListener("change", function () {
  const topic = document.getElementById("topic").value;
  const mainTopic = this.value;
  const subtopicCheckboxGroup = document.getElementById(
    "subtopicCheckboxGroup"
  );

  subtopicCheckboxGroup.innerHTML = ""; // Clear previous checkboxes

  if (topics[topic] && topics[topic][mainTopic]) {
    topics[topic][mainTopic].forEach((subtopic) => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = subtopic;
      checkbox.name = "subtopics";
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(` ${subtopic}`));
      subtopicCheckboxGroup.appendChild(label);
    });
  }
});

// Share on WhatsApp in YAML format
document.getElementById("whatsappShare").addEventListener("click", function () {
  const formData = new FormData(document.getElementById("dataForm"));
  const selectedSubtopics = Array.from(
    document.querySelectorAll('input[name="subtopics"]:checked')
  )
    .map((checkbox) => `  - ${checkbox.value}`)
    .join("\n");

  const yamlMessage = `
  - Date: ${formData.get("date")}
  - Trainer Name: ${formData.get("trainerName")}
  - Batch Name: ${formData.get("batchName")}
  - Batch Mode: ${formData.get("batchMode")}
  - Attendance: ${formData.get("attendance")}
  - Topic: ${formData.get("topic")}
  - Main Topic: ${formData.get("mainTopic")}
  - Subtopics:${selectedSubtopics}
      `.trim();

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(yamlMessage)}`;
  window.open(whatsappUrl, "_blank");
});

//   FOB BATCH CANCEL

function generateBatchFields() {
  const batchCount = document.getElementById("batchCount").value;
  const batchFieldsContainer = document.getElementById("batchFields");
  batchFieldsContainer.innerHTML = ""; // Clear previous fields

  for (let i = 1; i <= batchCount; i++) {
    const batchFieldHTML = `
        <div class="batch-field">
          <input type="text" id="batchNumber${i}" placeholder="Batch ${i} Number" required>
          <input type="time" id="time${i}" placeholder="Time" required>
          <select id="center${i}" required>
            <option value="Nagpur">Nagpur</option>
            <option value="Indore">Indore</option>
            <option value="Kothrud">Kothrud</option>
            <option value="Wakad">Wakad</option>
            <option value="Online">Online</option>
          </select>
        </div>
      `;
    batchFieldsContainer.innerHTML += batchFieldHTML;
  }
}

function shareOnWhatsApp() {
  const date = document.getElementById("dates").value;
  const trainerName = document.getElementById("trainersName").value;
  const reason = document.getElementById("reason").value;
  const batchCount = document.getElementById("batchCount").value;

  if (!date || !trainerName || !reason || batchCount < 1) {
    alert("Please fill in all fields.");
    return;
  }

  let batchDetails = "";
  for (let i = 1; i <= batchCount; i++) {
    const batchNumber = document.getElementById(`batchNumber${i}`).value;
    const time = document.getElementById(`time${i}`).value;
    const center = document.getElementById(`center${i}`).value;

    if (!batchNumber || !time || !center) {
      alert(`Please fill in all details for Batch ${i}`);
      return;
    }

    batchDetails += `
  - Batch: ${batchNumber}
  - Time: ${time} 
  - Center: ${center}
  `;
  }

  const message = `
  Batch Cancellation Notice:
  
  - Date: ${date}
  - Trainer Name: ${trainerName}
  - Reason: ${reason}
  ${batchDetails}
  Backup Session Required.
    `;

  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
}

// Initialize with 1 batch by default
generateBatchFields();
