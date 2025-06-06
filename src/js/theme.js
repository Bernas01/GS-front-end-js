document.addEventListener("DOMContentLoaded", function() {
  function mudaTema(tema) {
    document.body.setAttribute('data-tema', tema);
  }

  document.getElementById("fundo-claro")?.addEventListener("click", function() {
    mudaTema("claro");
  });

  document.getElementById("fundo-escuro")?.addEventListener("click", function() {
    mudaTema("escuro");
  });

  document.getElementById("fundo-natureza")?.addEventListener("click", function() {
    mudaTema("natureza");
  });
});