let category = [
    "https://api.nytimes.com/svc/topstories/v2/World.json?api-key=iGqXXycRSQ8MWwcrwDX7AnO3UahT8iQo",
    "https://api.nytimes.com/svc/topstories/v2/Health.json?api-key=iGqXXycRSQ8MWwcrwDX7AnO3UahT8iQo",
    "https://api.nytimes.com/svc/topstories/v2/Sports.json?api-key=iGqXXycRSQ8MWwcrwDX7AnO3UahT8iQo",
    "https://api.nytimes.com/svc/topstories/v2/Business.json?api-key=iGqXXycRSQ8MWwcrwDX7AnO3UahT8iQo",
    "https://api.nytimes.com/svc/topstories/v2/Travel.json?api-key=iGqXXycRSQ8MWwcrwDX7AnO3UahT8iQo"
]


for(let i = 0; i < category.length; i++) {
    axios.get(category[i]).then((response) => {
        let path = response.data.results;
    
        //let section = document.querySelector('#wrapper');
        
        for(let i = 0; i < 3; i++) {
            function shortenStr(str, max){
                if(str.length <= max) return str;
                return str.substr(0, str.lastIndexOf(" ", 30, "..."));
            }

            const container = document.querySelector('#sectionSport');
            if (path[i].multimedia && path[i].abstract)  {
            
                container.innerHTML += `
                <article class="article animate_animated">
                    <div class="deleteItem"><i class="fas fa-inbox"></i></div>
                    <aside class="swipeItem">
                        <img class="article__img" src="${path[i].multimedia[0].url}" alt="">
                        <div class="article__text">
                            <h4>${path[i].title}</h4>
                            <p>${shortenStr(path[i].abstract)}</p>
                        </div>
                    </aside>
                </article>
                `
            }
        };
    });
};