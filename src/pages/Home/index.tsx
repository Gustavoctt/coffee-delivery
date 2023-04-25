import { Banner } from "../../components/atoms/Banner";
import { CoffeeList } from "../../components/atoms/CoffeeList";
import { Header } from "../../components/atoms/Header";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CoffeeList />
    </>
  );
}
