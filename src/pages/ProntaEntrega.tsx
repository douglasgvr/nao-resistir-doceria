import React from "react";
import { Link } from "react-router-dom";
import "./ProntaEntrega.css";

const ProntaEntrega: React.FC = () => {
  return (
    <div className="pagina-pronta-entrega">
      {/* Cabeçalho */}
      <header className="cabecalho">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="titulo-pagina">Pronta Entrega</h1>

        <Link to="/" className="botao-voltar">
          ← Voltar
        </Link>
      </header>

      {/* Categorias */}
      <nav className="categorias">
        <button className="categoria">Copo Felicidade</button>
        <button className="categoria">Bolo Pote</button>
        <button className="categoria">Brownie Recheado</button>
        <button className="categoria">Brigadeiro</button>
      </nav>

      {/* Lista de Produtos */}
      <main className="produtos">
        <div className="produto">
          <div className="detalhes-produto">
            <h2 className="nome-produto">Bolo de Pote Chocolate</h2>
            <p className="descricao-produto">
              Massa de chocolate fofinha com recheio de chocolate, cobertura de
              chocolate e amor ❤️
            </p>
            <p className="preco-produto">R$ 12,00</p>
          </div>
          <img
            src="/public/img-produtos/bolo-pote-chocolate.png"
            alt="Bolo de Pote"
            className="foto-produto"
          />
        </div>
      </main>

      {/* Rodapé */}
      {/*<footer className="rodape">
        <p className="quantidade-total">1 Produtos</p>
        <p className="preco-total">R$ 12,00</p>
        <Link to="/carrinho" className="botao-ver-carrinho">
          Ver Meu Carrinho
        </Link>
      </footer>
      */}
    </div>
  );
};

export default ProntaEntrega;
