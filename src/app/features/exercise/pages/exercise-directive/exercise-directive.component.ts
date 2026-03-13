import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import { Produit } from "./directive.interface";
import { NgClass } from "@angular/common";

@Component({
	selector: "exercise-directive",
	imports: [ExerciseHeaderComponent, NgClass],
	templateUrl: "./exercise-directive.component.html",
	styleUrl: "./exercise-directive.component.scss",
})
export class ExerciseDirectiveComponent {
	promo: boolean = true;
	produits: Produit[]= [
  {
    "nom": "iPhone 15 Pro",
    "photo": "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400",
    "prix": 1199.99,
    "prixPromo": 999.99,
    "qttRestante": 12
  },
  {
    "nom": "Samsung Galaxy S24",
    "photo": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
    "prix": 899.99,
    "prixPromo": 749.99,
    "qttRestante": 25
  },
  {
    "nom": "MacBook Air M3",
    "photo": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    "prix": 1299.99,
    "qttRestante": 8
  },
  {
    "nom": "Sony WH-1000XM5",
    "photo": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
    "prix": 379.99,
    "prixPromo": 279.99,
    "qttRestante": 34
  },
  {
    "nom": "iPad Pro 12.9\"",
    "photo": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    "prix": 1099.99,
    "qttRestante": 15
  },
  {
    "nom": "Nike Air Max 270",
    "photo": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    "prix": 149.99,
    "prixPromo": 99.99,
    "qttRestante": 0
  },
  {
    "nom": "Dyson V15 Detect",
    "photo": "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
    "prix": 749.99,
    "prixPromo": 599.99,
    "qttRestante": 0
  },
  {
    "nom": "Canon EOS R50",
    "photo": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    "prix": 849.99,
    "qttRestante": 9
  }
]
}
