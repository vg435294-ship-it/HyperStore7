export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial"
    }}>
      <h1 style={{fontSize:"48px"}}>Hyper Store7</h1>
      <p style={{marginTop:"10px"}}>Cursos online com acesso rápido</p>

      <a
        href="https://wa.me/5562982082344"
        style={{
          marginTop:"30px",
          background:"#7c3aed",
          padding:"15px 30px",
          borderRadius:"10px",
          textDecoration:"none",
          color:"#fff",
          fontWeight:"bold"
        }}
      >
        Falar no WhatsApp
      </a>
    </main>
  );
}
