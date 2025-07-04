# MicroCommerce

MicroCommerce est une application e-commerce moderne basée sur une architecture microservices, développée avec **Spring Boot (Java)** pour le backend, **React + Vite + Material UI** pour le frontend, et orchestrée avec **Docker**. Elle propose une expérience utilisateur professionnelle, accessible et responsive.

---

## 🏗️ Architecture

- **API Gateway** (Spring Cloud Gateway) : point d'entrée unique, gestion du routage, CORS, sécurité.
- **Services** :
  - `customer-service` : gestion des clients
  - `product-service` : gestion des produits
  - `order-service` : gestion des commandes, communication inter-services (Feign)
- **Frontend** : React, Vite, Material UI, design moderne, responsive, accessible
- **Base de données** : PostgreSQL (une par service)
- **Communication** : REST, Feign Client, DTO
- **Sécurité** : Spring Security (préconfiguré, personnalisable)

---

## 🚀 Lancement rapide (avec Docker)

1. **Prérequis** : Docker & Docker Compose installés
2. **Lancer tous les services** :
   ```sh
   docker-compose up --build
   ```
3. Accéder à l'application :
   - Frontend : http://localhost:3000
   - API Gateway : http://localhost:8000
   - Services :
     - Customer : http://localhost:8081
     - Product : http://localhost:8082
     - Order : http://localhost:8083

---

## 🛠️ Lancement manuel (développement)

1. **Démarrer les bases PostgreSQL** :
   ```sh
   docker-compose up db-customer db-product db-order
   ```
2. **Démarrer chaque service Spring Boot** (dans chaque dossier service) :
   ```sh
   ./mvnw spring-boot:run
   ```
3. **Démarrer le frontend** :
   ```sh
   cd frontend
   npm install
   npm run dev
   ```

---

## 📁 Structure du projet

```
MicroCommerce/
  ├── customer-service/      # Service clients (Spring Boot)
  ├── product-service/       # Service produits (Spring Boot)
  ├── order-service/         # Service commandes (Spring Boot, Feign)
  ├── gateway/               # API Gateway (Spring Cloud Gateway)
  ├── frontend/              # Frontend React + Vite + Material UI
  ├── docker-compose.yml     # Orchestration multi-conteneurs
  └── init-multiple-db.sql   # Script d'initialisation des BDD
```

---

## 🔗 Endpoints principaux

- **API Gateway** : `/api/*` redirige vers les services
- **Produits** : `GET /api/products` (liste), `GET /api/products/{id}`
- **Clients** : `GET /api/customers`, `GET /api/customers/{id}`
- **Commandes** : `GET /api/orders`, `GET /api/orders/{id}`
- **Commande + client** : `GET /api/orders/{id}/with-customer`

---

## 🎨 Frontend

- **React + Vite + Material UI**
- Design moderne (palette crème, vert sauge, doré, noir, gris chaud)
- Responsive, menu burger, animations, accessibilité (focus visible, aria-label, navigation clavier)
- Pages : Accueil, Boutique, Contact, Avis, CGV, Mentions légales, etc.
- Connexion dynamique à l'API Gateway

---

## ⚙️ Configuration

- Variables de connexion BDD dans chaque `application.properties`
- Ports par défaut :
  - Gateway : 8000
  - Customer : 8081
  - Product : 8082
  - Order : 8083
  - Frontend : 3000
- CORS et sécurité configurés pour le développement

---

## 🧑‍💻 Bonnes pratiques & conseils

- **Microservices découplés** : chaque service peut évoluer indépendamment
- **API Gateway** : point d'entrée unique, sécurité centralisée
- **Gestion des erreurs** : 404 explicites, pas de 500 masquées
- **Frontend accessible** : navigation clavier, contrastes, responsive
- **Scripts SQL idempotents**
- **Utilisation de Feign pour la communication inter-services**

---

## 📣 Auteurs & contact

- Projet réalisé par [Votre Nom / Équipe]
- Contact : contact@microcommerce.fr

---

## 📝 Licence

Ce projet est open-source, sous licence MIT (ou à adapter selon vos besoins).
