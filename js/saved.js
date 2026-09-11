document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("opportunityListContainer");
  const emptyState = document.getElementById("emptyStateContainer");
  const resultsCount = document.getElementById("results-count");

  function render() {
    const savedIds = getSavedIds();
    const savedOpportunities = opportunities.filter(op => savedIds.includes(op.id));

    if (savedOpportunities.length === 0) {
      container.classList.add("hidden");
      emptyState.classList.remove("hidden");
      resultsCount.textContent = "";
    } else {
      container.classList.remove("hidden");
      emptyState.classList.add("hidden");
      container.innerHTML = savedOpportunities.map(op => createOpportunityCard(op)).join("");
      resultsCount.textContent = `${savedOpportunities.length} saved opportunit${savedOpportunities.length === 1 ? "y" : "ies"}`;

      // Wire up unsave clicks and re-render so the card disappears immediately
      container.querySelectorAll(".save-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const id = parseInt(btn.getAttribute("data-id"));
          toggleSaved(id);
          render(); // re-render the list so unsaved cards vanish right away
        });
      });
    }
  }

  render();
});