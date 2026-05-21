
# IntelliView

Un simulateur d'entretiens techniques propulsé par l'Intelligence Artificielle.

Démo dans le lien ci-contre : [generateur-entretien-ia.vercel.app](https://generateur-entretien-3mhlbtjap-boris-paly-s-projects.vercel.app?_vercel_share=vTDniqEygW7qU0RqazOjXlReIWGGhAj2)

## Présentation Globale

IntelliView est une Single Page Application (SPA) "serverless" conçue pour simuler des entretiens techniques. En exploitant l'API Mistral AI via un système de prompt engineering, l'application génère alors des guides d'entretien structurés en fonction d'un intitulé de poste. Ces guides comprennent des questions techniques, des scénarios comportementaux et des conseils stratégiques de réussite.

L'objectif d'ingénierie principal de ce projet est de fournir une application réactive et respectueuse de la vie privée, fonctionnant intégralement dans le navigateur du client, éliminant ainsi le besoin d'infrastructure backend ou de base de données externe.

## Points Clés de l'Architecture Technique

* Streaming de données en temps réel : Utilisation de l'API native `TextDecoder` et des `Readable Streams` pour traiter les réponses du LLM de manière asynchrone. Cette implémentation réduit considérablement la latence perçue en affichant le texte de manière séquentielle à mesure que les paquets de données sont reçus.
* Privacy by Design : Architecture "zéro backend". L'état de la session et l'historique de l'utilisateur sont sérialisés et persistés exclusivement via l'API native `LocalStorage` du navigateur, garantissant une confidentialité stricte des données.
* Exportation documentaire côté client : Intégration de `jsPDF` et des API natives `Blob` pour compiler et exporter les données de simulation sous forme de fichiers PDF ou Markdown directement sur l'appareil de l'utilisateur, contournant toute surcharge de traitement côté serveur.

## Stack Technique

* Framework : React 18 (via Vite)
* Style : Tailwind CSS v4
* Intégration IA : API Mistral (modèle `mistral-tiny`)
* Utilitaires : `jsPDF`, `react-markdown`

## Installation Locale

1. Cloner le dépôt et installer les dépendances :
   npm install

2. Configurer les variables d'environnement en créant un fichier .env à la racine :
   VITE_MISTRAL_API_KEY=votre_cle_api_mistral

3. Lancer le serveur
   npm run dev




ANGLAIS

# IntelliView

An AI-powered technical interview simulator.

Demo in the link to the right: [generateur-entretien-ia.vercel.app](https://generateur-entretien-3mhlbtjap-boris-paly-s-projects.vercel.app?_vercel_share=vTDniqEygW7qU0RqazOjXlReIWGGhAj2)

## Overview

IntelliView is a serverless Single Page Application (SPA) designed to simulate technical interviews. By leveraging the Mistral AI API via a prompt engineering system, the application generates structured interview guides based on a job title. These guides include technical questions, behavioral scenarios, and strategic tips for success.

The primary engineering objective of this project is to provide a responsive and privacy-respecting application that runs entirely within the client's browser, thus eliminating the need for backend infrastructure or an external database.

## Key Points of the Technical Architecture

* Real-time data streaming: Use of the native `TextDecoder` API and `Readable Streams` to process LLM responses asynchronously. This implementation significantly reduces perceived latency by displaying text sequentially as data packets are received.

* Privacy by Design: "Zero backend" architecture. Session state and user history are serialized and persisted exclusively via the browser's native `LocalStorage` API, ensuring strict data confidentiality.

* Client-side document export: Integration of `jsPDF` and native `Blob` APIs to compile and export simulation data as PDF or Markdown files directly to the user's device, bypassing any server-side processing overhead.

## Technical Stack

* Framework: React 18 (via Vite)
* Style: Tailwind CSS v4
* AI Integration: Mistral API (`mistral-tiny` template)
* Utilities: `jsPDF`, `react-markdown`

## Local Installation

1. Clone the repository and install the dependencies:

npm install

2. Configure environment variables by creating a .env file in the root directory:

VITE_MISTRAL_API_KEY=your_mistral_api_key

3. Start the server:

npm run dev




ESPAGNOL

# IntelliView

Un simulador de entrevistas técnicas con IA.

Demostración en el enlace de la derecha: [generateur-entretien-ia.vercel.app](https://generateur-entretien-3mhlbtjap-boris-paly-s-projects.vercel.app?_vercel_share=vTDniqEygW7qU0RqazOjXlReIWGGhAj2)

## Descripción general

IntelliView es una aplicación de una sola página (SPA) sin servidor diseñada para simular entrevistas técnicas. Mediante la API de IA de Mistral y un sistema de ingeniería de indicaciones, la aplicación genera guías de entrevista estructuradas basadas en el puesto de trabajo. Estas guías incluyen preguntas técnicas, escenarios de comportamiento y consejos estratégicos para el éxito.

El principal objetivo de ingeniería de este proyecto es proporcionar una aplicación responsiva y que respete la privacidad, que se ejecute completamente en el navegador del cliente, eliminando así la necesidad de infraestructura de backend o una base de datos externa.

## Puntos clave de la arquitectura técnica

* Transmisión de datos en tiempo real: Uso de la API nativa `TextDecoder` y `Readable Streams` para procesar las respuestas LLM de forma asíncrona. Esta implementación reduce significativamente la latencia percibida al mostrar el texto secuencialmente a medida que se reciben los paquetes de datos.

* Privacidad desde el diseño: Arquitectura sin backend. El estado de la sesión y el historial del usuario se serializan y almacenan exclusivamente mediante la API nativa `LocalStorage` del navegador, lo que garantiza una estricta confidencialidad de los datos.

* Exportación de documentos del lado del cliente: Integración de las API `jsPDF` y `Blob` nativas para compilar y exportar datos de simulación como archivos PDF o Markdown directamente al dispositivo del usuario, evitando cualquier procesamiento adicional en el servidor.

## Tecnologías utilizadas

* Framework: React 18 (a través de Vite)
* Estilo: Tailwind CSS v4
* Integración de IA: API de Mistral (plantilla `mistral-tiny`)
* Utilidades: `jsPDF`, `react-markdown`

## Instalación local

1. Clona el repositorio e instala las dependencias:

npm install

2. Configura las variables de entorno creando un archivo .env en el directorio raíz:

VITE_MISTRAL_API_KEY=tu_clave_api_mistral

3. Inicia el servidor:

npm run dev
