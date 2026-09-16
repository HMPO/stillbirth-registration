//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // --- Details component (gro-details) ---
  const detailsComponent = document.getElementById('gro-details');
  const cancelLink = document.getElementById('cancel-link');
  const form = detailsComponent ? detailsComponent.querySelector('form') : null;

  if (cancelLink) {
    cancelLink.addEventListener('click', function (e) {
      e.preventDefault();
      if (detailsComponent) detailsComponent.removeAttribute('open');
    });
  }

  if (form) {
    form.addEventListener('submit', function () {
      if (detailsComponent) detailsComponent.removeAttribute('open');
    });
  }

  // --- YES/NO name hide reveal ---
  const radioButtons = document.querySelectorAll('input[name="name-or-not"]');
  const yesBlock = document.getElementById("yes-name-block");
  const noBlock = document.getElementById("no-name-block");

  function toggleBlocks(selectedValue) {
    if (!yesBlock || !noBlock) return;
    if (selectedValue === "yes-name") {
      yesBlock.style.display = "block";
      noBlock.style.display = "none";
    } else if (selectedValue === "no-name") {
      yesBlock.style.display = "none";
      noBlock.style.display = "block";
    }
  }

  radioButtons.forEach((element) => {
    element.addEventListener("change", (event) => {
      toggleBlocks(event.target.value);
    });
  });

  // Show correct block on page load
  const checkedRadio = document.querySelector('input[name="name-or-not"]:checked');
  if (checkedRadio) {
    toggleBlocks(checkedRadio.value);
  }

  // --- Accessible Autocomplete ---
  const selectElement = document.querySelector('#choose-country');
  if (selectElement && typeof accessibleAutocomplete !== 'undefined') {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: selectElement
    });
  }

  // --- Comments Button ---
  const saveCommentsButton = document.getElementById('add-note-btn');
  const commentsInput = document.getElementById('more-detail');
  const commentsText = document.getElementById('comments-text');

  if (saveCommentsButton && commentsInput && commentsText) {
    saveCommentsButton.addEventListener('click', () => {
      commentsText.textContent = commentsInput.value;
      commentsText.hidden = commentsInput.value.trim() === '';
    });
  }
});
