function createOpportunityCard(opportunity) {
  const today = new Date();
  const deadlineDate = new Date(opportunity.deadline);
  const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
  const deadlineText = daysLeft > 0 ? `${daysLeft} days left` : "Deadline passed";

  const categoryColors = {
    "Internship": "bg-primary-fixed text-primary",
    "Scholarship": "bg-secondary-fixed text-on-secondary-fixed-variant",
    "Grant": "bg-surface-container text-on-surface-variant",
    "Fellowship": "bg-tertiary-fixed text-on-tertiary-fixed-variant"
  };
  const categoryClass = categoryColors[opportunity.category] || "bg-surface-container text-on-surface-variant";

  const saved = isSaved(opportunity.id);
  const bookmarkFill = saved ? "'FILL' 1" : "'FILL' 0";
  const bookmarkColorClass = saved ? "text-primary" : "";

  return `
    <article class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm relative transition-all duration-200 active:scale-[0.99]">
      <div class="flex items-center justify-between gap-space-xs">
        <span class="px-space-sm py-space-3xs rounded-full ${categoryClass} font-label-sm text-label-sm font-semibold">
          ${opportunity.category}
        </span>
        <div class="flex items-center gap-space-xs">
          <div class="flex items-center gap-1.5 px-space-sm py-space-3xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
            <span class="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
            ${deadlineText}
          </div>
          <button aria-label="Save opportunity" data-id="${opportunity.id}" class="save-btn w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors flex-shrink-0">
            <span class="material-symbols-outlined text-[20px] ${bookmarkColorClass}" style="font-variation-settings: ${bookmarkFill}">bookmark</span>
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-space-3xs">
        <span class="font-label-sm text-label-sm text-outline uppercase tracking-wider">${opportunity.organization}</span>
        <h3 class="font-headline-sm text-headline-sm text-on-surface leading-tight">
          ${opportunity.title}
        </h3>
        <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
          ${opportunity.description}
        </p>
      </div>
            <div class="pt-space-xs mt-space-3xs flex flex-col gap-space-xs bg-surface-container-low/70 -mx-space-md -mb-space-md px-space-md py-space-sm rounded-b-xl">
        <div class="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm truncate">
          <span class="material-symbols-outlined text-[16px] text-outline flex-shrink-0">location_on</span>
          <span class="truncate">${opportunity.location} • ${opportunity.type}</span>
        </div>
        <div class="flex items-center justify-between gap-space-xs">
          <span class="font-semibold text-secondary-container bg-secondary px-2 py-0.5 rounded text-[12px] truncate">${opportunity.compensation}</span>
          <a href="details.html?id=${opportunity.id}" class="flex items-center gap-1 text-primary font-label-md text-label-md font-semibold hover:underline flex-shrink-0">
            View Details <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </article>
  `;
}