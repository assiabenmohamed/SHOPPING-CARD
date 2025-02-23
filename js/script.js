// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
  // Sélection de l'élément affichant le total
  const totalPriceElement = document.querySelector(".total");
  let total = 0; // Initialisation du total à 0
  // Sélection de tous les produits dans le panier
  const products = document.querySelectorAll("img + .card-body");
  // Parcours de chaque produit pour calculer le total
  products.forEach((product) => {
    console.log(product); // Debug : Affichage du produit dans la console
    // Récupération de la quantité du produit
    const quantity = parseInt(product.querySelector(".quantity").textContent);
    // Récupération du prix unitaire du produit (en supprimant le "$")
    const unitPrice = parseFloat(
      product.querySelector(".unit-price").textContent.replace("$", "")
    );
    // Ajout du montant du produit au total (quantité * prix unitaire)
    total += quantity * unitPrice;
  });
  // Mise à jour du prix total affiché
  totalPriceElement.textContent = total + " $";
}
// Fonction pour augmenter la quantité d'un produit
function increment(btn) {
  // Sélection de l'élément contenant la quantité
  const valeur = btn.nextElementSibling; // "btn" est le bouton "+" cliqué
  // Conversion de la quantité actuelle en nombre entier
  let cmp = parseInt(valeur.textContent);
  // Incrémentation de la quantité
  cmp = cmp + 1;
  // Mise à jour de l'affichage de la quantité
  valeur.textContent = cmp;
  // Mise à jour du prix total après modification
  updateTotalPrice();
}
// Fonction pour diminuer la quantité d'un produit
function decrement(btn) {
  // Sélection de l'élément contenant la quantité
  const valeur = btn.previousElementSibling; // "btn" est le bouton "-" cliqué
  // Conversion de la quantité actuelle en nombre entier
  let cmp = parseInt(valeur.textContent);
  // Vérification que la quantité est supérieure à 0 avant de décrémenter
  if (cmp > 0) {
    cmp = cmp - 1;
    // Mise à jour de l'affichage de la quantité
    valeur.innerHTML = cmp;
    // Mise à jour du prix total après modification
    updateTotalPrice();
  }
}

// Fonction pour aimer un produit (changement de couleur du cœur)
function heart(heartbtn) {
  // Vérifie si le bouton est déjà rouge
  if (heartbtn.style.color == "red") {
    heartbtn.style.color = "black"; // Désactive le "like"
  } else {
    heartbtn.style.color = "red"; // Active le "like"
  }
}

// Fonction pour supprimer un produit du panier
function remove(removebtn) {
  // Sélection de l'élément parent du bouton supprimer (le produit entier)
  const totalPriceElement = document.querySelector(".total");
  const valeur = removebtn.parentElement.parentElement.parentElement;

  // Suppression de l'élément du DOM
  valeur.remove();

  // Mise à jour du prix total après suppression
  updateTotalPrice();
}
