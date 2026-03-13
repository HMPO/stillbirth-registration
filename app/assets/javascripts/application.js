//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})


document.addEventListener('DOMContentLoaded', function () {
  const detailsComponent = document.getElementById('gro-details');
  const cancelLink = document.getElementById('cancel-link');
  const form = detailsComponent.querySelector('form');

  if (cancelLink) {
    cancelLink.addEventListener('click', function (e) {
      e.preventDefault();
      detailsComponent.removeAttribute('open');
    });
  }

  if (form) {
    form.addEventListener('submit', function () {
      detailsComponent.removeAttribute('open');
    });
  }
});


//update notification detail
// document.addEventListener('DOMContentLoaded', function () {
//   const detailsComponent = document.getElementById('gro-details');
//   const cancelLink = document.getElementById('cancel-link');

//   // Cancel closes details without submitting
//   if (cancelLink) {
//     cancelLink.addEventListener('click', function (e) {
//       e.preventDefault();
//       detailsComponent.removeAttribute('open');
//     });
//   }

//   // Close details immediately after clicking submit (before reload)
//   const form = detailsComponent.querySelector('form');
//   if (form) {
//     form.addEventListener('submit', function () {
//       detailsComponent.removeAttribute('open');
//     });
//   }
// });

// end update notification detail



// child-details/name-date.html - makes the YES/ No name hide reveal work
document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[name="name-or-not"]');
  const yesBlock = document.getElementById("yes-name-block");
  const noBlock = document.getElementById("no-name-block");

  function toggleBlocks(selectedValue) {
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

  const checkedRadio = document.querySelector('input[name="name-or-not"]:checked');
  if (checkedRadio) {
    toggleBlocks(checkedRadio.value);
  }
});

window.GOVUKPrototypeKit.documentReady(() => {
  let selectElement = document.querySelector('#choose-country')

    accessibleAutocomplete.enhanceSelectElement({

      defaultValue: '',

      selectElement: selectElement

    })
    })

// copied button
