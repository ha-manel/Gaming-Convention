// sponsors section
const bodyDiv = document.querySelector('body');
const sponsors = document.createElement('section');
sponsors.id = 'sponsors';
sponsors.innerHTML = '<h2>Sponsors</h2> <hr> <div id="brands"> <img src="./images/ps-logo.png" class="sponsor-brand" alt=""> <img src="./images/riot-logo.png" class="sponsor-brand" alt=""> <img src="./images/xbox-logo.png" class="sponsor-brand" alt=""> <img src="./images/sony-logo.png" class="sponsor-brand" alt=""> <img src="./images/nintendo-logo.png" class="sponsor-brand" alt=""></div>';
bodyDiv.appendChild(sponsors);

// footer section
const footer = document.createElement('footer');
footer.innerHTML = ' <img src="./images/gc-logo.png" alt=" "> <p>2022 Gaming Convention. Boston, MA. <br> Some Rights Reserved.</p>';
bodyDiv.appendChild(footer);
