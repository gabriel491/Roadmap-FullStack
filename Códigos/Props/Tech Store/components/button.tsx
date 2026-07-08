interface ButtonProps {
  text: string;
  corDeFundo?: string;
}

export function Button({ text, corDeFundo = "#0070f3" }: ButtonProps) {
  return (
    <button
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
