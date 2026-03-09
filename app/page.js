export default function Page() {
  const products = [
    {
      title: "Curso Online Completo",
      description: "Cursos completos com certificado e acesso online.",
      price: "R$ 160",
      badge: "Mais vendido",
    },
    {
      title: "Curso Online Promocional",
      description: "Oferta especial para fechar rápido com suporte direto.",
      price: "R$ 65",
      badge: "Oferta",
    },
    {
      title: "Pacote Personalizado",
      description: "Montamos a melhor opção para seu objetivo e orçamento.",
      price: "Sob consulta",
      badge: "Flexível",
    },
  ];

  const benefits = [
    "Visual profissional e moderno",
    "Atendimento rápido via WhatsApp",
    "Página responsiva para celular e PC",
    "Seções prontas para produtos, depoimentos e FAQ",
    "Estrutura fácil de editar depois",
    "Ideal para vender cursos ou produtos digitais",
  ];

  const testimonials = [
    {
      name: "Cliente satisfeito",
      text: "Atendimento rápido e produto entregue certinho. Recomendo demais.",
    },
    {
      name: "Aluno aprovado",
      text: "Consegui acesso ao curso sem dor de cabeça e fui muito bem atendido.",
    },
    {
      name: "Compra tranquila",
      text: "Site bonito, fácil de entender e passou confiança na compra.",
    },
  ];

  const faqs = [
    {
      q: "Como recebo meu acesso?",
      a: "Após a confirmação, o atendimento envia todas as instruções diretamente no WhatsApp.",
    },
    {
      q: "O site funciona no celular?",
      a: "Sim. Ele funciona perfeitamente em celular e computador.",
    },
    {
      q: "Posso alterar textos e preços depois?",
      a: "Sim. Todo o conteúdo pode ser editado facilmente.",
    },
  ];

  return (
    <div style={{background:"#000",color:"#fff",fontFamily:"Arial",minHeight:"100vh"}}>

      <section style={{padding:"100px 20px",textAlign:"center"}}>
        <h1 style={{fontSize:"56px",fontWeight:"bold"}}>Hyper Store7</h1>
        <p style={{marginTop:"10px",fontSize:"18px",opacity:0.8}}>
          Cursos online com acesso rápido e certificado
        </p>

        <a
          href="https://wa.me/5562982082344"
          style={{
            display:"inline-block",
            marginTop:"30px",
            background:"linear-gradient(45deg,#7c3aed,#9333ea)",
            padding:"15px 35px",
            borderRadius:"12px",
            textDecoration:"none",
            color:"white",
            fontWeight:"bold"
          }}
        >
          Falar no WhatsApp
        </a>
      </section>

      <section style={{padding:"60px 20px",textAlign:"center"}}>
        <h2 style={{fontSize:"36px"}}>Vantagens</h2>

        <div style={{
          marginTop:"40px",
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"center",
          gap:"20px"
        }}>
          {benefits.map((item,i)=>(
            <div key={i} style={{
              background:"#111",
              padding:"25px",
              borderRadius:"12px",
              width:"250px"
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"80px 20px",textAlign:"center"}}>
        <h2 style={{fontSize:"36px"}}>Nossos Cursos</h2>

        <div style={{
          marginTop:"40px",
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"center",
          gap:"30px"
        }}>
          {products.map((p,i)=>(
            <div key={i} style={{
              background:"#111",
              padding:"30px",
              borderRadius:"14px",
              width:"260px"
            }}>
              <div style={{color:"#a855f7",fontSize:"14px"}}>{p.badge}</div>
              <h3 style={{marginTop:"10px"}}>{p.title}</h3>
              <p style={{opacity:0.7,fontSize:"14px"}}>{p.description}</p>
              <div style={{marginTop:"10px",fontWeight:"bold",fontSize:"20px"}}>
                {p.price}
              </div>

              <a
                href="https://wa.me/5562982082344"
                style={{
                  display:"block",
                  marginTop:"15px",
                  background:"#7c3aed",
                  padding:"10px",
                  borderRadius:"8px",
                  textDecoration:"none",
                  color:"white"
                }}
              >
                Comprar
              </a>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"60px 20px",textAlign:"center"}}>
        <h2 style={{fontSize:"34px"}}>Depoimentos</h2>

        <div style={{
          marginTop:"40px",
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"center",
          gap:"20px"
        }}>
          {testimonials.map((t,i)=>(
            <div key={i} style={{
              background:"#111",
              padding:"25px",
              borderRadius:"12px",
              width:"260px"
            }}>
              <p style={{opacity:0.8}}>“{t.text}”</p>
              <strong style={{display:"block",marginTop:"10px"}}>
                {t.name}
              </strong>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"60px 20px",textAlign:"center"}}>
        <h2 style={{fontSize:"34px"}}>Perguntas frequentes</h2>

        <div style={{marginTop:"30px",maxWidth:"600px",marginInline:"auto"}}>
          {faqs.map((f,i)=>(
            <div key={i} style={{
              background:"#111",
              padding:"20px",
              borderRadius:"10px",
              marginBottom:"15px"
            }}>
              <strong>{f.q}</strong>
              <p style={{opacity:0.8,marginTop:"5px"}}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{
        textAlign:"center",
        padding:"30px",
        opacity:0.6
      }}>
        © 2026 Hyper Store7
      </footer>

    </div>
  );
}
