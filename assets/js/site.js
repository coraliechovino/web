// Coralie Chovino, portfolio. Galerie video, lightbox, onglets, apparition au defilement.

/* ============================================================
   LISTE DES VIDEOS  (a editer ici, un seul endroit)
   t : titre affiche       u : lien de la video
   c : categorie pour le filtre  -> "reportage" | "interview" | "mojo"
   Les 4 titres YouTube sont les vrais titres. Les Reels Instagram
   sont a titrer : remplace "A titrer" par le sujet reel.
   ============================================================ */
var VIDEOS = [
  // --- YouTube ---
  { t: "Nacera Belaza, choregraphe, serie Parkours MC93", u: "https://www.youtube.com/watch?v=STdrTeq4KQk", c: "culture" },
  { t: "Hatice Ozer, Le Chant du pere, serie Parkours MC93", u: "https://www.youtube.com/watch?v=a_wi_JdSN28", c: "culture" },
  { t: "Adama Diop, Fajar, serie Parkours MC93", u: "https://www.youtube.com/watch?v=hzGkipKHGjY", c: "culture" },
  { t: "Comment faire progresser l'ecologie a l'echelle locale ?", u: "https://www.youtube.com/watch?v=SSzfSY8VmSM", c: "ecologie" },

  // --- Reels Instagram, du plus recent au plus ancien ---
  { t: "Boycott du CNESER contre la hausse des frais etudiants", u: "https://www.instagram.com/reel/DYPdT2vMHyw/", c: "societe" },
  { t: "Start Zup, se former a la tech et a l'IA en quartier populaire", u: "https://www.instagram.com/reel/DW5sfMDhocU/", c: "societe" },
  { t: "Rosny-sous-Bois, la mobilisation pour le centre des Marnaudes", u: "https://www.instagram.com/reel/DWB7Cczjsc7/", c: "societe" },
  { t: "A La Courneuve, les echecs comme ecole de confiance", u: "https://www.instagram.com/reel/DSo7qQ3jPjY/", c: "societe" },
  { t: "Jambo Immo, un reseau immobilier afrodescendant", u: "https://www.instagram.com/reel/DPB9RTsjJK7/", c: "societe" },
  { t: "Tosa'lart, la peinture comme espace de parole", u: "https://www.instagram.com/reel/DOJZBBRDAYq/", c: "culture" },
  { t: "Mamama, des colis solidaires pour les meres precaires", u: "https://www.instagram.com/reel/DMYCWxQqUvv/", c: "societe" },
  { t: "Gaza, une ligne rouge humaine dans Paris", u: "https://www.instagram.com/reel/DL7S4lCsOvS/", c: "politique" },
  { t: "Expo Favela s'installe a Paris", u: "https://www.instagram.com/reel/DLjr2nnsG5E/", c: "societe" },
  { t: "Flottille Madleen, briser le blocus de Gaza", u: "https://www.instagram.com/reel/DKpWIy7Kld1/", c: "politique" },
  { t: "Run Color 2025, une course pour l'inclusion", u: "https://www.instagram.com/reel/DHBnkuVM7ek/", c: "societe" },
  { t: "Sylvie Eberena, halterophile empechee de concourir voilee", u: "https://www.instagram.com/reel/DGyWTJEMvN0/", c: "societe" },
  { t: "Aya Nakamura, anatomie d'un succes", u: "https://www.instagram.com/reel/DGlQc0dK17I/", c: "culture" },
  { t: "Star Academy, Ebony et Franck face au racisme", u: "https://www.instagram.com/reel/DE-O_puNsLc/", c: "culture" },
  { t: "Chlordecone, le delibere et l'attente des Antilles", u: "https://www.instagram.com/reel/DCTxRcOg75e/", c: "ecologie" },
  { t: "Marche contre les violences faites aux peuples ultramarins", u: "https://www.instagram.com/reel/DB_QsfkAzuQ/", c: "politique" },
  { t: "Sante mentale, le manifeste de Rachel Bouvet de la Maisonneuve", u: "https://www.instagram.com/reel/DBtOSqFqj1r/", c: "societe" },
  { t: "L'Ecole populaire du climat a Saint-Ouen", u: "https://www.instagram.com/reel/DBMMOVKgcCh/", c: "ecologie" },
  { t: "En Place saison 2, rencontre avec Jean-Pascal Zadi", u: "https://www.instagram.com/reel/C_h_xvjACqP/", c: "culture" },
  { t: "La poussee du RN en Outre-mer, analyse de Samora Curier", u: "https://www.instagram.com/reel/C9cRUugAcwT/", c: "politique" },
  { t: "Antitsiganisme, la voix des Roms a 48h du scrutin", u: "https://www.instagram.com/reel/C9DMpO2tRHk/", c: "politique" },
  { t: "Handicap et immigration face au risque RN", u: "https://www.instagram.com/reel/C9CZM2rA7DK/", c: "politique" },
  { t: "24h avec Amal Bentounsi, candidate a Meaux", u: "https://www.instagram.com/reel/C8xZ65ngPsD/", c: "politique" },
  { t: "Cite des Chances, l'engagement des jeunes de quartier", u: "https://www.instagram.com/reel/C8H4Cg5KBsP/", c: "politique" },
  { t: "Rayane Mcirdi, Apres soleil, de la banlieue a Cannes", u: "https://www.instagram.com/reel/C7BnV4DKYn9/", c: "culture" },
  { t: "Assemblee des quartiers, faire entendre une voix politique", u: "https://www.instagram.com/reel/C6JCo7GKsZ_/", c: "politique" },

  // --- HerStory, portraits et temoignages de femmes ---
  { t: "Steffy Alexandrian, les violences qui tuent l'enfance", u: "https://www.instagram.com/reel/DZK4fEqNvmD/", c: "portrait" },
  { t: "Alicia Ambroise, changer de nom apres l'inceste", u: "https://www.instagram.com/reel/DY43tOitPV5/", c: "portrait" },
  { t: "Elie Fy, s'assumer pleinement, a Cannes", u: "https://www.instagram.com/reel/DYjnc_Xt9m2/", c: "culture" },
  { t: "Simone Ashley, Bridgerton et la representation", u: "https://www.instagram.com/reel/DYfQ6mONixV/", c: "culture" },
  { t: "Hoshi, sortir de l'emprise par la musique", u: "https://www.instagram.com/reel/DXrmbNFDTBO/", c: "culture" },
  { t: "Caroline Nicoullaud, apprendre a poser ses limites", u: "https://www.instagram.com/reel/DXeu0gQDfc-/", c: "portrait" },
  { t: "Audrey, vivre avec le SOPK", u: "https://www.instagram.com/reel/DXKJJdHjYL9/", c: "portrait" },
  { t: "Charlotte, un viol lors d'un examen medical", u: "https://www.instagram.com/reel/DWPCO93jYot/", c: "portrait" },
  { t: "Katrina Patchett, la danse contre la boulimie", u: "https://www.instagram.com/reel/DVtjOjmDQz6/", c: "portrait" },
  { t: "Baptiste Beaulieu, apprendre aux enfants a dire non", u: "https://www.instagram.com/reel/DVTyjK6icla/", c: "portrait" },
  { t: "Pauline Delabroy-Allard, l'interruption medicale de grossesse", u: "https://www.instagram.com/reel/DU_MsacjRcQ/", c: "portrait" },
  { t: "Amazing Gracy, renaitre apres l'amputation", u: "https://www.instagram.com/reel/DUi2ooKDWgt/", c: "portrait" },
  { t: "Kim, troubles alimentaires, livre Plus forte", u: "https://www.instagram.com/reel/DTsyWZCDQBL/", c: "portrait" },
  { t: "Enquete PMA, l'infiltration d'un forum de dons", u: "https://www.instagram.com/reel/DRcm1YfDY3G/", c: "portrait" },
  { t: "Steffy Alexandrian, l'inceste et l'association Carl", u: "https://www.instagram.com/reel/DRSTu02jUB5/", c: "portrait" },
  { t: "Clara Luciani, les coulisses de La Grenade", u: "https://www.instagram.com/reel/DRFbQk6CJFj/", c: "culture" },
  { t: "Tendances beaute passees au crible par une dermatologue", u: "https://www.instagram.com/reel/DQ19vgojb6V/", c: "culture" },
  { t: "Lisa Pariente, briser le silence sur le viol", u: "https://www.instagram.com/reel/DQHg0QxDEkH/", c: "portrait" },
  { t: "Victorine, survivre a deux cancers", u: "https://www.instagram.com/reel/DP_y6t9jLWE/", c: "portrait" },
  { t: "Ebony, de la difference a la poesie", u: "https://www.instagram.com/reel/DPjc9y6DH2Z/", c: "culture" }
];

// Reels d'education aux medias, affiches dans la section EMI
var VIDEOS_EMI = [
  { t: "Atelier photo argentique, Maison de l'enfance Mozart, Bobigny", u: "https://www.instagram.com/reel/DReGUrpjHqh/" },
  { t: "Un journal de quartier au Fosse-l'Aumone, Gennevilliers", u: "https://www.instagram.com/reel/DJ4ZyHEMzsf/" },
  { t: "Cycle podcast, comptines et histoires familiales, Bobigny", u: "https://www.instagram.com/reel/DE4oCXsASo2/" },
  { t: "Ateliers d'education aux medias a Gennevilliers", u: "https://www.instagram.com/reel/C-ARa5oAf87/" }
];

var TONES = ["tone-clay", "tone-sage", "tone-sky", "tone-sand"];

(function () {
  'use strict';

  /* ---------- Helpers d'identification ---------- */
  function youtubeId(url) {
    var m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
    return m ? m[1] : null;
  }
  function reelId(url) {
    var m = url.match(/instagram\.com\/reel\/([\w-]+)/);
    return m ? m[1] : null;
  }
  function catLabel(c) {
    return { politique: "Politique", societe: "Société", ecologie: "Écologie", culture: "Culture", portrait: "Portrait" }[c] || "Reportage";
  }

  function buildCard(v, i, kicker) {
    var yt = youtubeId(v.u);
    var ig = reelId(v.u);
    var card = document.createElement('a');
    card.className = 'cell reveal';
    if (v.c) card.setAttribute('data-cat', v.c);
    card.setAttribute('data-video', v.u);

    var media = document.createElement('div');
    media.className = 'media sq mb';
    var img = document.createElement('img');
    img.className = 'thumb';
    img.loading = 'lazy';
    img.alt = v.t;
    if (yt) {
      // maxresdefault est en 16:9 sans bandes noires ; repli sur mqdefault (16:9 aussi)
      img.src = 'https://img.youtube.com/vi/' + yt + '/maxresdefault.jpg';
      img.onerror = function () { img.onerror = null; img.src = 'https://img.youtube.com/vi/' + yt + '/mqdefault.jpg'; };
      media.appendChild(img);
    } else if (ig) {
      img.src = 'assets/img/reels/' + ig + '.jpg';
      media.appendChild(img);
    } else {
      media.classList.add(TONES[i % TONES.length]);
    }
    var play = document.createElement('span');
    play.className = 'play';
    media.appendChild(play);

    var kick = document.createElement('span');
    kick.className = 'kicker-inline';
    kick.textContent = kicker || catLabel(v.c);

    var h = document.createElement('h3');
    h.className = 'headline h-s';
    h.textContent = v.t;

    card.appendChild(media);
    card.appendChild(kick);
    card.appendChild(h);
    return card;
  }

  /* ---------- Construction des galeries ---------- */
  var grid = document.getElementById('video-grid');
  if (grid) VIDEOS.slice().reverse().forEach(function (v, i) { grid.appendChild(buildCard(v, i)); });

  var emiGrid = document.getElementById('emi-grid');
  if (emiGrid && typeof VIDEOS_EMI !== 'undefined') {
    VIDEOS_EMI.forEach(function (v, i) { emiGrid.appendChild(buildCard(v, i, "Atelier")); });
  }

  /* ---------- Apparition au defilement ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Lightbox video, avec navigation ---------- */
  var box = document.getElementById('lightbox');
  var frame = box ? box.querySelector('.frame') : null;
  var slot = box ? box.querySelector('.slot') : null;
  var playlist = [];
  var current = -1;

  function embedInfo(url) {
    var yt = youtubeId(url);
    if (yt) return { src: 'https://www.youtube.com/embed/' + yt + '?autoplay=1&rel=0', vertical: false };
    var ig = reelId(url);
    if (ig) return { src: 'https://www.instagram.com/reel/' + ig + '/embed', vertical: true };
    return null;
  }
  // liste ordonnee des vignettes actuellement visibles (respecte le filtre par onglet)
  function buildPlaylist() {
    playlist = [].slice.call(document.querySelectorAll('[data-video]')).filter(function (el) {
      return el.offsetParent !== null;
    }).map(function (el) { return el.getAttribute('data-video'); });
  }
  function show(url) {
    var info = embedInfo(url);
    if (!info) { window.open(url, '_blank', 'noopener'); return; }
    frame.classList.toggle('vertical', info.vertical);
    slot.innerHTML = '<iframe allow="autoplay; encrypted-media; fullscreen" allowfullscreen scrolling="no" src="' + info.src + '"></iframe>';
  }
  function openBox(url) {
    buildPlaylist();
    current = playlist.indexOf(url);
    show(url);
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function step(dir) {
    if (!playlist.length) return;
    current = (current + dir + playlist.length) % playlist.length;
    show(playlist[current]);
  }
  function closeBox() {
    box.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(function () { slot.innerHTML = ''; }, 300);
  }
  if (box) {
    document.addEventListener('click', function (ev) {
      var nav = ev.target.closest('.lb-nav');
      if (nav && box.classList.contains('open')) { ev.preventDefault(); ev.stopPropagation(); step(nav.classList.contains('next') ? 1 : -1); return; }
      var trigger = ev.target.closest('[data-video]');
      if (trigger) { ev.preventDefault(); openBox(trigger.getAttribute('data-video')); return; }
      if (ev.target === box || ev.target.classList.contains('close')) closeBox();
    });
    document.addEventListener('keydown', function (ev) {
      if (!box.classList.contains('open')) return;
      if (ev.key === 'Escape') closeBox();
      else if (ev.key === 'ArrowRight') step(1);
      else if (ev.key === 'ArrowLeft') step(-1);
    });
  }

  /* ---------- Articles : miniature + logo du media ---------- */
  var LOGOS = {
    bondyblog: 'assets/img/logos/bondyblog.svg',
    nouvelobs: 'assets/img/logos/nouvelobs.webp',
    letudiant: 'assets/img/logos/letudiant.webp'
  };
  var PUBNAME = { bondyblog: 'Le Bondy Blog', nouvelobs: 'Le Nouvel Obs', letudiant: "L'Étudiant" };
  document.querySelectorAll('.article-row').forEach(function (row) {
    var href = row.getAttribute('href') || '';
    var title = (row.querySelector('.headline') || {}).textContent || '';
    var slug = href.replace(/\/$/, '').split('/').pop().replace(/\.html?$/, '');
    var host = (href.match(/\/\/www\.([^.]+)\./) || [])[1] || '';
    var logo = LOGOS[host];
    row.innerHTML =
      '<div class="art-thumb"><img loading="lazy" alt="" src="assets/img/articles/' + slug + '.jpg"' +
      ' onerror="this.closest(\'.art-thumb\').classList.add(\'noimg\');this.remove();"></div>' +
      '<div class="art-body">' +
      (logo ? '<img class="art-logo" alt="' + (PUBNAME[host] || '') + '" src="' + logo + '">' : '') +
      '<h3 class="headline h-s">' + title + '</h3></div>';
  });

  /* ---------- Formulaire de contact (ouvre le client mail) ---------- */
  var cform = document.getElementById('contact-form');
  if (cform) {
    cform.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var f = cform;
      var nom = f.nom.value.trim(), email = f.email.value.trim();
      var objet = f.objet.value.trim() || 'Prise de contact, portfolio';
      var msg = f.message.value.trim();
      var body = msg + '\n\n' + nom + (email ? ' (' + email + ')' : '');
      var href = 'mailto:contact@coraliechovino.com'
        + '?subject=' + encodeURIComponent(objet)
        + '&body=' + encodeURIComponent(body);
      window.location.href = href;
      var note = document.getElementById('form-note');
      if (note) note.textContent = 'Votre logiciel de messagerie va s’ouvrir.';
    });
  }

  /* ---------- Onglets de filtrage ---------- */
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var filter = tab.getAttribute('data-filter');
      tabs.forEach(function (t) { t.classList.toggle('is-active', t === tab); });
      document.querySelectorAll('#video-grid [data-cat]').forEach(function (cell) {
        var show = filter === 'all' || cell.getAttribute('data-cat') === filter;
        cell.classList.toggle('is-hidden', !show);
      });
    });
  });
})();
