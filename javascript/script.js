// 共通点
// -------------------------------

// 足軽のやつ
document.getElementById("asigal").addEventListener("click", () => {
document.getElementById("hukidasi").classList.toggle("visible");
});
// topに戻る
document.getElementById("btn1").addEventListener("click",() => {
window.scrollTo({
top:0,
behavior:"smooth"
});
});