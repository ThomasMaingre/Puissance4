# Puissance 4 🔴 🟡

## Introduction

Il a fallu reproduire le jeu intéractif Puissance 4 en utilisant du Javascript pour offrir une expérience de jeu attrayante.

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Assurez-vous d'avoir installé Node.js sur votre machine.
3. Dans le répertoire du projet, exécutez la commande suivante pour installer les dépendances nécessaires :

```php
npm install
```

## Lancement

Après avoir installé les dépendances, exécutez la commande suivante pour lancer l'application :

```php
npm run start
```

## Présentation du projet

L’objectif principal était de créer une version jouable et divertissante du jeu Puissance 4. J’ai mis en œuvre les règles du jeu, développé une interface utilisateur réactive et intuitivement jouable, et ajouté des fonctionnalités telles que la détection des victoires et des égalités. Il fallait également créer un système de score entre les joueurs, ainsi qu’un reset pour pouvoir changer de joueur autant de fois qu’on le désire.

- Page d'inscription.
- Page de connexion.
- Une fois connecté, ces deux pages ne seront plus visibles.
- L'utilisateur peut sélectionner une image à partir de la galerie de son smartphone ou prendre une photo avec l'appareil photo.
- Possibilité d'activer le flash, de retourner la caméra.
- Une fois la photo prise, possibilité de reprendre la photo, de la sauvegarder dans sa galerie et d'envoyer la photo.
- Affichage de la liste des utilisateurs présent dans l'API.
- Sélection de la personne à qui envoyer l'image et choix de la durée d'affichage.
- Une section profil avec la possibilité de se déconnecter et recevoir des photos des autres utilisateurs.
- Affichage du nom de la personne qui vous a envoyé la photo ainsi que la photo qu'il a envoyé
- Une fois le temps écoulé, la photo disparaît et est supprimée de tous les supports de stockage. Cela est également signalé à l'API.

## API
L'application utilise l'API suivante : https://mysnapchat.epidoc.eu
