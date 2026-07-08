interface ButtonProps {
  text: string;
  corDeFundo?: string;
  onClick?: () => void;
}

export function Button({ text, corDeFundo = "#0070f3", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        backgroundColor: corDeFundo,
        color: "#fff",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {text}
    </button>
  );
}
