# 🧪 Plateforme d’évaluation QCMIAGE

Projet d’évaluation en ligne, utilisant :
- 🔧 Backend : NestJS
- 🎨 Frontend : Angular
- 🛢️ Base de données : PostgreSQL

---

#### 🔧 Lancer le serveur backend

```bash
cd backend
```
```bash
yarn install
```
```bash
yarn start:dev
```

#### 🎨 Lancer le serveur Frontend

```bash
cd frontend
```
```bash
yarn install
```
```bash
ng serve
```

#### 🛢️ initialiser la BDD PostgreSQL

```bash
createdb -U postgres qcmiage
```
```bash
psql -U postgres -d qcmiage -f backend/sql/setup_qcm_database.sql
```