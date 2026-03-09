export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#ffffff",
      fontFamily: "Arial",
      padding: "40px"
    }}>

      <section style={{textAlign:"center",marginTop:"100px"}}>
        <h1 style={{fontSize:"50px"}}>Hyper Store7</h1>
        <p style={{fontSize:"18px",marginTop:"10px"}}>
          Cursos online com acesso rápido e certificado
        </p>

        <a
          href="https://wa.me/5562982082344"
          style={{
            display:"inline-block",
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
      </section>

      <section style={{marginTop:"120px",textAlign:"center"}}>
        <h2 style={{fontSize:"32px"}}>Nossos Cursos</h2>

        <div style={{
          display:"flex",
          gap:"30px",
          justifyContent:"center",
          marginTop:"40px",
          flexWrap:"wrap"
        }}>

          <div style={{
            background:"#111",
            padding:"30px",
            borderRadius:"12px",
            width:"250px"
          }}>
            <h3>Curso Completo</h3>
            <p>Todos os níveis com certificados</p>
            <strong>R$160</strong>
          </div>

          <div style={{
            background:"#111",
            padding:"30px",
            borderRadius:"12px",
            width:"250px"
          }}>
            <h3>Promoção</h3>
            <p>Acesso rápido com suporte</p>
            <strong>R$65</strong>
          </div>

        </div>
      </section>

      <footer style={{
        textAlign:"center",
        marginTop:"120px",
        opacity:"0.6"
      }}>
        © 2026 Hyper Store7
      </footer>

    </main>
  );
}
