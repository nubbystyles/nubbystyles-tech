/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

if(menuBtn && mobileMenu){

  menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

  });

}

/* REVEAL ANIMATION */

function revealSections(){

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {

    const windowHeight = window.innerHeight;

    const revealTop = el.getBoundingClientRect().top;

    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      el.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();

/* CONTACT MODAL SYSTEM */

const triggers = document.querySelectorAll(".contact-trigger");

const modal = document.getElementById("contactModal");

const modalTitle = document.getElementById("modalTitle");

const formFields = document.getElementById("formFields");

const closeModal = document.getElementById("closeModal");

if(
  triggers.length > 0 &&
  modal &&
  modalTitle &&
  formFields &&
  closeModal
){

const formTemplates = {

website: `
<input type="text" name="Full Name" placeholder="Full Name" required>

<input type="email" name="Email" placeholder="Email Address" required>

<input type="text" name="Business Name" placeholder="Business Name">

<select name="Website Type">

<option>Business Website</option>
<option>Ecommerce Website</option>
<option>Portfolio Website</option>
<option>Landing Page</option>

</select>

<input type="text" name="Budget" placeholder="Estimated Budget">

<textarea name="Project Details" placeholder="Tell us about your website project"></textarea>
`,

design: `
<input type="text" name="Full Name" placeholder="Full Name" required>

<input type="email" name="Email" placeholder="Email Address" required>

<input type="text" name="Brand Name" placeholder="Brand Name">

<textarea name="Design Request" placeholder="Describe your design request"></textarea>
`,

writing: `
<input type="text" name="Full Name" placeholder="Full Name" required>

<input type="email" name="Email" placeholder="Email Address" required>

<textarea name="Writing Project" placeholder="Tell us about the content you need"></textarea>
`,

marketing: `
<input type="text" name="Full Name" placeholder="Full Name" required>

<input type="email" name="Email" placeholder="Email Address" required>

<textarea name="Marketing Goals" placeholder="Describe your marketing goals"></textarea>
`,

business: `
<input type="text" name="Full Name" placeholder="Full Name" required>

<input type="email" name="Email" placeholder="Email Address" required>

<textarea name="Business Needs" placeholder="Describe your business development needs"></textarea>
`,

partnership: `
<input type="text" name="Company Name" placeholder="Company Name" required>

<input type="email" name="Email" placeholder="Business Email" required>

<textarea name="Partnership Proposal" placeholder="Describe your partnership proposal"></textarea>
`,

support: `
<input type="text" name="Full Name" placeholder="Full Name" required>

<input type="email" name="Email" placeholder="Email Address" required>

<textarea name="Support Request" placeholder="Describe the issue you need help with"></textarea>
`,

complaint: `
<input type="text" name="Full Name" placeholder="Full Name" required>

<input type="email" name="Email" placeholder="Email Address" required>

<textarea name="Complaint" placeholder="Describe your complaint or feedback"></textarea>
`,

general: `
<input type="text" name="Full Name" placeholder="Full Name" required>

<input type="email" name="Email" placeholder="Email Address" required>

<textarea name="Message" placeholder="Enter your message"></textarea>
`

};

triggers.forEach((trigger) => {

trigger.addEventListener("click", () => {

const type = trigger.dataset.type;

modal.classList.add("active");

modalTitle.innerText =
trigger.querySelector("h3").innerText;

formFields.innerHTML = formTemplates[type];

});

});

closeModal.addEventListener("click", () => {

modal.classList.remove("active");

});

window.addEventListener("click", (e) => {

if(e.target === modal){

modal.classList.remove("active");

}

});

}

/* FEEDBACK MODAL */

const feedbackModal =
document.getElementById("feedbackModal");

const openFeedback =
document.getElementById("openFeedback");

const closeFeedback =
document.getElementById("closeFeedback");

if(
feedbackModal &&
openFeedback &&
closeFeedback
){

openFeedback.addEventListener("click", () => {

feedbackModal.classList.add("active");

});

closeFeedback.addEventListener("click", () => {

feedbackModal.classList.remove("active");

});

window.addEventListener("click", (e) => {

if(e.target === feedbackModal){

feedbackModal.classList.remove("active");

}

});

}
