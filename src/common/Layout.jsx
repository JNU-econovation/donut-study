import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <nav></nav>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};
