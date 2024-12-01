// Fetch JSON data
fetch('cv.json')
  .then(response => response.json())
  .then(data => {
   
    const workExperienceContainer = document.getElementById('work-experience');
    data.work_experience.forEach(job => {
      const jobHTML = `
        <div class="containerabout">
          <div class="cardleft">
            <p class="Frontendtext">My work</p>
            <div class="textincardleft">
              <p class="imgwork1">
                <img src="mdi_office-building.svg" alt="building" />${job.workplace}
              </p>
              <p class="imgwork1">
                <img src="carbon_location.svg" alt="navi" />${job.place}
              </p>
            </div>
          </div>
          <div class="cardright">
            <p class="fulltimebox">${job.description}</p>
            <p class="aboutmedate">${job.period}</p>
          </div>
        </div>
      `;
      workExperienceContainer.innerHTML += jobHTML;
    });

   
    const educationContainer = document.getElementById('education');
    data.education.forEach(edu => {
      const eduHTML = `
        <div class="containerabout">
          <div class="cardleft">
            <p class="Frontendtext">My studies</p>
            <div class="textincardleft">
              <p class="imgwork1">
                <img src="mdi_office-building.svg" alt="building" /> ${edu.school}
              </p>
              <p class="imgwork1">
                <img src="carbon_location.svg" alt="navi" /> ${edu.place}
              </p>
            </div>
          </div>
          <div class="cardright">
            <p class="fulltimebox">${edu.description}</p>
            <p class="aboutmedate">${edu.period}</p>
          </div>
        </div>
      `;
      educationContainer.innerHTML += eduHTML;
    });
  })
  .catch(error => console.error('Error fetching data:', error));
