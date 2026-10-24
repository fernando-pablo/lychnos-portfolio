import { site, projetos, servicos, etapas, tecnologias } from "@/data/site";

const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.mensagemWhatsapp
)}`;

// Lamparina (lychnos, em grego): o símbolo da marca
function Lamparina({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <radialGradient id="chama" cx="50%" cy="70%" r="60%">
          <stop offset="0%" stopColor="#FFF4D6" />
          <stop offset="45%" stopColor="#F6C25B" />
          <stop offset="100%" stopColor="#E08A2E" />
        </radialGradient>
      </defs>
      <path
        className="lamparina-chama"
        d="M92 30c-7 9-11 15-11 22a11 11 0 0 0 22 0c0-7-4-13-11-22z"
        fill="url(#chama)"
      />
      <path
        d="M14 72c0-9 16-14 40-14 14 0 26 2 33 5l12-6c2-1 4 1 3 3l-9 14c-5 9-21 15-39 15-23 0-40-7-40-17z"
        fill="currentColor"
      />
      <path d="M38 89h32l4 9H34z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="topo">
        <div className="container topo-linha">
          <a href="#inicio" className="marca" aria-label="Lychnos Tech, início">
            <Lamparina className="marca-icone" />
            <span>{site.marca}</span>
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
          <div className="hero-luz" aria-hidden="true" />
          <div className="container hero-grade">
            <div className="hero-texto">
              <h1>{site.titulo}</h1>
              <p className="hero-apresentacao">{site.apresentacao}</p>
              <div className="hero-acoes">
                <a className="botao" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Pedir orçamento no WhatsApp
                </a>
                <a className="botao botao-contorno" href="#projetos">
                  Ver projetos
                </a>
              </div>
              <p className="hero-local">Atendimento remoto a partir de {site.cidade}</p>
            </div>
            <Lamparina className="hero-lamparina" />
          </div>
        </section>

        <section id="projetos" className="secao">
          <div className="container">
            <h2>Projetos</h2>
            <p className="secao-intro">
              Projetos que desenvolvi, do problema à solução.
            </p>

            <div className="projetos">
              {projetos.map((p) => (
                <article key={p.nome} className="projeto">
                  <div className="projeto-tela">
                    {p.imagem ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.imagem} alt={`Tela do projeto ${p.nome}`} loading="lazy" />
                    ) : (
                      <div className="projeto-tela-vazia" aria-hidden="true">
                        <span />
                        <span />
                      </div>
                    )}
                  </div>
                  <div className="projeto-texto">
                    <h3>{p.nome}</h3>
                    <p className="projeto-problema">{p.problema}</p>
                    <p>{p.solucao}</p>
                    <ul className="etiquetas" aria-label="Tecnologias usadas">
                      {p.tecnologias.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    {(p.linkAoVivo || p.linkCodigo) && (
                      <div className="projeto-links">
                        {p.linkAoVivo && (
                          <a href={p.linkAoVivo} target="_blank" rel="noopener noreferrer">
                            Abrir o projeto
                          </a>
                        )}
                        {p.linkCodigo && (
                          <a href={p.linkCodigo} target="_blank" rel="noopener noreferrer">
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

        <section id="servicos" className="secao secao-clara">
          <div className="container">
            <h2>O que eu faço</h2>
            <div className="servicos">
              {servicos.map((s) => (
                <div key={s.nome} className="servico">
                  <h3>{s.nome}</h3>
                  <p>{s.descricao}</p>
                </div>
              ))}
            </div>
            <p className="tecnologias">
              Trabalho com {tecnologias.slice(0, -1).join(", ")} e {tecnologias[tecnologias.length - 1]}.
            </p>
          </div>
        </section>

        <section id="processo" className="secao">
          <div className="container">
            <h2>Como trabalho</h2>
            <ol className="etapas">
              {etapas.map((e) => (
                <li key={e.nome} className="etapa">
                  <h3>{e.nome}</h3>
                  <p>{e.descricao}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contato" className="secao contato">
          <div className="hero-luz hero-luz-contato" aria-hidden="true" />
          <div className="container contato-caixa">
            <h2>Tem uma ideia ou um problema para resolver?</h2>
            <p>Me conta o que você precisa. Respondo com uma proposta clara, sem compromisso.</p>
            <a className="botao" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Conversar no WhatsApp
            </a>
            <ul className="contato-links">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {site.marca}. Feito por {site.nome} com Next.js.
          </p>
        </div>
      </footer>
    </>
  );
}
