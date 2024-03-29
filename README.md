# Projet Good Mood - Documentation Utilisateur

## Présentation du Projet

Le projet Good Mood a été conçu pour renforcer le bien-être au travail des collaborateurs de SatisfActes. L'objectif
principal est de développer une application interne permettant de mesurer et d'analyser l’humeur des employés de manière
régulière. Cette initiative s'inscrit dans une démarche de bien-être au travail, cruciale pour maintenir la
compétitivité et l'attrait de l'entreprise sur le marché du travail.

### Architecture du Projet

Le projet est constitué de plusieurs composants interconnectés pour assurer son bon fonctionnement. Voici une vue
d'ensemble de l'architecture :

- **Base de données PostgreSQL (postgres) version recommandée -> latest :** Stocke les données relatives aux réponses
  des questionnaires sur l'humeur des employés.

- **Application Quarkus (quarkus-app) version recommandée -> 3.6.X :** Le backend de l'application, construit avec
  Quarkus, gère la logique métier et communique avec la base de données. Il expose des API pour la collecte et l'analyse
  des données sur l'humeur.

- **Frontend React (Quinoa) version recommandée -> Node 20.10.X :** L'interface utilisateur est développée en React et
  servie par le gestionnaire de packages Quinoa. Elle permet aux utilisateurs de répondre aux questionnaires et de
  visualiser des statistiques sur leur humeur.

### Mise en Route du Projet

Suivez ces étapes pour mettre en route le projet sur votre environnement local.

#### Prérequis

Assurez-vous d'avoir installé Docker et Docker Compose sur votre machine. Référez-vous
au [site officiel de Docker](https://www.docker.com/products/docker-desktop/) pour installer Docker.

#### Étapes

1. **Clonage du Projet :**

   ```bash
   git https://github.com/killian-lgdr/Good-Mood.git
   cd Good-Mood
   ```

2. **Configuration de la Base de Données :**

   Aucune configuration n'est nécessaire pour la base de données PostgreSQL, car le conteneur Docker est configuré avec
   des paramètres par défaut. Cependant, assurez-vous que le port 5432 est disponible sur votre machine.

3. ```bash
   netstat -vanp tcp | grep 8080
   kill -9 <pid>
   ```

4. **Construction de l'Application Quarkus :**

   ```bash
   docker compose build quarkus-app
   ```

5. **Lancement du Projet :**

   ```bash
   docker compose up
   ```

   Cette commande démarre les services PostgreSQL et Quarkus. L'application sera accessible à l'
   adresse [http://localhost:8080](http://localhost:8080).

6. **Accès à l'Interface Utilisateur :**

   Ouvrez un navigateur web et accédez à [http://localhost:8080](http://localhost:8080) pour accéder à l'interface
   utilisateur.

7. **Répondre au Questionnaire :**

    - Connectez-vous à l'application.
    - Accédez à la section dédiée aux questionnaires.
    - Remplissez le questionnaire sur votre humeur actuelle.

8. **Créer et Supprimer un Questionnaire :**

    - Dans la section des questionnaires, vous avez la possibilité de créer un nouveau questionnaire. Cliquez sur le
      bouton "Création" dans l'onglet "Questionnaires", remplissez les détails nécessaires, et ajoutez les questions
      associées.

    - Pour supprimer un questionnaire existant, cliquez sur l'option de suppression correspondante au questionnaire que
      vous souhaitez supprimer.

9. **Visualiser les Statistiques :**

    - Naviguez vers la section "Accueil" pour obtenir des informations détaillées sur l'humeur des employés.

10. **Arrêt du Projet :**

    Pour arrêter le projet, utilisez la commande suivante dans le répertoire du projet :

    ```bash
    docker compose down
    ```

### Variables d'Environnement du Docker Compose

Le fichier `compose.yml` du projet utilise des variables d'environnement pour la configuration de l'application Quarkus.
Voici une explication des variables disponibles :

- **DATASOURCE_GENERATION (par défaut: drop-and-create) :** Cette variable détermine la génération de la base de données
  lors de la phase de développement. Vous pouvez la modifier si nécessaire.

- **DATASOURCE_SCRIPT (par défaut: import.sql) :** Spécifie le script SQL à exécuter lors de la création de la base de
  données en mode production.

- **DATASOURCE_USERNAME (par défaut: quarkus) :** Nom d'utilisateur de la base de données.

- **DATASOURCE_PASSWORD (par défaut: quarkus) :** Mot de passe de la base de données.

- **DATASOURCE_JDBC_URL (par défaut: jdbc:postgresql://postgres:5432/quarkus) :** URL JDBC de la base de données
  PostgreSQL.

Ces variables peuvent être ajustées en fonction de vos besoins spécifiques. Pour ce faire, modifiez le
fichier `compose.yml` avant de lancer le projet.

### Gestion des Dépendances et Versions Docker

Le projet utilise des images Docker pour encapsuler ses dépendances, assurant une gestion des versions facile et
reproductible. Les versions recommandées sont indiquées dans la documentation pour garantir la compatibilité et la
stabilité. Pour des mises