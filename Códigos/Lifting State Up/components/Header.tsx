interface HeaderProps {
  totalItens: number;
}

export function Header({ totalItens }: HeaderProps) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        borderRadius: "8px",
        fontFamily: "sans-serif",
      }}
    >
      <h2>🏪 Minha Loja</h2>
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>
        🛒 Carrinho:{" "}
        <span
          style={{
            backgroundColor: "#ff4d4d",
            padding: "2px 8px",
            borderRadius: "50%",
            fontSize: "14px",
          }}
        >
          {totalItens}
        </span>{" "}
      </div>
    </header>
  );
}
