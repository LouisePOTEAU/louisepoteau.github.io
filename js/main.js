/* ═══════════════════════════════════════════════════
   MAIN.JS
═══════════════════════════════════════════════════ */

/* ── Cursor ── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function animCursor() {
  cursor.style.transform = `translate(${mx-4}px,${my-4}px)`;
  rx += (mx-rx)*0.12; ry += (my-ry)*0.12;
  ring.style.transform = `translate(${rx-16}px,${ry-16}px)`;
  requestAnimationFrame(animCursor);
})();

/* ── Scroll reveal ── */
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.07 });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
}

/* ── GitHub SVG ── */
const GH = `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;

/* ══════════════════════════════════════════════════
   ALL PROJECTS
   type: 'ds' = Data Science | 'da' = Data Analyst
   featured: true = appears in featured grid
══════════════════════════════════════════════════ */
const projects = [

  /* ── FEATURED (Data Science) ── */
  {
    index:'003', year:'2024', type:'ds', featured:true,
    name:'Underwater Species Detection',
    org:'European Project Nautilos · H2020 Project',
    tags:['Python','YOLOv8','CBIR','Deep Learning'],
    keywords:['Database','AI','Image Processing'],
    desc:'Database for underwater image analysis + automatic identification of Nephrops norvegicus (lobsters) via CBIR image processing and YOLOv8 detection.',
    fullDesc:'Designed a database for underwater image analysis. Developed algorithms for automatic identification of Nephrops norvegicus (lobsters) from underwater videos: image processing (CBIR) and detection using YOLOv8 (Ultralytics).',
    github:'https://github.com/LouisePOTEAU/Nautilos-Project'
  },
  {
    index:'008', year:'2025', type:'da', featured:true,
    name:'Survey Results Analysis',
    org:'Bachelor thesis · IAE Montpellier',
    tags:['Python','Pandas','Matplotlib','Seaborn'],
    keywords:['Data Analysis','Data Cleaning','Visualisation'],
    desc:'Cleaning of Google Forms survey data, restructuring results and conditional visualisation by variable.',
    fullDesc:'Cleaning of data from a Google Forms questionnaire. Restructuring and organising the results. Conditional visualisation of outcomes according to specific variables, carried out for the Bachelor thesis at IAE Montpellier.',
    link: 'https://drive.google.com/file/d/12tVx2gTbDmRRrQg8eW8ROTTW7xAh6n-9/view?usp=sharing'
  },
  {
    index:'002', year:'2024–25', type:'ds', featured:true,
    name:'Autonomous Car — Traffic Sign Detection',
    org:'Engineering project · Grenoble INP - Phelma',
    tags:['Python','Ultralytics','Arduino'],
    keywords:['Computer Vision','Traffic Sign Detection','Deep Learning'],
    desc:'Automatic detection of STOP and Road Works signs. Vehicle behaviour adapts in real time based on detection results.',
    fullDesc:'Led as Project Manager. Implemented automatic detection of traffic signs (STOP, Road Works) using YOLOv8 (Ultralytics). The vehicle adapts its behaviour accordingly via Arduino integration.',
    link:'https://www.linkedin.com/feed/update/urn:li:activity:7196621409329049600/?originalSubdomain=fr'
  },
  

  /* ── MORE — Data Science ── */
  {
    index:'001', year:'2026', type:'ds', featured:false,
    name:'RAG Chatbot for Automotive Documentation',
    org:'Personal project',
    tags:['Python','LangChain','OpenAI API','ChromaDB'],
    keywords:['LLM','RAG','NLP','Vector Search'],
    desc:'Conversational assistant based on Retrieval Augmented Generation (RAG) to interpret vehicle dashboard alerts with semantic search and embeddings.',
    fullDesc:'Designed a conversational assistant based on Retrieval Augmented Generation (RAG) to interpret vehicle dashboard alerts. Integrated and processed a car manual to extract alert messages and recommended actions. Implemented a vector database and semantic search system using embeddings to provide contextual answers via an LLM.',
    github:'https://github.com/LouisePOTEAU/Building-RAG-Chatbots-for-Technical-Documentation'
  },
  {
    index:'004', year:'2024–2025', type:'ds', featured:false,
    name:'Reinventing Art — Photo Colorisation',
    org:'Engineering project · Linköping University',
    tags:['Python','Ultralytics','Photoshop','ML'],
    keywords:['Image Processing','Machine Learning','Colorisation'],
    desc:'ML model to colorise historical black-and-white photos using a limited number of training examples (few-shot learning).',
    fullDesc:'Created a machine learning model to colorize historical black-and-white photos using a limited number of examples. Explored few-shot learning techniques applied to image-to-image translation at Linköping University.',
    link: 'https://www.linkedin.com/in/louise-poteau/details/projects/'
  },
  {
    index:'005', year:'2025', type:'ds', featured:false,
    name:'Traffic Volume Forecasting',
    org:'Personal project',
    tags:['Python','PyTorch','Pandas'],
    keywords:['Forecasting','Deep Learning','MSE'],
    desc:'Deep learning model to predict traffic volume. Training, evaluation and performance assessment using MSE on a held-out test set.',
    fullDesc:'Design of a deep learning model to predict traffic volume from a provided dataset. Training and evaluating the model using a suitable loss function. Predicting traffic volume on the test set and evaluating performance using mean squared error (MSE).',
    noLink: true
  },
  {
    index:'006', year:'2025', type:'ds', featured:false,
    name:'Customer Churn Prediction & Segmentation',
    org:'Personal project',
    tags:['Python','Pandas','Scikit-learn'],
    keywords:['Scores','Segmentation','Machine Learning'],
    desc:'EDA + three classification models (Logistic Regression, Decision Tree, Random Forest) + K-means customer segmentation.',
    fullDesc:'Conducted exploratory data analysis on the dataset. Trained three classification models (Logistic Regression, Decision Tree, Random Forest) to predict churn, comparing accuracy scores on the test set. Implemented customer segmentation using K-means clustering.',
    noLink: true
  },
  {
    index:'007', year:'2025', type:'ds', featured:false,
    name:'Movie Rental Duration Prediction',
    org:'Personal project',
    tags:['Python','Scikit-learn','Pandas'],
    keywords:['Predictive Modelling','Regression','Random Forest'],
    desc:'Predictive modelling of movie rental duration from customer and genre data. Compared Lasso, OLS and Random Forest.',
    fullDesc:'Predictive modeling of movie rental duration based on customer and genre data. Implementation and comparison of regression models: Lasso, Ordinary Least Squares (OLS), and Random Forest. Feature engineering on customer profiles and genre metadata.',
    noLink: true
  },

  /* ── MORE — Data Analyst ── */
  {
    index:'009', year:'2023', type:'da', featured:false,
    name:'Decathlon Athletic Performance Analysis',
    org:'Engineering project · Grenoble INP - Phelma',
    tags:['Matlab'],
    keywords:['Descriptive Analysis','PCA','Classification','Sports Performance'],
    desc:'Statistical analysis of decathlon performance data using descriptive analysis, Principal Component Analysis (PCA), and classification.',
    fullDesc:'Analysis of sporting performances in decathlon events using: descriptive analysis, Principal Component Analysis (PCA), and classification/clustering. Implemented entirely in Matlab.',
    noLink: true
  },
  {
    index:'010', year:'2025', type:'da', featured:false,
    name:'Netflix Catalogue Study',
    org:'Personal project',
    tags:['Python','Pandas','Matplotlib'],
    keywords:['Exploratory Analysis','Trends','Visualisation'],
    desc:'Exploratory analysis of the Netflix catalogue: trends by genre, duration, country, and temporal evolution.',
    fullDesc:'Exploratory analysis of the Netflix catalogue covering trends by genre, duration, country and temporal evolution. Data wrangling and visualisation with Pandas and Matplotlib.',
    noLink: true
  },
  {
    index:'011', year:'2025', type:'da', featured:false,
    name:'Bank Marketing Campaign — Data Cleaning',
    org:'Personal project',
    tags:['Python','Pandas','NumPy'],
    keywords:['Data Cleaning','Dataset Preparation'],
    desc:'Data cleaning, reformatting and splitting of a bank marketing campaign dataset into separate files.',
    fullDesc:'Cleaning of data from a bank marketing campaign. Reformatting and standardising data types. Separation of data into distinct files by category for downstream analysis.',
    noLink: true
  },
  {
    index:'012', year:'2025', type:'da', featured:false,
    name:'Unicorn Companies Analysis',
    org:'Personal project',
    tags:['SQL'],
    keywords:['Sector Analysis','Data Aggregation','Valuation'],
    desc:'Advanced SQL queries to identify sectors generating the most new unicorns (2019–2021), with valuation analysis by industry and year.',
    fullDesc:'Advanced SQL queries to identify the sectors generating the most new unicorns between 2019 and 2021. Aggregation and analysis to calculate the number of unicorns and their average valuation by industry and year.',
    noLink: true
  },
];

/* ══════════════════════════════════════
   RENDER FEATURED (v1 layout: 2 cards + 1 wide)
══════════════════════════════════════ */
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = projects.filter(p => p.featured);

  featured.forEach((p, i) => {
    const isWide = i === 2;
    const card = document.createElement('div');
    card.className = `project-card${isWide?' wide':''} reveal${i>0?` reveal-delay-${i}`:''}`;

    const tagsHTML = [
      ...p.tags.map(t=>`<span class="tag">${t}</span>`),
      ...p.keywords.map(k=>`<span class="tag tag-kw">${k}</span>`)
    ].join('');

    const linksHTML = [
      p.github ? `<a href="${p.github}" target="_blank" class="card-link">${GH} GitHub</a>` : '',
      p.link   ? `<a href="${p.link}"   target="_blank" class="card-link"><svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12"><path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 9.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/><path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 0 0 0-6H9z"/></svg> Link</a>` : ''
    ].join('');

    if (isWide) {
      card.innerHTML = `
        <div class="card-meta">
          <span class="card-year">${p.year}</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start;">
          <div>
            <div class="card-org">${p.org}</div>
            <h3 class="card-title">${p.name}</h3>
            <p class="card-desc">${p.desc}</p>
          </div>
          <div>
            <div class="card-tags" style="margin-top:4px;">${tagsHTML}</div>
            <div class="card-links" style="margin-top:20px;">${linksHTML}</div>
          </div>
        </div>`;
    } else {
      card.innerHTML = `
        <div class="card-meta">
          <span class="card-year">${p.year}</span>
        </div>
        <div class="card-org">${p.org}</div>
        <h3 class="card-title">${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-tags">${tagsHTML}</div>
        <div class="card-links">${linksHTML}</div>`;
    }
    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════
   RENDER MORE PROJECTS LIST (v1 row style)
   DS rows first, then DA rows
══════════════════════════════════════ */
function renderList() {
  const list = document.getElementById('projectList');
  if (!list) return;

  const ds = projects.filter(p => !p.featured && p.type==='ds');
  const da = projects.filter(p => !p.featured && p.type==='da');

  [...ds, ...da].forEach((p, i) => {
    const row = document.createElement('div');
    row.className = `project-row project-row--${p.type} reveal${i>0?` reveal-delay-${Math.min(i,3)}`:''}`;
    row.innerHTML = `
  <div class="row-name">${p.name}</div>
  <div class="row-tags">${p.tags.slice(0,0).map(t=>`<span class="tag" style="font-size:10px;padding:2px 8px">${t}</span>`).join('')}</div>
  <span class="row-year">${p.year}</span>
  <span class="row-arrow">→</span>`;
      
    row.addEventListener('click', ()=>openModal(p));
    list.appendChild(row);
  });
}

/* ══════════════════════════════════════
   MODAL
══════════════════════════════════════ */
const overlay = document.getElementById('modalOverlay');
const mclose  = document.getElementById('modalClose');
const modal   = document.getElementById('modal');

function openModal(p) {
  const typeLabel = p.type==='ds' ? 'Data Science' : 'Data Analyst';
  document.getElementById('modalLabel').textContent = `${typeLabel} · ${p.index} — ${p.year}`;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalOrg').textContent   = p.org;
  document.getElementById('modalDesc').textContent  = p.fullDesc;
  document.getElementById('modalTags').innerHTML =
    p.tags.map(t=>`<span class="tag">${t}</span>`).join('') +
    p.keywords.map(k=>`<span class="tag tag-kw">${k}</span>`).join('');
  const links = document.getElementById('modalLinks');
  links.innerHTML = p.github ? `<a href="${p.github}" target="_blank" class="card-link">${GH} GitHub</a>` : '';
  if (modal) modal.dataset.type = p.type;
  overlay.classList.add('open');
}
if (mclose) mclose.addEventListener('click', ()=>overlay.classList.remove('open'));
if (overlay) overlay.addEventListener('click', e=>{ if(e.target===overlay) overlay.classList.remove('open'); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape') overlay.classList.remove('open'); });

/* ── Init ── */
renderFeatured();
renderList();
observeReveal(); // observe ALL .reveal including dynamically injected cards
