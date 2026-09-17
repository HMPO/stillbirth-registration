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
  // const saveCommentsButton = document.getElementById('add-note-btn');
  // const commentsInput = document.getElementById('more-detail');
  // const commentsText = document.getElementById('comments-text');

  // if (saveCommentsButton && commentsInput && commentsText) {
  //   saveCommentsButton.addEventListener('click', () => {
  //     commentsText.textContent = commentsInput.value;
  //     commentsText.hidden = commentsInput.value.trim() === '';
  //   });
  // }

  // disposal page task 1 comments
  document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.getElementById('more-detail');
  const saveBtn = document.getElementById('add-note-btn');
  const commentsText = document.getElementById('comments-text');
  const cancelLink = document.getElementById('cancel-link');

  // On page load, show saved comment (if any)
  const savedComment = sessionStorage.getItem('comments');
  if (savedComment) {
    textarea.value = savedComment;
    commentsText.textContent = savedComment;
    commentsText.hidden = false;
  } else {
    commentsText.hidden = true;
  }

  // Save comment on button click
  saveBtn.addEventListener('click', function() {
    const comment = textarea.value.trim();
    sessionStorage.setItem('comments', comment);
    commentsText.textContent = comment;
    commentsText.hidden = !comment;
  });

  // Cancel: clear textarea and hide saved comment
  cancelLink.addEventListener('click', function(e) {
    e.preventDefault();
    textarea.value = '';
    sessionStorage.removeItem('comments');
    commentsText.textContent = '';
    commentsText.hidden = true;
  });
});

// disposal page task 2 comments
document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.getElementById('more-detail-2');
  const saveBtn = document.getElementById('add-note-btn-2');
  const commentsText = document.getElementById('comments-text-2');
  const cancelLink = document.getElementById('cancel-link-2');

  // Use a unique sessionStorage key for this section
  const storageKey = 'comments2';

  // On page load, show saved comment (if any)
  const savedComment = sessionStorage.getItem(storageKey);
  if (savedComment) {
    textarea.value = savedComment;
    commentsText.textContent = savedComment;
    commentsText.hidden = false;
  } else {
    commentsText.hidden = true;
  }

  // Save comment on button click
  saveBtn.addEventListener('click', function() {
    const comment = textarea.value.trim();
    sessionStorage.setItem(storageKey, comment);
    commentsText.textContent = comment;
    commentsText.hidden = !comment;
  });

  // Cancel: clear textarea and hide saved comment
  cancelLink.addEventListener('click', function(e) {
    e.preventDefault();
    textarea.value = '';
    sessionStorage.removeItem(storageKey);
    commentsText.textContent = '';
    commentsText.hidden = true;
  });
});



//end
});
