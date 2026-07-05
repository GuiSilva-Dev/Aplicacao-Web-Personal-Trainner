(function() {
  var ld = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Janaina Santos Personal Trainer",
    "description": "Treinos personalizados, consultoria online e acompanhamento por WhatsApp para saúde, emagrecimento e performance.",
    "url": window.location.origin + window.location.pathname,
    "telephone": "+5511974895522",
    "image": window.location.origin + "/Assets/img-web/js-Photoroom2.png",
    "sameAs": [
      "https://www.instagram.com/janaina1519/"
    ]
  };
  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(ld);
  document.head.appendChild(script);
})();
