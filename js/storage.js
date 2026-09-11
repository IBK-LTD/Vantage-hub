function getSavedIds() {
  const saved = localStorage.getItem("savedOpportunities");
  return saved ? JSON.parse(saved) : [];
}

function toggleSaved(id) {
  let saved = getSavedIds();
  if (saved.includes(id)) {
    saved = saved.filter(sid => sid !== id);
  } else {
    saved.push(id);
  }
  localStorage.setItem("savedOpportunities", JSON.stringify(saved));
  return saved.includes(id);
}

function isSaved(id) {
  return getSavedIds().includes(id);
}

function wireSaveButtons(container) {
  container.querySelectorAll(".save-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = parseInt(btn.getAttribute("data-id"));
      const nowSaved = toggleSaved(id);
      const icon = btn.querySelector("span");
      icon.style.fontVariationSettings = nowSaved ? "'FILL' 1" : "'FILL' 0";
      icon.classList.toggle("text-primary", nowSaved);
    });
  });
}