import CoffeeArabe from "../assets/coffeeArabe.png";
import CoffeeLeite from "../assets/coffeeLeite.png";
import CoffeeLatte from "../assets/coffeeLatte.png";
import CoffeeCubano from "../assets/coffeeCubano.png";
import CoffeeHavaino from "../assets/coffeeHavaiano.png";
import CoffeeIrlandes from "../assets/coffeeIrlandes.png";
import CoffeeExpresso from "../assets/coffeeExpresso.png";
import CoffeeAmericano from "../assets/coffeeAmericano.png";
import CoffeeCapuccino from "../assets/coffeeCapuccino.png";
import CoffeeMacchiato from "../assets/coffeeMacchiato.png";
import CoffeeMocaccino from "../assets/coffeeMochaccino.png";
import CoffeeExpressoGelado from "../assets/coffeeGelado.png";
import CoffeeExpressoCremoso from "../assets/coffeeExpressoCremoso.png";
import CoffeeChocholateQuente from "../assets/coffeeChocolateQuente.png";

export const coffeesList = [
  {
    id: 1,
    tag: ["Tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    image: CoffeeExpresso,
    price: 9.9,
  },
  {
    id: 2,
    tag: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    image: CoffeeAmericano,
    price: 9.9,
  },
  {
    id: 3,
    tag: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    image: CoffeeExpressoCremoso,
    price: 9.9,
  },
  {
    id: 4,
    tag: ["Tradicional", "Gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    image: CoffeeExpressoGelado,
    price: 9.9,
  },
  {
    id: 5,
    tag: ["Tradicional", "Com Leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    image: CoffeeLeite,
    price: 9.9,
  },
  {
    id: 6,
    tag: ["Tradicional", "Com Leite"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: CoffeeLatte,
    price: 9.9,
  },
  {
    id: 7,
    tag: ["Tradicional", "Com Leite"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: CoffeeCapuccino,
    price: 9.9,
  },
  {
    id: 8,
    tag: ["Tradicional", "Com Leite"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    image: CoffeeMacchiato,
    price: 9.9,
  },
  {
    id: 9,
    tag: ["Tradicional", "Com Leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    image: CoffeeMocaccino,
    price: 9.9,
  },
  {
    id: 10,
    tag: ["Especial", "Com Leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    image: CoffeeChocholateQuente,
    price: 9.9,
  },
  {
    id: 11,
    tag: ["Especial", "Alcoolico", "Gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: CoffeeCubano,
    price: 9.9,
  },
  {
    id: 12,
    tag: ["Especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    image: CoffeeHavaino,
    price: 9.9,
  },
  {
    id: 13,
    tag: ["Especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    image: CoffeeArabe,
    price: 9.9,
  },
  {
    id: 14,
    tag: ["Especial", "Alccolico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    image: CoffeeIrlandes,
    price: 9.9,
  },
];
