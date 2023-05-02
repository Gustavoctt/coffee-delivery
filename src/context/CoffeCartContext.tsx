import { ReactNode, createContext, useState } from "react";
import { CoffeProps } from "../types/coffe";

interface CoffeCartContextType {
  coffeesCart: CoffeProps[];
  orderPrice: number;
  cartQuantity: number;
  addCoffeesToCart: (coffee: CoffeProps) => void;
  removeCoffeeToCart: (id: number) => void;
  increaseCoffeeQuantity: (id: number) => void;
  decreaseCoffeeQuantity: (id: number) => void;
}

interface CoffeCartContextProviderProps {
  children: ReactNode;
}

export const CoffeCartContext = createContext({} as CoffeCartContextType);

export function CoffeeCartContextProvider({
  children,
}: CoffeCartContextProviderProps) {
  const [coffeesCart, setCoffeesCart] = useState<CoffeProps[]>([]);

  const cartQuantity = coffeesCart.length;

  const orderPrice = coffeesCart.reduce((total, coffee) => {
    return total + coffee.price * coffee.quantity;
  }, 0);

  function addCoffeesToCart(coffee: CoffeProps) {
    const coffeeAlreadyExists = coffeesCart.find((coffeeItem) => {
      return coffeeItem.id === coffee.id;
    });

    if (!coffeeAlreadyExists) {
      setCoffeesCart((state) => [...state, coffee]);
    } else {
      setCoffeesCart((state) =>
        state.map((item) => {
          if (item.id === coffee.id) {
            return {
              ...item,
              quantity: item.quantity + coffee.quantity,
            };
          } else {
            return item;
          }
        })
      );
    }
  }

  function removeCoffeeToCart(id: number) {
    const cartWithoutDeletedOne = coffeesCart.filter((item) => {
      return item.id !== id;
    });

    setCoffeesCart(cartWithoutDeletedOne);
  }

  function increaseCoffeeQuantity(id: number) {
    setCoffeesCart((state) =>
      state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      })
    );
  }

  function decreaseCoffeeQuantity(id: number) {
    setCoffeesCart((state) =>
      state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <CoffeCartContext.Provider
      value={{
        coffeesCart,
        addCoffeesToCart,
        removeCoffeeToCart,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        cartQuantity,
        orderPrice,
      }}
    >
      {children}
    </CoffeCartContext.Provider>
  );
}
