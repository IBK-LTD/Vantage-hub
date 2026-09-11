document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("opportunityListContainer");
  const emptyState = document.getElementById("emptyStateContainer");
  const searchInput = document.getElementById("opportunitySearchInput");
  const resultsCount = document.getElementById("results-count");
  const filterChips = document.querySelectorAll(".filter-chip");
    const sortSelect = document.getElementById("sortSelect");

  let currentCategory = "All";

  // Read search term from URL if coming from homepage
  const params = new URLSearchParams(window.location.search);
  const urlSearch = params.get("search");
  if (urlSearch) {
    searchInput.value = urlSearch;
  }

  function renderResults() {
    const query = searchInput.value.trim().toLowerCase();

    let filtered = opportunities.filter(op => {
      const matchesCategory = currentCategory === "All" || op.category === currentCategory;
      const matchesSearch = !query ||
        op.title.toLowerCase().includes(query) ||
        op.organization.toLowerCase().includes(query) ||
        op.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    // sotingg
        if (sortSelect.value === "soonest") {
      filtered.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else if (sortSelect.value === "recent") {
      filtered.sort((a, b) => b.id - a.id);
    }
    // "Highest Value" skipped — compensation is a text string, not a comparable number

    if (filtered.length === 0) {
      container.classList.add("hidden");
      emptyState.classList.remove("hidden");
    } else {
      container.classList.remove("hidden");
      emptyState.classList.add("hidden");
      container.innerHTML = filtered.map(op => createOpportunityCard(op)).join("");
    }

            // Wire up save/bookmark buttons after rendering
    wireSaveButtons(container);

    resultsCount.textContent = `Showing ${filtered.length} of ${opportunities.length} opportunities`;
  }

  // Search input triggers re-filter as you type
  searchInput.addEventListener("input", renderResults);

  // Sort dropdown triggers re-filte
    sortSelect.addEventListener("change", renderResults);

  // Category chip clicks
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      currentCategory = chip.getAttribute("data-category");

      // Update active styling
      filterChips.forEach(c => {
        c.classList.remove("bg-primary", "text-on-primary");
        c.classList.add("bg-surface-container-low", "text-on-surface-variant");
      });
      chip.classList.remove("bg-surface-container-low", "text-on-surface-variant");
      chip.classList.add("bg-primary", "text-on-primary");

      renderResults();
    });
  });

  renderResults();
});