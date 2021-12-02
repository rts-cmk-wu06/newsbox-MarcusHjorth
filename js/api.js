let category = [
    "https://api.nytimes.com/svc/topstories/v2/Europe.json?api-key=iGqXXycRSQ8MWwcrwDX7AnO3UahT8iQo",
    "https://api.nytimes.com/svc/topstories/v2/Health.json?api-key=iGqXXycRSQ8MWwcrwDX7AnO3UahT8iQo",
    "https://api.nytimes.com/svc/topstories/v2/Sports.json?api-key=iGqXXycRSQ8MWwcrwDX7AnO3UahT8iQo",
    "https://api.nytimes.com/svc/topstories/v2/Business.json?api-key=iGqXXycRSQ8MWwcrwDX7AnO3UahT8iQo",
    "https://api.nytimes.com/svc/topstories/v2/Travle.json?api-key=iGqXXycRSQ8MWwcrwDX7AnO3UahT8iQo"
]

axios.get("https://api.nytimes.com/svc/topstories/v2/Sports.json?api-key=iGqXXycRSQ8MWwcrwDX7AnO3UahT8iQo").then((response) => {
    let path = response.data.results;
    
    category.forEach(element => {
        let section = document.querySelector('#wrapper');
        document.createElement('div')
    });


    // Europe
    // Health
    // Sport
    // Buisness
    // Travle 



    console.log(path);

    for(let i = 0; i < 5; i++) {
        //console.log(path[i]);

        const container = document.querySelector('#sectionSport');
       
        
        container.innerHTML += `
        <article class="article animate_animated">
        <div class="deleteItem"><i class="fas fa-inbox"></i></div>
        <aside class="swipeItem">
        <img class="article__img src="${path[i].multimedia[0].url}" alt="">
        <div class="article__text">
                    <h4>${path[i].title}</h2>
                    <p>${path[i].abstract}</p>
                    </div>
            </aside>
            </article>
            `
            
            
            
            /*
            
            let article = document.querySelector('.article')
            article.classList.add("animate_animated");
            container.setAttribute('id', path.abstract)
        const article = document.createElement('article')
        article.classList.add('article')
        
        const img = document.createElement('img')
        img.src = `${path[i].multimedia[0].url}`
        container.appendChild(article)
        article.appendChild(img)


        
        container.setAttribute('id', user.id)
        
        const deleteItem = document.createElement("div"); 
        deleteItem.classList.add("deleteItem");
        deleteItem.textContent = "Delete";

        const jokeItem = document.createElement("article"); 
        jokeItem.classList.add("swipeItem");
        jokeItem.textContent = user.name;
        
        container.appendChild(deleteItem)
        container.appendChild(jokeItem);
        main.appendChild(container);
  */      
    };
});