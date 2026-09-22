# IT Asset Manager

Full-stack IT Asset Manager built with **React, TypeScript, FastAPI & PostgreSQL**, with **Python** for automation and data importing.

## 🛠️ Tech Stack

### Backend

- 🐍 **Python + FastAPI** — REST API
- 🗄️ **PostgreSQL** — Relational database

### Importer

- 🐍 **Python** — Data importing and processing

### Testing

- 🧪 **pytest** — API & importer testing
- 🌐 **HTTPX** — HTTP/API testing

### Frontend

- ⚛️ **React + TypeScript**
- 🧰 **Redux Toolkit + RTK Query**
- 🎨 **Tailwind CSS + daisyUI**

### Infrastructure

- 🐳 **Docker + Docker Compose**

## ✨ Features

### API

- [x] REST API
- [x] Asset CRUD operations
- [x] Asset assignments
- [x] Asset lifecycle status

### Web

- [x] React frontend implementation
- [x] Asset CRUD interface
- [x] Asset assignment interface
- [x] Asset lifecycle status interface
- [x] User feedback (success/error states)

### Importer

- [ ] Python importer
- [ ] CSV parsing & validation
- [ ] API request integration
- [ ] Import error handling & reporting

### Infrastructure

- [ ] Docker / Docker Compose

## 📁 Structure

```text
asset-manager/
├── api/          # FastAPI
├── web/          # React
└── importer/     # Python
```

## 🚧 Status

* **API** — `FastAPI` → ✅ **Done**
* **Web** — `React` → ✅ **Done**
* **Importer** — `Python` → 🚧 **In Progress**

<!-- ```sh
python -m venv venv

.\venv\Scripts\Activate.ps1

pip install -r requirements.txt

python -m fastapi dev app/main.py

python -m pytest -s
``` -->