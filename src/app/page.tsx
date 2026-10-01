import { Header } from "@/components/header";
import { experiences, profile, skills } from "@/data/profile";

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Label({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span aria-hidden="true" />{children}</p>; }

export default function Home() {
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <div className="site-shell" id="inicio">
      <Header />
      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <Label>DESENVOLVEDORA BACKEND</Label>
            <h1 id="hero-title">Por trás de cada<br />conexão, uma<br /><span>boa solução.</span></h1>
            <p className="hero-intro">Olá, sou <strong>Kellén Raimundo.</strong> Transformo desafios em APIs, integrações e sistemas que se conectam — com código claro e propósito.</p>
            <div className="hero-actions"><a className="button button-dark" href="#experiencia">Conheça meu trabalho <Arrow /></a><a className="text-link" href="/curriculo-kellen-raimundo.pdf" download>Baixar currículo <span aria-hidden="true">↓</span></a></div>
            <p className="location"><span aria-hidden="true">⌖</span> {profile.location}</p>
          </div>
          <div className="system-art" role="img" aria-label="Ilustração de uma arquitetura backend conectando uma API a serviços, banco de dados e dispositivos IoT">
            <div className="art-topline"><span>UM POUCO DO MEU UNIVERSO</span><span>01 / BACKEND</span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="connector connector-horizontal" /><div className="connector connector-vertical" />
            <div className="system-node node-api"><span className="node-symbol">⌘</span><span>API REST</span><small>O ponto de conexão</small></div>
            <div className="system-node node-db"><span className="mini-icon">▤</span><span>PostgreSQL</span></div>
            <div className="system-node node-events"><span className="mini-icon">⇄</span><span>RabbitMQ</span></div>
            <div className="system-node node-cloud"><span className="mini-icon">☁</span><span>AWS & IoT</span></div>
            <div className="code-note"><span className="code-purple">const</span> conexao = &#123;<br />&nbsp; tecnologia: <span className="code-green">&apos;backend&apos;</span>,<br />&nbsp; propósito: <span className="code-green">&apos;resolver&apos;</span><br />&#125;;</div>
            <div className="art-bottomline"><span><i /> CONSTRUINDO CONEXÕES</span><span>Node.js + TypeScript</span></div>
          </div>
        </section>
        <div className="tech-strip" aria-label="Principais tecnologias"><span>MINHA BASE</span>{["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Docker", "AWS"].map(t => <span key={t}>{t}</span>)}</div>

        <section className="section about" id="sobre" aria-labelledby="about-title">
          <div><Label>01 / SOBRE MIM</Label><h2 id="about-title">Tecnologia feita<br />de <em>conexões.</em></h2></div>
          <div className="about-copy"><p>Gosto de entender como as coisas funcionam — e de encontrar maneiras de fazê-las funcionar melhor.</p><p>Sou desenvolvedora backend com foco em Node.js, NestJS e TypeScript. No dia a dia, construo APIs e microsserviços, integro sistemas e trabalho com soluções de Internet das Coisas.</p><p>Minha trajetória passou pelo atendimento e pelo suporte técnico. Essa experiência me ensinou a ouvir, investigar problemas e traduzir necessidades em soluções, colaborando com pessoas de diferentes áreas.</p><div className="about-facts"><span><strong>Em constante evolução</strong>Sistemas da Informação · Unisinos</span><span><strong>Comunicação além do código</strong>Inglês B2 · Intermediário</span></div></div>
        </section>

        <section className="section" id="atuacao" aria-labelledby="work-title">
          <div className="section-heading"><div><Label>02 / O QUE EU CONSTRUO</Label><h2 id="work-title">Do código à <em>conexão.</em></h2></div><p>Frentes que fazem parte<br />da minha experiência profissional.</p></div>
          <div className="work-grid">
            <article className="work-card"><div className="card-visual visual-api" aria-hidden="true"><span className="endpoint"><b>GET</b> /api/devices <i>200 OK</i></span><span className="endpoint"><b>POST</b> /api/events <i>201 CREATED</i></span><div className="visual-caption">&#123; soluções que se comunicam &#125;</div></div><div className="card-body"><span className="small-label">BACKEND & ARQUITETURA</span><h3>APIs & microsserviços</h3><p>Serviços com foco em performance, escalabilidade e manutenção. Integrações que conectam sistemas de forma organizada.</p><div className="tags"><span>Node.js</span><span>NestJS</span><span>TypeScript</span></div></div></article>
            <article className="work-card"><div className="card-visual visual-iot" aria-hidden="true"><div className="iot-flow"><span>device</span><b>···</b><span>gateway</span><b>···</b><span className="cloud">cloud ↗</span></div><div className="signal"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="visual-caption">conectando o físico ao digital</div></div><div className="card-body"><span className="small-label">CLOUD & INTERNET DAS COISAS</span><h3>Sistemas conectados</h3><p>Backend para soluções IoT, integração de dispositivos e gateways e troca de dados entre sistemas na nuvem.</p><div className="tags"><span>AWS</span><span>IoT</span><span>Docker</span></div></div></article>
            <article className="work-card"><div className="card-visual visual-events" aria-hidden="true"><div className="event-flow"><span>publish</span><b>→</b><span className="queue">▥ ▥ ▥</span><b>→</b><span>consume</span></div><div className="event-status"><i /> event.processed</div><div className="visual-caption">cada evento encontra seu caminho</div></div><div className="card-body"><span className="small-label">MENSAGERIA & PERFORMANCE</span><h3>Arquitetura orientada a eventos</h3><p>Comunicação assíncrona com RabbitMQ, estratégias de cache com Redis e dados estruturados em PostgreSQL.</p><div className="tags"><span>RabbitMQ</span><span>Redis</span><span>PostgreSQL</span></div></div></article>
          </div>
        </section>

        <section className="section experience" id="experiencia" aria-labelledby="experience-title"><div className="experience-heading"><Label>03 / TRAJETÓRIA</Label><h2 id="experience-title">Cada etapa,<br />um novo <em>olhar.</em></h2><p>Do contato com pessoas<br />à conexão entre sistemas.</p><a className="text-link" href="/curriculo-kellen-raimundo.pdf" download>Currículo completo <span aria-hidden="true">↓</span></a></div><div className="timeline">{experiences.map(job => <article className={`job ${job.current ? "current-job" : ""}`} key={job.role}><div className="job-meta"><span>{job.period}</span>{job.current && <span className="current-badge">Atualmente</span>}</div><h3>{job.role}</h3><p className="company">{job.company}</p><p>{job.description}</p><div className="tags">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

        <section className="section" id="stack" aria-labelledby="stack-title"><div className="section-heading"><div><Label>04 / FERRAMENTAS</Label><h2 id="stack-title">Minha caixa de <em>soluções.</em></h2></div><p>A tecnologia certa começa<br />por entender o problema.</p></div><div className="skills-grid">{skills.map(group => <article className="skill-card" key={group.number}><span className="skill-number">{group.number}</span><h3>{group.title}</h3><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div><p className="academic-note"><span aria-hidden="true">↳</span> Também estudo Java e Spring Boot na graduação, com foco em orientação a objetos e desenvolvimento de APIs.</p></section>

        <section className="section education" aria-labelledby="education-title"><div><Label>05 / FORMAÇÃO</Label><h2 id="education-title">Aprender faz<br />parte do <em>processo.</em></h2></div><div className="education-list"><article><span className="small-label">BACHARELADO · EM ANDAMENTO</span><h3>Sistemas da Informação</h3><p>Unisinos</p><span>Previsão de conclusão: dezembro de 2027</span></article><article><span className="small-label">FORMAÇÃO TÉCNICA</span><h3>Técnico em Informática</h3><p>Centro Sinodal de Ensino Médio</p></article></div></section>

        <section className="contact" id="contato" aria-labelledby="contact-title"><Label>VAMOS CONSTRUIR ALGO JUNTOS?</Label><div className="contact-row"><h2 id="contact-title">Boas ideias começam<br />com uma <em>conversa.</em></h2><a className="contact-arrow" href={`mailto:${profile.email}`} aria-label="Enviar um e-mail para Kellén"><Arrow /></a></div><div className="contact-bottom"><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div></section>
      </main>
      <footer><a className="wordmark" href="#inicio" aria-label="Voltar ao início">kr<span>.</span></a><p>© {new Date().getFullYear()} Kellén Raimundo</p><span>Feito com intenção. E Next.js.</span><a href="#inicio">Voltar ao topo ↑</a></footer>
    </div>
  </>;
}
