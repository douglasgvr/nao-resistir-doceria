import { Link } from "react-router-dom";
import "./Home.css";

export function Home() {
  return (
    <div className="home-container">
      <img src="/public/img/logo.png" alt="" />
      <h1>Não resisti!</h1>
      <p className="bem-vindo">
        Seja bem-vindo(a)!
        <br />
        Escolha como vai preferir sua sobremesa.
        <br />
        Estamos oferecendo praticidade e sabor em cada detalhe.
      </p>

      {/* OPÇÕES */}
      <div className="opcoes">
        <div className="opcao">
          <img src="/public/img/delivery.jpg" alt="Delivery" />
          <h2>Delivery</h2>
          <Link to="/pronta-entrega">Cardápio</Link>
        </div>
        <div className="opcao">
          <img src="/public/img/encomendas.jpg" alt="Encomendas" />
          <h2>Encomendas</h2>
          <Link to="/encomendas">Cardápio</Link>
        </div>
        <div className="opcao">
          <img src="/public/img/novidades.png" alt="Novidades" />
          <h2>Novidades do Mês</h2>
          <Link to="/novidades">Cardápio</Link>
        </div>
      </div>

      <p className="final-texto">Escolha a melhor opção que atende você</p>

      <footer className="footer">@Criado por Douglas Coelho</footer>
    </div>
  );
}
