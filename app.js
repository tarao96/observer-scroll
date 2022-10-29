let imagesItem = [...document.querySelectorAll(".img-wrap")]; // 配列で取得
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

// 具体的にいつk￥発動させるのかを決めるオプション
let options = {
    rootMargin: "0px",
    threshold: 0.5
}

// ある特定の位置を越えると作動する関数
let setItemActive = entries => {
    console.log(entries);
    entries.map(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
};

let observer = new IntersectionObserver(setItemActive, options); // 交差を監視して、閾値を過ぎたらコールバック関数が呼ばれる


// img-wrapは偶数と奇数で出現する場所が違うという処理
imagesItem.map((item, index) => {
    console.log(item, index);
    item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
    index % 2 === 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item); // itemを常に監視する
});

titles.map((title, index) => {
    index % 2 === 0 ? (title.style.left = "45%") : (title.style.left = "35%");
    observer.observe(title) ;
});

observer.observe(titleMessage);

