import streamlit as st
import numpy as np
from PIL import Image
import tensorflow as tf

# ================================
# Configuration de la page
# ================================
st.set_page_config(
    page_title="Système de Gestion des Déchets Hospitaliers",
    layout="centered"
)

st.title("🩺 Système de Gestion des Déchets Hospitaliers")

# Logo
logo_path = "logo_cameroun_medical.png"
try:
    st.image(logo_path, width=100)
except:
    st.info("🔔 Logo non trouvé. Ajoutez 'logo_cameroun_medical.png' dans le dossier.")

# ================================
# Chargement du modèle IA
# ================================
@st.cache_resource
def load_model():
    model = tf.keras.models.load_model("medical_waste_model_simple.h5", compile=False)
    return model

model = load_model()

# ================================
# Classes dans le même ordre que le dataset TensorFlow
# ================================
class_names = [
    'gauze',
    'glove_pair_latex',
    'glove_pair_nitrile',
    'glove_pair_surgery',
    'glove_single_latex',
    'glove_single_nitrile',
    'glove_single_surgery',
    'medical_cap',
    'medical_glasses',
    'shoe_cover_pair',
    'shoe_cover_single',
    'test_tube',
    'urine_bag'
]

IMG_SIZE = (180, 180)

# ================================
# Fonction de prédiction
# ================================
def predict_image_streamlit(image):
    # Conversion en RGB et redimensionnement
    img = image.convert("RGB").resize(IMG_SIZE)

    # Conversion en tableau numpy float32
    arr = np.array(img).astype("float32")

    # Préprocessing EfficientNet (comme à l'entraînement)
    arr = tf.keras.applications.efficientnet.preprocess_input(arr)

    # Ajouter la dimension batch
    arr = np.expand_dims(arr, axis=0)

    # Prédiction
    pred = model.predict(arr)
    cid = np.argmax(pred[0])
    confidence = pred[0][cid]

    return class_names[cid], confidence

# ================================
# Interface Streamlit
# ================================
st.header("🖼️ Importer une image de déchet hospitalier")

image_file = st.file_uploader("➡️ Sélectionnez une image", type=['png', 'jpg', 'jpeg'])

if image_file:
    img = Image.open(image_file).convert("RGB")
    st.subheader("Aperçu :")
    st.image(img, width=400)

    if st.button("🔍 Prédire le type de déchet"):
        with st.spinner("Analyse de l’image..."):
            predicted_class, confidence = predict_image_streamlit(img)

        st.success("🎉 Prédiction terminée !")
        st.write(f"### 🧠 Type de déchet détecté : **{predicted_class}**")
        st.write(f"🔎 Confiance : **{confidence*100:.2f}%**")

else:
    st.warning("⚠️ Aucune image importée.")
