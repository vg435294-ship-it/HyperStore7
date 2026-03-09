import { useEffect, useMemo, useState } from "react";

const initialProducts = [
  {
    id: 1,
    title: "Curso Online Completo",
    description: "Cursos completos com certificado e acesso online.",
    price: "R$ 160",
    badge: "Mais vendido",
    active: true,
  },
  {
    id: 2,
    title: "Curso Online Promocional",
    description: "Oferta especial para fechar rápido com suporte direto.",
    price: "R$ 65",
    badge: "Oferta",
    active: true,
  },
  {
    id: 3,
    title: "Pacote Premium",
    description: "Pacote avançado para quem quer mais conteúdo e suporte.",
    price: "R$ 249",
    badge: "Premium",
    active: false,
  },
];

const initialBenefits = [
  "Visual profissional e moderno",
  "Atendimento rápido via WhatsApp",
  "Página responsiva para celular e PC",
  "Estrutura fácil de editar",
];

const initialAccessLogs = [
  {
    id: 1,
    visitor: "Visitante 01",
    ip: "187.42.19.101",
    city: "Goiânia, GO",
    device: "Android",
    page: "Home",
    time: "09/03/2026 14:10",
  },
  {
    id: 2,
    visitor: "Visitante 02",
    ip: "177.91.22.88",
    city: "Anápolis, GO",
    device: "Windows",
    page: "Cursos",
    time: "09/03/2026 14:16",
  },
  {
    id: 3,
    visitor: "Visitante 03",
    ip: "2804:14c:8b21:aa00::12",
    city: "Brasília, DF",
    device: "iPhone",
    page: "Checkout",
    time: "09/03/2026 14:22",
  },
];

const initialFinance = [
  {
    id: 1,
    client: "Pedido #1001",
    amount: "R$ 160",
    method: "Pix",
    status: "Pago",
    date: "09/03/2026",
  },
  {
    id: 2,
    client: "Pedido #1002",
    amount: "R$ 65",
    method: "Cartão",
    status: "Aguardando",
    date: "09/03/2026",
  },
  {
    id: 3,
    client: "Pedido #1003",
    amount: "R$ 249",
    method: "Pix",
    status: "Pago",
    date: "08/03/2026",
  },
];

const initialSettings = {
  siteName: "Hyper Store7",
  heroTitle: "Cursos online com acesso rápido",
  heroSubtitle: "Escolha seu curso, fale no WhatsApp e comece hoje mesmo.",
  whatsapp: "5562982082344",
  footerText: "© 2026 Hyper Store7",
  adminPassword: "troque-essa-senha-123",
};

export default function HyperStore7ProfessionalSite() {
  const [admin, setAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [products, setProducts] = useState(initialProducts);
  const [benefits, setBenefits] = useState(initialBenefits);
  const [accessLogs] = useState(initialAccessLogs);
  const [finance] = useState(initialFinance);
  const [settings, setSettings] = useState(initialSettings);
  const [selectedProductId, setSelectedProductId] = useState(initialProducts[0].id);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
        event.preventDefault();
        setShowLogin(true);
        setError("");
      }
      if (event.key === "Escape") {
        setShowLogin(false);
        setPassword("");
        setError("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedProductId) || products[0],
    [products, selectedProductId]
  );

  const paidTotal = useMemo(() => {
    return finance
      .filter((item) => item.status === "Pago")
      .reduce((sum, item) => sum + Number(item.amount.replace(/[^\d,]/g, "").replace(",", ".")), 0)
      .toFixed(2)
      .replace(".", ",");
  }, [finance]);

  const activeProducts = products.filter((product) => product.active).length;

  const openAdmin = () => {
    setShowLogin(true);
    setError("");
  };

  const login = () => {
    if (password === settings.adminPassword) {
      setAdmin(true);
      setShowLogin(false);
      setPassword("");
      setError("");
      return;
    }
    setError("Senha incorreta");
  };

  const logout = () => {
    setAdmin(false);
    setActiveTab("dashboard");
  };

  const updateProduct = (id, field, value) => {
    setProducts((current) =>
      current.map((product) => (product.id === id ? { ...product, [field]: value } : product))
    );
  };

  const addProduct = () => {
    const nextId = products.length ? Math.max(...products.map((product) => product.id)) + 1 : 1;
    const newProduct = {
      id: nextId,
      title: "Novo curso",
      description: "Descrição do novo curso.",
      price: "R$ 0",
      badge: "Novo",
      active: false,
    };
    setProducts((current) => [...current, newProduct]);
    setSelectedProductId(nextId);
    setActiveTab("products");
  };

  const removeProduct = (id) => {
    const filtered = products.filter((product) => product.id !== id);
    setProducts(filtered);
    if (filtered.length) {
      setSelectedProductId(filtered[0].id);
    }
  };

  const updateSetting = (field, value) => {
    setSettings((current) => ({ ...current, [field]: value }));
  };

  const updateBenefit = (index, value) => {
    setBenefits((current) => current.map((item, i) => (i === index ? value : item)));
  };

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "products", label: "Produtos" },
    { id: "access", label: "Acessos" },
    { id: "finance", label: "Financeiro" },
    { id: "editor", label: "Editor do Site" },
  ];

  if (admin) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="border-b border-white/10 bg-zinc-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-purple-300">Painel administrativo</p>
              <h1 className="text-3xl font-black">{settings.siteName}</h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={addProduct}
                className="rounded-xl bg-purple-600 px-5 py-3 font-semibold"
              >
                Novo curso
              </button>
              <button
                onClick={logout}
                className="rounded-xl border border-white/10 px-5 py-3 font-semibold"
              >
                Voltar para site
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-white/10 bg-zinc-950 p-4">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full rounded-2xl px-4 py-3 text-left font-semibold transition ${
                    activeTab === tab.id ? "bg-purple-600 text-white" : "bg-white/5 text-zinc-300 hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </aside>

          <main className="space-y-6">
            {activeTab === "dashboard" && (
              <>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                    <p className="text-sm text-zinc-400">Cursos ativos</p>
                    <h2 className="mt-2 text-4xl font-black">{activeProducts}</h2>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                    <p className="text-sm text-zinc-400">Visitas registradas</p>
                    <h2 className="mt-2 text-4xl font-black">{accessLogs.length}</h2>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                    <p className="text-sm text-zinc-400">Pedidos</p>
                    <h2 className="mt-2 text-4xl font-black">{finance.length}</h2>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                    <p className="text-sm text-zinc-400">Recebido</p>
                    <h2 className="mt-2 text-4xl font-black">R$ {paidTotal}</h2>
                  </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-2xl font-bold">Cursos cadastrados</h3>
                      <span className="rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-300">
                        {products.length} itens
                      </span>
                    </div>
                    <div className="space-y-4">
                      {products.map((product) => (
                        <div key={product.id} className="rounded-2xl border border-white/10 p-4">
                          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                            <div>
                              <p className="text-sm text-purple-300">{product.badge}</p>
                              <h4 className="text-xl font-bold">{product.title}</h4>
                              <p className="mt-1 text-zinc-400">{product.description}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-black">{product.price}</p>
                              <p className={`text-sm ${product.active ? "text-green-400" : "text-yellow-400"}`}>
                                {product.active ? "Ativo" : "Oculto"}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                    <h3 className="text-2xl font-bold">Últimos acessos</h3>
                    <div className="mt-4 space-y-3">
                      {accessLogs.map((item) => (
                        <div key={item.id} className="rounded-2xl border border-white/10 p-4">
                          <div className="flex items-center justify-between gap-3">
                            <p className="font-semibold">{item.visitor}</p>
                            <span className="text-sm text-zinc-400">{item.time}</span>
                          </div>
                          <p className="mt-2 text-sm text-zinc-400">{item.city} • {item.device}</p>
                          <p className="mt-1 text-sm text-zinc-500">IP: {item.ip} • Página: {item.page}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "products" && selectedProduct && (
              <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
                <div className="rounded-3xl border border-white/10 bg-zinc-950 p-4">
                  <h3 className="mb-4 text-xl font-bold">Seus cursos</h3>
                  <div className="space-y-2">
                    {products.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => setSelectedProductId(product.id)}
                        className={`w-full rounded-2xl p-4 text-left ${
                          selectedProductId === product.id ? "bg-purple-600" : "bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        <p className="font-bold">{product.title}</p>
                        <p className="mt-1 text-sm text-zinc-300">{product.price}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold">Editar curso</h3>
                    <button
                      onClick={() => removeProduct(selectedProduct.id)}
                      className="rounded-xl border border-red-500/30 px-4 py-2 text-red-400"
                    >
                      Excluir
                    </button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-zinc-400">Título</label>
                      <input
                        className="w-full rounded-2xl bg-black p-4 outline-none"
                        value={selectedProduct.title}
                        onChange={(e) => updateProduct(selectedProduct.id, "title", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-zinc-400">Preço</label>
                      <input
                        className="w-full rounded-2xl bg-black p-4 outline-none"
                        value={selectedProduct.price}
                        onChange={(e) => updateProduct(selectedProduct.id, "price", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-zinc-400">Badge</label>
                      <input
                        className="w-full rounded-2xl bg-black p-4 outline-none"
                        value={selectedProduct.badge}
                        onChange={(e) => updateProduct(selectedProduct.id, "badge", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-zinc-400">Status</label>
                      <select
                        className="w-full rounded-2xl bg-black p-4 outline-none"
                        value={selectedProduct.active ? "active" : "hidden"}
                        onChange={(e) => updateProduct(selectedProduct.id, "active", e.target.value === "active")}
                      >
                        <option value="active">Ativo</option>
                        <option value="hidden">Oculto</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="mb-2 block text-sm text-zinc-400">Descrição</label>
                    <textarea
                      className="min-h-[140px] w-full rounded-2xl bg-black p-4 outline-none"
                      value={selectedProduct.description}
                      onChange={(e) => updateProduct(selectedProduct.id, "description", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "access" && (
              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold">Registro de acessos</h3>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-300">
                    Dados demonstrativos
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="text-zinc-400">
                      <tr className="border-b border-white/10">
                        <th className="px-4 py-3">Visitante</th>
                        <th className="px-4 py-3">IP</th>
                        <th className="px-4 py-3">Cidade</th>
                        <th className="px-4 py-3">Dispositivo</th>
                        <th className="px-4 py-3">Página</th>
                        <th className="px-4 py-3">Data e hora</th>
                      </tr>
                    </thead>
                    <tbody>
                      {accessLogs.map((item) => (
                        <tr key={item.id} className="border-b border-white/5">
                          <td className="px-4 py-4">{item.visitor}</td>
                          <td className="px-4 py-4">{item.ip}</td>
                          <td className="px-4 py-4">{item.city}</td>
                          <td className="px-4 py-4">{item.device}</td>
                          <td className="px-4 py-4">{item.page}</td>
                          <td className="px-4 py-4">{item.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "finance" && (
              <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                  <h3 className="text-2xl font-bold">Resumo financeiro</h3>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl bg-black p-5">
                      <p className="text-sm text-zinc-400">Total recebido</p>
                      <p className="mt-2 text-4xl font-black">R$ {paidTotal}</p>
                    </div>
                    <div className="rounded-2xl bg-black p-5">
                      <p className="text-sm text-zinc-400">Método principal</p>
                      <p className="mt-2 text-2xl font-bold">Pix</p>
                    </div>
                    <div className="rounded-2xl bg-black p-5">
                      <p className="text-sm text-zinc-400">Observação</p>
                      <p className="mt-2 text-zinc-300">
                        Use integração com Mercado Pago, Stripe ou Asaas para dados reais de pagamento.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                  <h3 className="text-2xl font-bold">Pedidos recentes</h3>
                  <div className="mt-4 space-y-3">
                    {finance.map((item) => (
                      <div key={item.id} className="rounded-2xl border border-white/10 p-4">
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                          <div>
                            <p className="font-bold">{item.client}</p>
                            <p className="mt-1 text-sm text-zinc-400">{item.method} • {item.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black">{item.amount}</p>
                            <p className={item.status === "Pago" ? "text-green-400" : "text-yellow-400"}>{item.status}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "editor" && (
              <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
                <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                  <h3 className="mb-6 text-2xl font-bold">Editar conteúdo do site</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm text-zinc-400">Nome do site</label>
                      <input
                        className="w-full rounded-2xl bg-black p-4 outline-none"
                        value={settings.siteName}
                        onChange={(e) => updateSetting("siteName", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-zinc-400">Título principal</label>
                      <input
                        className="w-full rounded-2xl bg-black p-4 outline-none"
                        value={settings.heroTitle}
                        onChange={(e) => updateSetting("heroTitle", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-zinc-400">Subtítulo</label>
                      <textarea
                        className="min-h-[120px] w-full rounded-2xl bg-black p-4 outline-none"
                        value={settings.heroSubtitle}
                        onChange={(e) => updateSetting("heroSubtitle", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-zinc-400">WhatsApp</label>
                      <input
                        className="w-full rounded-2xl bg-black p-4 outline-none"
                        value={settings.whatsapp}
                        onChange={(e) => updateSetting("whatsapp", e.target.value.replace(/\D/g, ""))}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-zinc-400">Rodapé</label>
                      <input
                        className="w-full rounded-2xl bg-black p-4 outline-none"
                        value={settings.footerText}
                        onChange={(e) => updateSetting("footerText", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-zinc-400">Senha do painel</label>
                      <input
                        type="password"
                        className="w-full rounded-2xl bg-black p-4 outline-none"
                        value={settings.adminPassword}
                        onChange={(e) => updateSetting("adminPassword", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
                  <h3 className="mb-6 text-2xl font-bold">Editar vantagens</h3>
                  <div className="space-y-4">
                    {benefits.map((item, index) => (
                      <div key={`${item}-${index}`}>
                        <label className="mb-2 block text-sm text-zinc-400">Vantagem {index + 1}</label>
                        <input
                          className="w-full rounded-2xl bg-black p-4 outline-none"
                          value={item}
                          onChange={(e) => updateBenefit(index, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">Acesso administrativo</h2>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full rounded-2xl bg-black p-4 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") login();
              }}
            />
            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
            <div className="mt-5 flex gap-3">
              <button onClick={login} className="rounded-2xl bg-purple-600 px-5 py-3 font-semibold">
                Entrar
              </button>
              <button
                onClick={() => {
                  setShowLogin(false);
                  setPassword("");
                  setError("");
                }}
                className="rounded-2xl border border-white/10 px-5 py-3 font-semibold"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="border-b border-white/10 bg-gradient-to-br from-black via-zinc-950 to-purple-950 px-6 py-24 text-center">
        <button onDoubleClick={openAdmin} className="text-5xl font-black md:text-6xl">
          {settings.siteName}
        </button>
        <p className="mt-6 text-2xl font-bold text-white">{settings.heroTitle}</p>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">{settings.heroSubtitle}</p>
        <a
          href={`https://wa.me/${settings.whatsapp}`}
          className="mt-8 inline-block rounded-2xl bg-purple-600 px-8 py-4 font-semibold"
        >
          Falar no WhatsApp
        </a>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {products.filter((product) => product.active).map((product) => (
          <div key={product.id} className="rounded-3xl bg-zinc-900 p-6 shadow-2xl">
            <div className="mb-2 text-sm text-purple-400">{product.badge}</div>
            <h3 className="text-2xl font-bold">{product.title}</h3>
            <p className="mt-3 text-zinc-400">{product.description}</p>
            <div className="mt-5 text-3xl font-black">{product.price}</div>
            <a
              href={`https://wa.me/${settings.whatsapp}`}
              className="mt-6 block rounded-2xl bg-purple-600 py-3 text-center font-semibold"
            >
              Comprar
            </a>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item, index) => (
          <div key={`${item}-${index}`} className="rounded-2xl bg-zinc-900 p-5 text-zinc-200">
            {item}
          </div>
        ))}
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-zinc-400">
        {settings.footerText}
      </footer>
    </div>
  );
}
