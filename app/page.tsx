import { site, projetos, servicos, etapas, tecnologias } from "@/data/site";
import LogoMarca from "@/components/LogoMarca";
import Holofote from "@/components/Holofote";

const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensagemWhatsapp)}`;

// Rótulo de seção no estilo do "T E C H" do logo: letras espaçadas entre linhas de luz.
function Rotulo({ children }: { children: React.ReactNode }) {
  return (
    <p className="rotulo">
      <span aria-hidden="true" className="rotulo-linha" />
      {children}
      <span aria-hidden="true" className="rotulo-linha" />
    </p>
  );
}

const iconesServico = [
  // Sites
  <svg key="s" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 8h18M8 21h8M12 18v3" /></svg>,
  // Sistemas
  <svg key="si" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><path d="M14 17.5h7M17.5 14v7" /></svg>,
  // Automações
  <svg key="a" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>,
];

export default function Home() {
  return (
    <>
      <Holofote />
      <a className="pular" href="#conteudo">Pular para o conteúdo</a>

      <header className="topo">
        <div className="container topo-linha">
          <a href="#inicio" className="marca" aria-label={`${site.marca}, início`}>
            <LogoMarca className="marca-icone" />
            <span className="marca-nome">
              <span className="metal">LYCHNOS</span>
              <span className="marca-tech">TECH</span>
            </span>
          </a>
          <nav aria-label="Seções" className="menu">
            <a href="#projetos">Projetos</a>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como trabalho</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="botao botao-pequeno" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section id="inicio" className="hero">
          <div className="hero-ceu" aria-hidden="true" />
          <div className="container hero-centro">
            <div className="hero-emblema" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="emblema" src="/marca/lamparina-3d.jpg" alt="" width={800} height={800} />
            </div>

            <h1 className="hero-marca">
              <span className="metal metal-brilho">LYCHNOS</span>
              <span className="hero-tech">
                <span aria-hidden="true" className="linha-luz" />
                TECH
                <span aria-hidden="true" className="linha-luz" />
              </span>
            </h1>
            <p className="hero-slogan">{site.slogan}</p>

            <p className="hero-titulo">{site.titulo}</p>
            <p className="hero-apresentacao">{site.apresentacao}</p>

            <div className="hero-acoes">
              <a className="botao" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Pedir orçamento no WhatsApp
              </a>
              <a className="botao botao-contorno" href="#projetos">Ver projetos</a>
            </div>
            <p className="hero-local">Atendimento remoto a partir de {site.cidade}</p>
          </div>
          <div className="piso" aria-hidden="true" />
        </section>

        <section id="projetos" className="secao">
          <div className="container">
            <Rotulo>Projetos</Rotulo>
            <h2 className="secao-titulo">Do problema à solução</h2>

            <div className="projetos">
              {projetos.map((p, i) => (
                <article key={p.nome} className={`projeto ${i % 2 ? "projeto-invertido" : ""}`} data-luz>
                  <div className="projeto-tela">
                    {p.imagem ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.imagem} alt={`Tela do projeto ${p.nome}`} loading="lazy" />
                    ) : (
                      <div className="projeto-tela-vazia" aria-hidden="true">
                        <LogoMarca className="projeto-tela-logo" />
                      </div>
                    )}
                  </div>
                  <div className="projeto-texto">
                    <span className="projeto-numero" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{p.nome}</h3>
                    <p className="projeto-problema">{p.problema}</p>
                    <p>{p.solucao}</p>
                    <ul className="etiquetas" aria-label="Tecnologias usadas">
                      {p.tecnologias.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                    {p.selo && (
                      <p className="projeto-selo">
                        {p.selo}
                      </p>
                    )}
                    {(p.linkAoVivo || p.linkCodigo) && (
                      <div className="projeto-links">
                        {p.linkAoVivo && (
                          <a className="botao botao-pequeno" href={p.linkAoVivo} target="_blank" rel="noopener noreferrer">
                            {p.rotuloLink ?? "Abrir o projeto"}
                          </a>
                        )}
                        {p.linkCodigo && (
                          <a className="botao botao-pequeno botao-contorno" href={p.linkCodigo} target="_blank" rel="noopener noreferrer">
                            Ver o código
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="divisor" aria-hidden="true" />

        <section id="servicos" className="secao">
          <div className="container">
            <Rotulo>O que eu faço</Rotulo>
            <h2 className="secao-titulo">Soluções sob medida</h2>
            <div className="servicos">
              {servicos.map((s, i) => (
                <div key={s.nome} className="servico" data-luz>
                  <span className="servico-icone">{iconesServico[i % iconesServico.length]}</span>
                  <h3>{s.nome}</h3>
                  <p>{s.descricao}</p>
                </div>
              ))}
            </div>
            <ul className="tecnologias" aria-label="Tecnologias com que trabalho">
              {tecnologias.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </section>

        <div className="divisor" aria-hidden="true" />

        <section id="processo" className="secao">
          <div className="container">
            <Rotulo>Como trabalho</Rotulo>
            <h2 className="secao-titulo">Quatro etapas, sem surpresas</h2>
            <ol className="etapas">
              {etapas.map((e, i) => (
                <li key={e.nome} className="etapa">
                  <span className="etapa-numero metal" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{e.nome}</h3>
                  <p>{e.descricao}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contato" className="secao contato">
          <div className="contato-luz" aria-hidden="true" />
          <div className="container contato-caixa" data-luz>
            <LogoMarca className="contato-logo" />
            <h2 className="secao-titulo">Tem uma ideia ou um problema para resolver?</h2>
            <p>Me conta o que você precisa. Respondo com uma proposta clara, sem compromisso.</p>
            <a className="botao" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Conversar no WhatsApp
            </a>
            <ul className="contato-links">
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="container rodape-linha">
          <span className="marca-nome marca-nome-pequena">
            <span className="metal">LYCHNOS</span>
            <span className="marca-tech">TECH</span>
          </span>
          <p>© {new Date().getFullYear()} {site.marca}. {site.slogan}.</p>
        </div>
      </footer>
    </>
  );
}
