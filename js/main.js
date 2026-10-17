const LOGO = 'assets/logo/logo.png';
  document.querySelectorAll('img[data-logo]').forEach(i => i.src = LOGO);
  (() => { const l = document.createElement('link'); l.rel = 'icon'; l.href = LOGO; document.head.appendChild(l); })();

  // ===== Configure aqui seus contatos =====
  const EMAIL_CONTATO = 'davi.nascimento0907@gmail.com';
  const WHATSAPP_NUMERO = ''; // ex.: '5511999999999' (código do país + DDD + número, só dígitos)

  // custom cursor
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });
  function animateRing(){
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });

  // tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector('.tab-panel[data-panel="' + btn.dataset.tab + '"]').classList.add('active');
    });
  });

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal, .timeline');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el => observer.observe(el));

  // project card tilt
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${py * -6}deg) rotateY(${px * 6}deg) translateY(-2px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
    });
  });


  // ===== generated artwork (SVG data URIs) =====
  const C = {bg:'#f4f8ff',p:'#ffffff',p2:'#e3edff',b:'#1d5fe0',d:'#0b3a9e',c:'#38b6ff',l:'#8aa3d6',w:'#0a1b45'};
  const defsCore = `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.d}"/><stop offset="1" stop-color="${C.c}"/></linearGradient><pattern id="gr" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#1d5fe0" stroke-opacity=".09"/></pattern></defs>`;
  const bgR = h => `<rect width="800" height="${h}" fill="${C.bg}"/><rect width="800" height="${h}" fill="url(#gr)"/>`;
  const defs = defsCore + bgR(520);
  const frame = (inner, url) => `<rect x="60" y="50" width="680" height="420" rx="6" fill="${C.p}" stroke="#78a0e6" stroke-opacity=".3"/><rect x="60" y="50" width="680" height="34" rx="6" fill="${C.p2}"/><circle cx="82" cy="67" r="5" fill="${C.b}"/><circle cx="100" cy="67" r="5" fill="${C.c}"/><circle cx="118" cy="67" r="5" fill="${C.l}"/><rect x="250" y="58" width="300" height="18" rx="9" fill="${C.bg}"/><text x="400" y="71" fill="${C.l}" font-size="10" font-family="monospace" text-anchor="middle">${url}</text>` + inner;
  const ART = {
    ecom: () => frame(`<rect x="80" y="100" width="640" height="110" fill="url(#g)"/><rect x="104" y="128" width="260" height="16" fill="#fff"/><rect x="104" y="156" width="170" height="10" fill="#fff" opacity=".7"/><rect x="104" y="180" width="90" height="16" fill="${C.bg}"/>` + [0,1,2,3].map(i=>`<rect x="${80+i*164}" y="226" width="148" height="220" fill="${C.bg}" stroke="#78a0e6" stroke-opacity=".2"/><circle cx="${154+i*164}" cy="300" r="36" fill="${i%2?C.b:C.c}" opacity=".85"/><rect x="${96+i*164}" y="372" width="100" height="8" fill="${C.w}" opacity=".8"/><rect x="${96+i*164}" y="390" width="60" height="8" fill="${C.l}"/><rect x="${96+i*164}" y="414" width="116" height="20" fill="${C.b}"/>`).join(''), 'scuderia/loja'),
    dash: () => frame(`<rect x="60" y="84" width="130" height="386" fill="${C.p2}"/>` + [0,1,2,3,4].map(i=>`<rect x="78" y="${108+i*34}" width="${i==1?92:70}" height="10" fill="${i==1?C.c:C.l}" opacity="${i==1?1:.5}"/>`).join('') + [0,1,2].map(i=>`<rect x="${212+i*170}" y="104" width="154" height="74" fill="${C.bg}" stroke="#78a0e6" stroke-opacity=".2"/><rect x="${228+i*170}" y="124" width="60" height="8" fill="${C.l}"/><rect x="${228+i*170}" y="146" width="90" height="18" fill="${C.c}"/>`).join('') + `<rect x="212" y="198" width="508" height="252" fill="${C.bg}" stroke="#78a0e6" stroke-opacity=".2"/>` + [60,110,80,150,120,190,160,210].map((h,i)=>`<rect x="${236+i*58}" y="${430-h}" width="32" height="${h}" fill="${i%2?C.b:C.c}" opacity=".9"/>`).join('') + `<path d="M236 380 L330 330 L400 350 L500 270 L600 290 L700 230" fill="none" stroke="${C.w}" stroke-width="2.5"/>`, 'protectworld/admin'),
    landing: () => frame(`<circle cx="560" cy="260" r="130" fill="url(#g)" opacity=".85"/><circle cx="560" cy="260" r="90" fill="none" stroke="#fff" stroke-opacity=".7"/><rect x="104" y="170" width="330" height="26" fill="${C.w}"/><rect x="104" y="212" width="250" height="26" fill="${C.w}"/><rect x="104" y="262" width="300" height="9" fill="${C.l}"/><rect x="104" y="282" width="240" height="9" fill="${C.l}"/><rect x="104" y="324" width="130" height="38" fill="${C.b}"/><circle cx="470" cy="352" r="18" fill="none" stroke="${C.c}" stroke-width="2"/><circle cx="470" cy="352" r="3" fill="${C.c}"/>`, 'systemwave'),
    brand: () => frame(`<g transform="translate(260 270)">` + [110,80,50].map((r,i)=>`<circle r="${r}" fill="none" stroke="${i==1?C.c:C.b}" stroke-width="${i==2?14:2}" opacity="${1-i*.15}"/>`).join('') + `<path d="M-30 20 L0 -34 L30 20 Z" fill="${C.w}"/></g>` + [C.d,C.b,C.c,C.w,C.l].map((c,i)=>`<rect x="470" y="${110+i*68}" width="210" height="52" fill="${c}"/><rect x="470" y="${110+i*68}" width="52" height="52" fill="${C.bg}" opacity=".25"/>`).join(''), 'identidade'),
    iso: () => [[400,250,1],[290,310,.8],[510,310,.8],[400,370,.65]].map(([x,y,k])=>{const a=90*k,h=100*k;return `<g transform="translate(${x} ${y})"><polygon points="0,${-h} ${a},${-h+a/2} 0,${-h+a} ${-a},${-h+a/2}" fill="${C.c}"/><polygon points="${-a},${-h+a/2} 0,${-h+a} 0,${a} ${-a},${a/2}" fill="${C.b}"/><polygon points="0,${-h+a} ${a},${-h+a/2} ${a},${a/2} 0,${a}" fill="${C.d}"/></g>`}).join('') + `<ellipse cx="400" cy="440" rx="240" ry="26" fill="${C.b}" opacity=".15"/>`,
    ui: () => [0,1,2].map(i=>`<g transform="translate(${130+i*210} ${i==1?50:80})"><rect width="170" height="${i==1?420:380}" rx="22" fill="${C.p}" stroke="#78a0e6" stroke-opacity=".35" stroke-width="2"/><rect x="14" y="18" width="142" height="${i==1?110:90}" rx="8" fill="${i==1?'url(#g)':C.p2}"/><rect x="14" y="${i==1?146:126}" width="100" height="9" fill="${C.w}"/><rect x="14" y="${i==1?166:146}" width="70" height="7" fill="${C.l}"/>` + [0,1,2].map(j=>`<rect x="14" y="${(i==1?190:170)+j*52}" width="142" height="40" rx="6" fill="${C.bg}"/><circle cx="34" cy="${(i==1?210:190)+j*52}" r="10" fill="${j%2?C.c:C.b}"/><rect x="54" y="${(i==1?205:185)+j*52}" width="70" height="7" fill="${C.w}" opacity=".7"/>`).join('') + `</g>`).join(''),
    code: () => frame(`<rect x="80" y="100" width="640" height="350" fill="${C.bg}"/>` + [[0,120,C.c],[1,200,C.w],[1,90,C.b],[2,260,C.l],[2,150,C.c],[1,180,C.w],[0,90,C.b],[1,240,C.l],[2,110,C.c],[2,200,C.w],[0,140,C.c],[1,100,C.b],[2,220,C.l],[1,160,C.w]].map(([ind,w,c],i)=>`<text x="96" y="${126+i*22}" fill="${C.l}" opacity=".5" font-size="11" font-family="monospace">${i+1}</text><rect x="${128+ind*28}" y="${118+i*22}" width="${w}" height="8" rx="2" fill="${c}" opacity=".9"/>`).join(''), 'index.php')
  };
  const art = k => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">${defs}${ART[k]()}</svg>`);
  const artTall = k => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">${defsCore}<defs><linearGradient id="tg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a78f0"/><stop offset="1" stop-color="#0a2f86"/></linearGradient><pattern id="tp" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#fff" stroke-opacity=".1"/></pattern></defs><rect width="800" height="1000" fill="url(#tg)"/><rect width="800" height="1000" fill="url(#tp)"/><g transform="translate(-60 190) scale(1.15)">${ART[k]()}</g></svg>`);
  // Para usar sua foto real: coloque o caminho ou a URL da imagem aqui, por exemplo 'minha-foto.jpg'
  const FOTO_PERFIL = 'assets/perfil/foto-davi.jpg';
  document.getElementById('heroPhoto').src = FOTO_PERFIL;
  const portrait = () => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000"><defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a78f0"/><stop offset="1" stop-color="#0a2f86"/></linearGradient><linearGradient id="pf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#bfe0ff"/></linearGradient><pattern id="pp" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#fff" stroke-opacity=".1"/></pattern></defs><rect width="800" height="1000" fill="url(#pg)"/><rect width="800" height="1000" fill="url(#pp)"/><circle cx="400" cy="430" r="340" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="2"/><circle cx="400" cy="430" r="250" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="2"/><circle cx="400" cy="430" r="235" fill="#fff" fill-opacity=".08"/><circle cx="400" cy="400" r="105" fill="url(#pf)"/><path d="M170 1000 C170 760 260 640 400 640 C540 640 630 760 630 1000 Z" fill="url(#pf)"/><text x="96" y="250" font-family="monospace" font-size="72" fill="#fff" opacity=".4">&lt;/&gt;</text><path d="M560 230 C650 230 640 340 710 340" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/><circle cx="560" cy="230" r="10" fill="#fff"/><rect x="702" y="332" width="16" height="16" fill="#fff"/><rect x="110" y="640" width="26" height="26" fill="none" stroke="#fff" stroke-width="3" opacity=".6" transform="rotate(20 123 653)"/><circle cx="690" cy="620" r="14" fill="#8fd6ff"/></svg>`);
  const META = {
    ecom:['E-commerce','Loja Scuderia Pro Autoparts'], dash:['Painel','Admin da Protect World'],
    landing:['Landing page','System Wave'], brand:['Identidade','Sistema visual & logo'],
    iso:['3D & Motion','Estudos isométricos'], ui:['UI/UX','Telas mobile'], code:['Código','Back-end em PHP']
  };

  // ===== fotos reais dos projetos (assets/projetos/<projeto>/) =====
  const P = (pasta, arq, alt, cat) => ({src: 'assets/projetos/' + pasta + '/' + arq, alt, cat});
  const PHOTOS = {
    'scuderia': [
      P('scuderia','01-site-home.webp','Página inicial do site da Scuderia Pro Autoparts','Site'),
      P('scuderia','02-mercado-livre-anuncios.webp','Gestão de anúncios no Mercado Livre','Integração'),
      P('scuderia','03-mercado-livre-vendas.webp','Painel de vendas do Mercado Livre','Integração'),
      P('scuderia','04-estoque-pedido.webp','Conferência de pedido no estoque','Operação'),
      P('scuderia','05-peca-pistao.webp','Pistão da linha de peças do catálogo','Catálogo'),
      P('scuderia','06-pedidos-embalados.webp','Pedidos embalados para envio','Operação'),
      P('scuderia','07-bastidores.webp','Bastidores no escritório da Scuderia','Bastidores')
    ],
    'protect-world': [
      P('protect-world','01-loja-home.webp','Página inicial da loja Protect World','Loja'),
      P('protect-world','02-layout-home.webp','Layout da home com banner de ofertas e lançamentos','Layout'),
      P('protect-world','03-produto.webp','Foto de produto da linha PW Clean','Produto')
    ],
    'system-wave': [
      P('system-wave','01-landing-hero.webp','Seção principal da landing page da System Wave','Landing page'),
      P('system-wave','02-landing-servicos.webp','Seções de soluções e parceria da landing page','Landing page'),
      P('system-wave','03-posts-redes-sociais.webp','Posts para redes sociais da System Wave','Social media')
    ],
    'portfolio': [
      P('portfolio','01-roboteen-site.webp','Site do projeto Roboteen','Site'),
      P('portfolio','02-plantsp-home.webp','Página inicial da loja de plantas PlantSP','UI/UX'),
      P('portfolio','03-plantsp-mais-vendidos.webp','Seção de mais vendidos da PlantSP','UI/UX'),
      P('portfolio','04-plantsp-produto.webp','Página de produto da PlantSP','UI/UX'),
      P('portfolio','05-jogo-pagina.webp','Página de divulgação de um jogo','Jogos'),
      P('portfolio','06-escultura-blender.webp','Escultura modelada no Blender','3D'),
      P('portfolio','07-personagem-foxy.webp','Render de personagem em 3D','3D'),
      P('portfolio','08-vilao-malha-3d.webp','Modelo 3D de vilão com malha à mostra','3D'),
      P('portfolio','09-robo-modelagem.webp','Modelagem 3D de um robô','3D'),
      P('portfolio','10-rede-packet-tracer.webp','Topologia de rede montada no Packet Tracer','Redes')
    ]
  };

  // ===== carousel component =====
  function makeCarousel(el, keys, o = {}){
    const dur = o.dur || 4500;
    el.innerHTML = '';
    el.style.setProperty('--dur', dur + 'ms');
    const slides = keys.map((k, n) => {
      const it = typeof k === 'string' ? {src: art(k), alt: META[k][1], cat: META[k][0]} : k;
      const d = document.createElement('div'); d.className = 'car-slide';
      d.innerHTML = `<img src="${it.src}" alt="${it.alt}"${n ? ' loading="lazy"' : ''} decoding="async">` + (o.caption ? `<div class="car-cap"><small>${it.cat}</small>${it.alt}</div>` : '');
      el.appendChild(d); return d;
    });
    let idx = 0, timer = null, paused = false;
    const bar = document.createElement('div'); bar.className = 'car-bar'; el.appendChild(bar);
    const dots = document.createElement('div'); dots.className = 'car-dots';
    const dotEls = keys.map((_, i) => { const b = document.createElement('button'); b.setAttribute('aria-label', 'Slide ' + (i+1)); b.onclick = () => go(i); dots.appendChild(b); return b; });
    if(keys.length > 1){
      el.appendChild(dots);
      ['prev','next'].forEach(t => { const b = document.createElement('button'); b.className = 'car-btn car-' + t; b.textContent = t === 'prev' ? '←' : '→'; b.setAttribute('aria-label', t === 'prev' ? 'Anterior' : 'Próximo'); b.onclick = () => go(idx + (t === 'prev' ? -1 : 1)); el.appendChild(b); });
    }
    function show(){
      slides.forEach((s, i) => s.classList.toggle('active', i === idx));
      dotEls.forEach((d, i) => d.classList.toggle('active', i === idx));
      bar.classList.remove('run'); void bar.offsetWidth; if(!paused && keys.length > 1) bar.classList.add('run');
    }
    function schedule(){ clearTimeout(timer); if(keys.length > 1 && !paused) timer = setTimeout(() => go(idx + 1), dur); }
    function go(n){ idx = (n + keys.length) % keys.length; show(); schedule(); }
    el.addEventListener('mouseenter', () => { paused = true; clearTimeout(timer); bar.classList.remove('run'); });
    el.addEventListener('mouseleave', () => { paused = false; show(); schedule(); });
    let sx = null;
    el.addEventListener('touchstart', e => sx = e.touches[0].clientX, {passive:true});
    el.addEventListener('touchend', e => { if(sx === null) return; const dx = e.changedTouches[0].clientX - sx; if(Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1)); sx = null; });
    show(); schedule();
    return { destroy(){ clearTimeout(timer); } };
  }

  document.querySelectorAll('.pj-img').forEach((el, i) => makeCarousel(el, el.dataset.photos ? PHOTOS[el.dataset.photos] : el.dataset.art.split(','), {dur: 3600 + i * 400}));

  // ===== gallery =====
  const track = document.getElementById('galTrack');
  // Só os trabalhos de destaque (reaproveita as fotos de assets/projetos/). Título, categoria e alt de cada um:
  const G = (pasta, arq, titulo, cat, alt) => ({src: 'assets/projetos/' + pasta + '/' + arq, titulo, cat, alt});
  const GALERIA = [
    G('scuderia','01-site-home.webp','Scuderia Pro Autoparts','E-commerce','Página inicial do site da Scuderia Pro Autoparts'),
    G('scuderia','02-mercado-livre-anuncios.webp','Integração Mercado Livre','Back-end','Gestão de anúncios do Mercado Livre integrada à loja da Scuderia'),
    G('protect-world','01-loja-home.webp','Protect World','E-commerce','Página inicial da loja Protect World'),
    G('system-wave','03-posts-redes-sociais.webp','System Wave','Social media','Posts para redes sociais da System Wave'),
    G('portfolio','01-roboteen-site.webp','Roboteen','Web design','Site do projeto Roboteen'),
    G('portfolio','02-plantsp-home.webp','PlantSP','UI/UX','Página inicial da loja de plantas PlantSP'),
    G('portfolio','05-jogo-pagina.webp','Kombi and Dinosaurs','Jogos digitais','Página de divulgação do jogo Kombi and Dinosaurs'),
    G('portfolio','08-vilao-malha-3d.webp','Modelagem de vilão','3D & Motion','Modelo 3D do vilão com a malha à mostra'),
    G('portfolio','06-escultura-blender.webp','Escultura no Blender','3D & Motion','Escultura modelada no Blender')
  ];
  GALERIA.forEach((g, n) => {
    const f = document.createElement('figure'); f.className = 'gal-item';
    f.innerHTML = `<img src="${g.src}" alt="${g.alt}" draggable="false"${n > 1 ? ' loading="lazy"' : ''} decoding="async"><figcaption><b>${g.titulo}</b><span>${g.cat}</span></figcaption>`;
    track.appendChild(f);
  });
  const step = () => track.querySelector('.gal-item').offsetWidth + 20;
  document.getElementById('galPrev').onclick = () => track.scrollBy({left: -step(), behavior:'smooth'});
  document.getElementById('galNext').onclick = () => track.scrollBy({left: step(), behavior:'smooth'});
  let down = false, startX = 0, startL = 0;
  track.addEventListener('mousedown', e => { down = true; startX = e.pageX; startL = track.scrollLeft; track.classList.add('drag'); });
  window.addEventListener('mouseup', () => { down = false; track.classList.remove('drag'); });
  track.addEventListener('mousemove', e => { if(!down) return; track.scrollLeft = startL - (e.pageX - startX); });

  // ===== hero parallax =====
  const heroEl = document.querySelector('.hero');
  heroEl.addEventListener('mousemove', e => {
    const r = heroEl.getBoundingClientRect();
    heroEl.style.setProperty('--gx', (((e.clientX - r.left) / r.width - .5) * 24) + 'px');
    heroEl.style.setProperty('--gy', (((e.clientY - r.top) / r.height - .5) * 24) + 'px');
  });

  // ===== full-screen menu =====
  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('menuBtn');
  const menuClose = document.getElementById('menuClose');
  const menuLinks = document.getElementById('menuLinks');
  const mpImgs = [document.getElementById('mpA'), document.getElementById('mpB')];
  const mpCap = document.getElementById('mpCap'), mpTitle = document.getElementById('mpTitle'), mpSub = document.getElementById('mpSub');
  const pageParts = () => document.querySelectorAll('body > section, body > footer, body > header');
  const VIEWS = {
    '#sobre': {src: FOTO_PERFIL || portrait(), t:'Davi Nascimento', s:'Full Stack Developer e UI/UX Designer'},
    '#skills': {src: 'assets/menu/menu-skills.webp', t:'Quatro camadas de trabalho', s:'Design, front-end, back-end e 3D'},
    '#projetos': {src: 'assets/menu/menu-projetos.webp', t:'Do banco de dados à interface', s:'E-commerces, landing pages e estudos visuais'},
    '#experiencia': {src: 'assets/menu/menu-experiencia.webp', t:'Trajetória profissional', s:'Scuderia Pro Autoparts, Protect World e freelance'},
    '#contato': {src: 'assets/menu/menu-contato.webp', t:'Vamos conversar?', s:'Conte sobre o seu projeto'}
  };
  let curImg = 0, curView = null;
  function setView(key){
    if(curView === key) return;
    curView = key;
    const v = VIEWS[key], next = 1 - curImg;
    mpImgs[next].src = v.src; mpImgs[next].alt = v.t;
    mpImgs[next].classList.add('show'); mpImgs[curImg].classList.remove('show');
    curImg = next;
    mpCap.classList.remove('in'); void mpCap.offsetWidth;
    mpTitle.textContent = v.t; mpSub.textContent = v.s; mpCap.classList.add('in');
  }
  function openMenu(){
    const r = menuBtn.getBoundingClientRect();
    menu.style.setProperty('--cx', (r.left + r.width / 2) + 'px');
    menu.style.setProperty('--cy', (r.top + r.height / 2) + 'px');
    pageParts().forEach(el => el.setAttribute('inert', ''));
    menu.removeAttribute('inert'); menu.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    curView = null; setView('#sobre');
    menu.classList.add('open');
    setTimeout(() => menuLinks.querySelector('a').focus({preventScroll:true}), 900);
  }
  function closeMenu(){
    if(!menu.classList.contains('open')) return;
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true'); menu.setAttribute('inert', '');
    pageParts().forEach(el => el.removeAttribute('inert'));
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    menuBtn.focus({preventScroll:true});
  }
  menuBtn.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
  menuLinks.querySelectorAll('a').forEach(a => {
    const key = a.getAttribute('href');
    a.addEventListener('mouseenter', () => setView(key));
    a.addEventListener('focus', () => setView(key));
    a.addEventListener('click', e => {
      e.preventDefault();
      closeMenu();
      setTimeout(() => document.querySelector(key).scrollIntoView({behavior:'smooth'}), 450);
    });
  });
  menuLinks.addEventListener('mouseleave', () => setView('#sobre'));
  document.querySelector('.menu-top .logo').addEventListener('click', e => { e.preventDefault(); closeMenu(); setTimeout(() => window.scrollTo({top:0, behavior:'smooth'}), 450); });

  // cursor
  document.addEventListener('mouseover', e => {
    ring.classList.toggle('hover', !!e.target.closest('a, button, .project-card, .car, .gal-item'));
    const dark = !!e.target.closest('.hero, .sec-dark, .menu-photo, footer');
    dot.classList.toggle('on-dark', dark); ring.classList.toggle('on-dark', dark);
  });

  // ===== contact popup =====
  const modal = document.getElementById('contactModal');
  const cForm = document.getElementById('contactForm');
  const cWrap = document.getElementById('cmForm');
  const cOk = document.getElementById('cmOk');
  const formMsg = document.getElementById('formMsg');
  const sendBtn = document.getElementById('sendBtn');
  let lastFocus = null;

  function openContact(){
    if(menu.classList.contains('open')){ closeMenu(); setTimeout(openContact, 550); return; }
    lastFocus = document.activeElement;
    cWrap.hidden = false; cOk.hidden = true; formMsg.textContent = ''; formMsg.className = 'form-msg';
    modal.removeAttribute('inert'); modal.setAttribute('aria-hidden', 'false');
    pageParts().forEach(el => el.setAttribute('inert', ''));
    document.body.style.overflow = 'hidden';
    modal.classList.add('open');
    setTimeout(() => cForm.querySelector('[name=name]').focus({preventScroll:true}), 350);
  }
  function closeContact(){
    if(!modal.classList.contains('open')) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true'); modal.setAttribute('inert', '');
    pageParts().forEach(el => el.removeAttribute('inert'));
    document.body.style.overflow = '';
    if(lastFocus && lastFocus.focus) lastFocus.focus({preventScroll:true});
  }
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeContact));
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeContact(); });
  document.querySelectorAll('[data-contact]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); openContact(); }));

  // WhatsApp: abre a conversa se o número estiver configurado; senão abre o formulário
  document.querySelectorAll('[data-wa]').forEach(a => {
    if(WHATSAPP_NUMERO){
      a.href = 'https://wa.me/' + WHATSAPP_NUMERO + '?text=' + encodeURIComponent('Olá, Davi! Vi o seu portfólio e gostaria de conversar.');
      a.target = '_blank'; a.rel = 'noopener';
    } else {
      a.addEventListener('click', e => { e.preventDefault(); openContact(); });
    }
  });

  function setMsg(text, kind){ formMsg.textContent = text; formMsg.className = 'form-msg ' + (kind || ''); }
  function mailtoFallback(d){
    const body = encodeURIComponent(d.message + '\n\n' + d.name + '\n' + d.email);
    return 'mailto:' + EMAIL_CONTATO + '?subject=' + encodeURIComponent('Contato pelo portfólio') + '&body=' + body;
  }
  cForm.addEventListener('submit', async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(cForm).entries());
    if(d._honey) return; // anti-spam
    d.name = (d.name || '').trim(); d.email = (d.email || '').trim(); d.message = (d.message || '').trim();
    if(!d.name || !d.message){ setMsg('Preencha o seu nome e a mensagem.', 'err'); return; }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)){ setMsg('Informe um e-mail válido para eu poder responder.', 'err'); return; }
    sendBtn.disabled = true; sendBtn.textContent = 'Enviando…'; setMsg('');
    try{
      const r = await fetch('https://formsubmit.co/ajax/' + EMAIL_CONTATO, {
        method:'POST',
        headers:{'Content-Type':'application/json', 'Accept':'application/json'},
        body: JSON.stringify({name:d.name, email:d.email, message:d.message, _subject:'Contato pelo portfólio', _template:'table', _captcha:'false'})
      });
      const j = await r.json().catch(() => ({}));
      if(!r.ok || (j.success !== true && j.success !== 'true')) throw new Error('send failed');
      cForm.reset(); cWrap.hidden = true; cOk.hidden = false;
    }catch(err){
      formMsg.className = 'form-msg err';
      formMsg.innerHTML = 'Não consegui enviar agora. <a href="' + mailtoFallback(d) + '">Abrir no meu app de e-mail</a>.';
    }finally{
      sendBtn.disabled = false; sendBtn.textContent = 'Enviar mensagem';
    }
  });
