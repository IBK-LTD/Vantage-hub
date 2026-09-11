document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("featured-cards-container");
  const featured = opportunities.slice(0, 3); // show first 3 as "featured"

  container.innerHTML = featured.map(op => createOpportunityCard(op)).join("");

    wireSaveButtons(container);

  // Handle homepage search — redirect to listing page with the search term
  const searchForm = document.getElementById("home-search-form");
  const searchInput = document.getElementById("home-search-input");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      window.location.href = `listing.html?search=${encodeURIComponent(query)}`;
    } else {
      window.location.href = `listing.html`;
    }
  });

});

  