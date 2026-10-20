'use strict';
const projectData = {
  mgm: {
    category: 'DESENVOLVIMENTO PROFISSIONAL · WEB', title: 'MGM Ambiental',
    lead: 'Um portal para transformar informações dispersas em acompanhamento claro para o cliente.',
    period: 'Abril de 2026 — atual', role: 'Desenvolvedor autônomo', context: 'Consultoria ambiental',
    problem: 'O acompanhamento de processos, documentos e prazos dependia de contatos recorrentes. A plataforma organiza a consulta por cliente, empresa e área, reunindo as etapas do serviço em um só lugar.',
    contribution: 'Construo e evoluo a aplicação web, a organização dos dados e a integração de autenticação e arquivos. Também desenvolvo uma versão Android nativa em Kotlin, atualmente em testes com clientes.',
    result: 'Os clientes passaram a consultar o andamento dos serviços diretamente no portal. A web v2 está em produção; a versão Android segue em testes. A redução da dependência de ligações é uma observação qualitativa de uso.',
    tech: ['JavaScript', 'HTML / CSS', 'Tailwind CSS', 'Supabase / PostgreSQL', 'Leaflet', 'GitHub Pages'],
    images: [['mgm-processos.png', 'Etapas do processo, documentos, prazos e georreferenciamento.'], ['mgm-empresas.png', 'Empresas vinculadas ao cliente de demonstração.'], ['mgm-areas.png', 'Organização das áreas e acesso aos processos.']],
    link: 'https://github.com/oMarcoMaciel/MgmAmbiental-Portfolio', note: 'Aplicação web executada em modo demo. Empresas, documentos e localização são fictícios.'
  },
  seaway: {
    category: 'FREELANCE · ANDROID NATIVO', title: 'Seaway · Leitor-SW',
    lead: 'Um aplicativo para os coletores Android utilizados pela equipe de gestão de estoque da Seaway.',
    period: 'Junho — julho de 2024', role: 'Desenvolvimento em dupla', context: 'Operação de estoque',
    problem: 'Organizar contagens por loja e sessão, registrar códigos de barras no dispositivo e disponibilizar os dados para o próximo passo da operação, com persistência local e funcionamento offline.',
    contribution: 'Eu e um colega desenvolvemos a solução em todas as frentes: interface Android, dados locais com Room, permissões, registro de leituras, exportação DBF e transferência entre dispositivos.',
    result: 'Uma versão foi entregue à equipe de estoque. Nesta demonstração local, uma nova leitura foi registrada e o total passou de 4 para 5, permanecendo atualizado ao retornar ao painel.',
    tech: ['Kotlin', 'Android SDK', 'Room / SQLite', 'Coroutines', 'DBF', 'Bluetooth'],
    images: [['seaway-painel.png', 'Painel do operador e loja fictícia.'], ['seaway-contagem.png', 'Leituras registradas na sessão e total atualizado.'], ['seaway-sessoes.png', 'Seleção entre contagem de exposição e estoque.']],
    link: 'https://github.com/oMarcoMaciel/Leitor-SeaWay-Portfolio', note: 'App real em emulador com dados fictícios. A leitura foi simulada por texto; o coletor físico e as transferências não foram testados nesta execução.', mobile: true
  },
  safekid: {
    category: 'PESQUISA APLICADA · IoT', title: 'SafeKid-IoT',
    lead: 'Um protótipo para reunir identificação RFID e acompanhamento por zonas de proximidade em ambientes educacionais.',
    period: 'Projeto e artigo · 2026', role: 'Desenvolvimento em equipe', context: 'IoT e pesquisa aplicada',
    problem: 'Uma leitura de crachá identifica um evento de acesso. O sinal de rádio indica proximidade. O projeto integra essas informações em uma aplicação para consulta, gerenciamento e visualização de eventos.',
    contribution: 'Fui responsável pela maior parte do desenvolvimento do protótipo, em equipe. A solução conecta dispositivos embarcados, comunicação MQTT, API em FastAPI, persistência e uma interface Vue 3 com TypeScript.',
    result: 'Protótipo com firmware, comunicação, dados e interface web, associado a um artigo aceito para a MNR 2026. A apresentação está prevista para o fim de novembro, em João Pessoa. O RSSI oferece uma estimativa de proximidade por zonas, sujeita a calibração e interferências.',
    tech: ['Python / FastAPI', 'Vue 3 / TypeScript', 'MQTT', 'ESP32 / ESP8266', 'RFID', 'SQLite'],
    images: [['safekid-dashboard.png', 'Dashboard com 100 registros e quatro alunos fictícios.'], ['safekid-tracking.png', 'Acompanhamento por zonas de proximidade.'], ['safekid-rssi.png', 'Histórico da intensidade do sinal, com telemetria sintética.']],
    link: 'https://github.com/oMarcoMaciel/SafeKid-Portfolio', source: 'https://github.com/oMarcoMaciel/SafeKid-IoT', note: 'Frontend e API executados localmente com dados sintéticos. Broker e dispositivos físicos não foram conectados nesta demonstração.'
  }
};
const dialog = document.querySelector('#project-dialog');
const dialogBody = document.querySelector('#dialog-body');
let lastProjectTrigger;
function openProject(key, trigger) {
  if (!projectData[key]) return;
  const p = {...projectData[key], ...(currentLanguage === 'en' ? projectEnglish[key] : {})};
  const labels = languageCopy[currentLanguage];
  lastProjectTrigger = trigger;
  dialogBody.innerHTML = `<p class="eyebrow">${p.category}</p><h2 id="dialog-title">${p.title}</h2><p class="dialog-lead">${p.lead}</p><dl class="dialog-facts"><div><dt>${labels.period}</dt><dd>${p.period}</dd></div><div><dt>${labels.role}</dt><dd>${p.role}</dd></div><div><dt>${labels.context}</dt><dd>${p.context}</dd></div></dl><div class="dialog-columns"><section><h3>${labels.problem}</h3><p>${p.problem}</p></section><section><h3>${labels.contribution}</h3><p>${p.contribution}</p></section></div><div class="dialog-result"><strong>${labels.result}</strong>${p.result}</div><div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div><div class="dialog-gallery ${p.mobile?'mobile-gallery':''}">${p.images.map(([src,caption])=>`<figure><img src="assets/${src}" alt="${caption}" loading="lazy"><figcaption>${caption}</figcaption></figure>`).join('')}</div><div class="dialog-bottom"><p>${p.note}</p><a class="button button-dark" href="${p.link}" target="_blank" rel="noopener noreferrer">${labels.caseStudy} <span aria-hidden="true">↗</span></a></div>${p.source?`<a class="text-link source-link" href="${p.source}" target="_blank" rel="noopener noreferrer" style="margin-top:22px">${labels.source} <span aria-hidden="true">↗</span></a>`:''}`;
  dialog.showModal(); document.body.classList.add('modal-open'); dialog.scrollTop = 0;
  dialog.querySelector('.close-dialog').focus({preventScroll:true});
}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.project,button)));
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');lastProjectTrigger?.focus({preventScroll:true});});
const menuButton=document.querySelector('.menu-toggle'),mobileNav=document.querySelector('#mobile-nav');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label',languageCopy[currentLanguage].openMenu);mobileNav.hidden=true;}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?languageCopy[currentLanguage].openMenu:languageCopy[currentLanguage].closeMenu);mobileNav.hidden=open;});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
window.matchMedia('(min-width:541px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('marcomaciel06@gmail.com');status.textContent=languageCopy[currentLanguage].copied;}catch{status.textContent=languageCopy[currentLanguage].copyFallback;}});
