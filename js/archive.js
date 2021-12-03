let recycle = JSON.parse(localStorage.getItem('deletedItems'));

recycle.forEach(recycleItem => {
    const container = document.querySelector('#container');

    for(let i = 0; i < recycleItem; i++) {
        function shortenStr(str, max){
            if(str.length <= max) return str;
            return str.substr(0, str.lastIndexOf(" ", 30, "..."));
        }
    };

    container.innerHTML += `
    <article class="article animate_animated">
        <div class="deleteItem"><i class="fas fa-trash"></i></div>
        <aside class="swipeItem">
            <img class="article__img" src="${recycleItem.img}" alt="">
            <div class="article__text">
                <h4>${recycleItem.title}</h4>
                <p>${recycleItem.abstract}</p>
            </div>
        </aside>
    </article>
    `
});
