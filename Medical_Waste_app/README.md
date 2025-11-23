# 🧠 Medical Waste Classifier – Classification d’images de déchets hospitaliers

Ce projet est une application **Streamlit** permettant de prédire automatiquement le type de déchet médical à partir d’une image.  
Elle utilise un modèle **TensorFlow/Keras** entraîné sur un dataset multi-classe de déchets hospitaliers.

## 🚀 Fonctionnalités

- 📤 Upload d’image  
- 🤖 Prédiction automatique via un modèle CNN  
- 📊 Affichage du résultat et du score de confiance  
- 🌐 Déploiement facile sur Streamlit Cloud

## 📁 Arborescence du projet

```
project/
│── app.py
│── model/
│     └── medical_waste_model.h5
│── requirements.txt
│── README.md
└── images/
```

## 🛠️ Installation locale

### 1️⃣ Cloner le dépôt
git clone https://github.com/mon-compte/medical-waste-classifier.git  
cd medical-waste-classifier

### 2️⃣ Installer les dépendances
pip install -r requirements.txt

### 3️⃣ Lancer l’application
streamlit run app.py

## 📦 Déploiement sur Streamlit Cloud

1. Importer le projet sur GitHub  
2. Aller sur https://share.streamlit.io  
3. Connecter GitHub  
4. Choisir *app.py* comme main script  
5. Déployer

## 🧪 Classes supportées

- gauze  
- test_tube  
- shoe_cover_pair  
- glove_single_nitrile  
- glove_pair_latex  
- glove_pair_nitrile  
- medical_glasses  
- shoe_cover_single  
- glove_single_surgery  
- medical_cap  
- glove_single_latex  
- glove_pair_surgery  
- urine_bag  

## 🛠 Technologies

- Python 3  
- TensorFlow / Keras  
- Streamlit  
- NumPy  
- Pillow  

## 👤 Auteur
Projet développé par **Gabriel Ngoh**.
