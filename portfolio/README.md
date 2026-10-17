# Portfólio — Davi Nascimento

Site de portfólio (Full Stack Developer e UI/UX Designer) em HTML, CSS e JavaScript puros, sem dependências nem etapa de build.

## Como abrir
Dê dois cliques em `index.html`. Para publicar, envie a pasta inteira (Netlify, Vercel, GitHub Pages ou qualquer hospedagem estática).

## Estrutura
```
index.html                    conteúdo e estrutura das seções
css/style.css                 estilos, cores, animações e responsividade
js/main.js                    menu em tela cheia, carrosséis, galeria, popup de contato
assets/
  logo/logo.png               logo (cabeçalho, marca d'água, favicon)
  perfil/foto-davi.jpg        foto do hero e do menu (Sobre)
  menu/                       fotos do painel do menu, uma por seção
    menu-skills.webp
    menu-projetos.webp
    menu-experiencia.webp
    menu-contato.webp
  projetos/                   fotos dos carrosséis e da galeria, uma pasta por projeto
    scuderia/  protect-world/  system-wave/  portfolio/
```

## O que editar
- **Cores:** variáveis no começo de `css/style.css` (`:root`).
- **Foto:** substitua `assets/perfil/foto-davi.jpg` (mantenha o nome; de preferência retrato, cerca de 1200 x 1500 px).
- **Logo:** substitua `assets/logo/logo.png` (PNG com fundo transparente).
- **WhatsApp:** no começo de `js/main.js`, preencha `WHATSAPP_NUMERO` com código do país, DDD e número, só dígitos (ex.: `'5511999999999'`). Enquanto estiver vazio, o botão abre o formulário de contato.
- **LinkedIn, GitHub e Instagram:** em `index.html`, troque o `href="#"` desses links (na seção Contato e no rodapé do menu) pelas suas URLs.
- **E-mail de contato:** `EMAIL_CONTATO` no começo de `js/main.js` (e o texto do e-mail em `index.html`).
- **Fotos do menu:** troque os arquivos de `assets/menu/` (mantenha os nomes). As legendas de cada uma ficam em `VIEWS`, em `js/main.js`.
- **Textos, projetos e experiência:** direto em `index.html`.
- **Imagens dos carrosséis:** as fotos de cada projeto ficam em `assets/projetos/<projeto>/` e são listadas em `PHOTOS` no começo da seção "carousel" de `js/main.js` (a ordem da lista é a ordem dos slides). Para trocar ou adicionar, coloque o arquivo na pasta e ajuste a lista.

## Formulário de contato
O popup envia a mensagem pelo serviço gratuito FormSubmit (formsubmit.co) para o e-mail configurado. Na primeira mensagem enviada, o FormSubmit manda um e-mail de confirmação para esse endereço: clique no link dele para ativar. Faça esse primeiro teste com o site já publicado. Se o envio falhar, o popup oferece abrir a mensagem no app de e-mail da pessoa.

## Fontes
Space Grotesk, Inter e IBM Plex Mono, carregadas do Google Fonts (precisa de internet; sem ela o navegador usa uma fonte padrão).
