---
title: "Explainer : la validation croisée (Lorem ipsum)"
date: 2026-06-28
categories:
  - explainer
domain: data-science
tags:
  - cross-validation
  - scikit-learn
excerpt: "Deep dive fictif sur un concept ML — texte placeholder Lorem Ipsum."
---

## Problem

Comment estimer la performance d'un modèle sur des données jamais vues ? Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Intuition

Imagine diviser tes données en plusieurs folds : chaque fold sert une fois de jeu de test. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.

## How it works

**k-fold cross-validation** : partition en k sous-ensembles, entraînement sur k−1, évaluation sur le fold restant. Répéter k fois et moyenner les scores.

## Example

```python
from sklearn.model_selection import cross_val_score
# scores = cross_val_score(model, X, y, cv=5)
```

Lorem ipsum — le code ci-dessus est illustratif, données fictives.

## When to use it

- Petits jeux de données
- Comparaison de modèles
- Éviter le sur-apprentissage sur un seul split

Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
