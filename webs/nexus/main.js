let open = 0;
var article = document.getElementsByTagName('article');
article[0].classList.add('active');
function change(i) {
    if (i == 1) {
        // change to previous item
        if (!(open <= 0)) {
            for (let index = 0; index < article.length; index++) {
                article[index].classList.remove('active');
            }
            open = open - 1;
            article[open].classList.add('active');
        }
    }
    else if (i == 2) {
        // change to previous item
        if (!(open >= article.length)) {
            for (let index = 0; index < article.length; index++) {
                article[index].classList.remove('active');
            }
            open = open + 1;
            article[open].classList.add('active');
        }
    }
}    