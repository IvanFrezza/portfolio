const container_block = document.getElementById('skill-list'); 


let skillList = {
    "html":  45,
    "css": 45,
    "JS":  45,
    "React": 45,
    "Python":  45,
    "Flask": 45,
    "PostgreSQL":  45,
    "MySQL": 45,
    "MongoDB":  45,
    "Git": 45,
    "Terraform":  45,
    "Aws": 45,
    "Docker":  45,
    "Php": 45,
}



function buildTemplate(name, percent){ 
    let progressClass = `p${percent}`

    
    return `<div class="progress">
    <div class="circular-progress ${progressClass}">
      <span class="progress-value">${percent}%</span>
    </div>
    <span class="text">${name}</span>
  </div>`
}



// Iterate through the object
for (const key in skillList) {
    container_block.insertAdjacentHTML("beforeend", buildTemplate(key, skillList[key]))    
};



