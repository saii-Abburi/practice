const body = document.querySelector("body"), 
      sidebar = document.querySelector(".sidebar"),
      toggleSwitch = document.querySelector(".toggle"),
      searchBox = document.querySelector(".search-box"),
      modeSwitch = document.querySelector(".toggle-switch"),
      modeText = document.querySelector(".mode-text")


      modeSwitch.addEventListener("click", ()=>{
        body.classList.toggle("dark");
        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        }
        else{
            modeText.innerText = "Dark Mode"
        }
      })
      toggleSwitch.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
      })