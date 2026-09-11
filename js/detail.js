document.addEventListener("DOMContentLoaded", () => {
  // Read the id from the URL, e.g. details.html?id=3
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  // Find the matching opportunity, fallback to the first one if none found
  const opportunity = opportunities.find(op => op.id === id) || opportunities[0];

  // Calculate days left
  const today = new Date();
  const deadlineDate = new Date(opportunity.deadline);
  const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
  const deadlineFull = `${daysLeft} days left — Closes ${deadlineDate.toDateString().slice(4, 10)}`;
  const deadlineShort = `${daysLeft} Days Remaining`;

  // Fill in header info
  document.getElementById("detail-org").textContent = opportunity.organization;
  document.getElementById("detail-title").textContent = opportunity.title;

  // Fill in metadata pills
  document.getElementById("detail-category").textContent = opportunity.category;
  document.getElementById("detail-deadline").textContent = deadlineFull;
  document.getElementById("detail-location").textContent = `${opportunity.location} • ${opportunity.type}`;
  document.getElementById("detail-compensation").textContent = opportunity.compensation;

  // Fill in description
  document.getElementById("detail-description").textContent = opportunity.fullDescription;

  // Rebuild requirements list
  const reqContainer = document.getElementById("detail-requirements");
  reqContainer.innerHTML = opportunity.requirements.map(req => `
    <div class="flex items-start gap-space-xs">
      <span class="material-symbols-outlined text-secondary text-[20px] mt-0.5">verified</span>
      <div>
        <p class="font-body-sm text-body-sm text-on-surface-variant">${req}</p>
      </div>
    </div>
  `).join("");

  // Fill in sticky bottom bar
  document.getElementById("detail-sticky-deadline").textContent = deadlineShort;

  // Update the page title too (nice touch, not required)
  document.title = `${opportunity.title} — VANTAGE`;

    // Update Apply modal header to match the current opportunity
  const modalTitle = document.querySelector("#apply-modal-panel h2");
  const modalSubtitle = document.querySelector("#apply-modal-panel p");
  if (modalTitle) modalTitle.textContent = `Apply to ${opportunity.organization}`;
  if (modalSubtitle) modalSubtitle.textContent = opportunity.title;


});