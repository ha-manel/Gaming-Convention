// sponsors section
const bodyDiv = document.querySelector('body');
const sponsors = document.createElement('section');
sponsors.className = 'sponsors';
sponsors.id = 'sponsors';
sponsors.innerHTML = '<h2 class="sponsors-header">Sponsors</h2> <hr class="orange-hr"> <div class="brands"> <img src="./images/ps-logo.png" class="sponsor-brand" alt=""> <img src="./images/riot-logo.png" class="sponsor-brand" alt=""> <img src="./images/xbox-logo.png" class="sponsor-brand" alt=""> <img src="./images/sony-logo.png" class="sponsor-brand" alt=""> <img src="./images/nintendo-logo.png" class="sponsor-brand" alt=""></div>';
bodyDiv.appendChild(sponsors);

// footer section
const footer = document.createElement('footer');
footer.innerHTML = ' <img src="./images/gc-logo.png" alt=" " class="footer-logo"> <p class="copyrights">2022 Gaming Convention. Boston, MA. <br> Some Rights Reserved.</p>';
bodyDiv.appendChild(footer);
