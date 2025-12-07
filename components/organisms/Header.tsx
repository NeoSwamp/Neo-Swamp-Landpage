import Head from "next/head";
import AtomLink from "@/components/atoms/Link/AtomLink";

const Header = () => {
  return (
    <>
      <Head>
        <title>Meu App</title>
        <meta name="description" content="Descrição do app" />
      </Head>

      <header className="p-4 bg-background text-foreground flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav>
          <AtomLink href="/about">Sobre</AtomLink>
          <AtomLink href="/contact" className="ml-4">
            Contato
          </AtomLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
