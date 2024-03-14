import { Header } from "./Header";

export const LayOut = ({ children }) => {
  return (
    <>
      <Header />
      <nav></nav>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
