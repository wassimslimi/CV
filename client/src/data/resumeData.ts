export const resumeData = {
  name: "Wessim Slimi",
  title: "DATA CONSULTANT & ML ENGINEER",
  contacts: {
    email: "pro.wessim.slimi@gmail.com",
    linkedin: "https://www.linkedin.com/in/wessim-slimi/",
    phone: "+33 6 49 98 56 63"
  },
  about: "Cloud Data Engineer & ML Engineer avec une expertise approfondie en architecture cloud, data engineering et machine learning. Expérience significative dans le déploiement de solutions de streaming en temps réel, la gestion des infrastructures Big Data et l'optimisation des systèmes à grande échelle. Certifié AWS Solutions Architect et Microsoft Azure Data Engineer.",
  experiences: [
    {
      title: "Cloud Data Architecture Consultant",
      company: "CMA-CGM (Freelance)",
      location: "Marseille, France",
      period: "Septembre 2021 – Présent",
      responsibilities: [
        "Mise en place d'un système de streaming en temps réel pour la collecte de données de navigation via des connexions satellite",
        "Déploiement d'un Data Lake basé sur Apache Iceberg sur Amazon S3 (format Parquet), intégré avec Snowflake et Athena pour des requêtes sécurisées et performantes",
        "Développement de pipelines en temps réel avec Apache Flink et Apache Kafka, et par batch avec Apache Spark en Java",
        "Migration d'une architecture locale vers AWS, intégrant des processus ETL/ELT et des traitements par flux et par lots",
        "Implémentation de modèles de maintenance prédictive pour optimiser les performances et réduire les pannes",
        "Déploiement et industrialisation de modèles ML sous forme d'APIs scalables"
      ]
    },
    {
      title: "Cloud ML Engineer",
      company: "MP DATA pour EDF Renouvelables",
      location: "Montpellier, France",
      period: "Août 2020 – Septembre 2021",
      responsibilities: [
        "Développement et mise en production de modèles de maintenance prédictive, détection de pannes et d'anomalies dans le domaine des énergies renouvelables",
        "Conception de pipelines de données temps réel & streaming pour l'analyse et le monitoring des équipements",
        "Déploiement et suivi des modèles ML dans des environnements cloud",
        "Définition des objectifs métier et des indicateurs de performance pour les projets data"
      ]
    },
    {
      title: "Data Scientist en Études Actuarielles",
      company: "AXA FRANCE IARD",
      location: "Paris, France",
      period: "Mars 2020 – Août 2020",
      responsibilities: [
        "Modélisation et prédiction de la probabilité de résiliation d'un contrat d'assurance auto",
        "Développement de modèles de tarification dynamique basés sur l'élasticité au prix (Partial Dependence Plots, SHAP Values)",
        "Optimisation de la prime commerciale en tenant compte des contraintes du marché",
        "Mise en place de pipelines de traitement de données de bout en bout, de la collecte à l'analyse"
      ]
    },
    {
      title: "Stage de développement en Machine Learning",
      company: "Grand Shooting",
      location: "Paris, France",
      period: "Mars 2019 – Août 2019",
      responsibilities: [
        "Création et déploiement de modèles de machine learning via une application Web/Desktop",
        "Création de modèles ML/DL sous TensorFlow et Scikit-learn (classification d'images, classification de textes, modélisation et prédiction de la demande de clients)",
        "Automatisation du cycle de vie des modèles via ingérence de données (via une API REST)",
        "Mise en place d'un module automatisant l'apprentissage et la sélection des modèles créés",
        "Manipulation de bases de données NoSQL via Google Cloud Platform, notamment BigQuery",
        "Déploiement des modèles en production",
        "Création d'interfaces et de dashboards via Python"
      ]
    }
  ],
  education: {
    institution: "IMT Atlantique (ex. Mines Telecom Bretagne)",
    degree: "Diplôme d'Ingénieur – Mathematical & Computational Engineering",
    period: "2018 – Dec 2020",
    location: "Brest, France",
    subjects: [
      "Théorie et application des algorithmes de Machine Learning & Deep Learning",
      "Optimisation mathématique sous contraintes",
      "Recherche opérationnelle",
      "Modélisation stochastique et analyse de données",
      "Programmation Orientée Objet, Bases de données SQL et NoSQL",
      "Développement en Python, Java et C++"
    ]
  },
  certifications: [
    "AWS Certified Solutions Architect - Associate",
    "DP-203: Microsoft Azure Data Engineer Associate",
    "DP-100: Microsoft Azure Data Scientist Associate",
    "AZ-104: Microsoft Azure Administrator",
    "AZ-900: Microsoft Azure Fundamentals",
    "CCNA 1, 2, 3: Réseaux, Sécurité et Automatisation"
  ],
  skills: {
    languages: ["Java", "Scala", "Python", "C++", "SQL"],
    cloudProviders: ["AWS", "Azure", "GCP"],
    frameworks: [
      "Spring", 
      "Apache Spark", 
      "Apache Flink", 
      "Apache Kafka", 
      "Apache Airflow", 
      "Apache Iceberg", 
      "Apache MLflow"
    ],
    libraries: [
      "Shap Values", 
      "CVXOpt", 
      "Scikit-learn", 
      "Keras", 
      "Catboost", 
      "TensorFlow", 
      "XGBoost", 
      "MLflow", 
      "Solver PLNE", 
      "Gurobi", 
      "CPlex"
    ],
    databases: [
      "PostgreSQL", 
      "MongoDB", 
      "Snowflake", 
      "Apache Iceberg", 
      "Apache Hive", 
      "Apache Cassandra"
    ],
    infrastructure: ["Docker", "Terraform", "Cloud Formation", "Azure ARM"],
    versioning: ["Git", "Gitlab", "Github"],
    methodologies: ["Agile", "DevOps"]
  }
};
