import React from "react";
import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import dadosIniciais from "./data/dados_iniciais.json";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-end"}
      />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
    </div>
  );
}

export default App;
