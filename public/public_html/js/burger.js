// function toggle_visibility() {
//     var e = document.getElementById("burger");
//     if(e.style.display == 'block')
//        e.style.display = 'none';
//     else
//        e.style.display = 'block';
// }
function toggle_visibility() {
    var e = document.getElementById("burger");
    var body = document.body;
    if(e.classList.contains('disappear')) {
       e.classList.remove('disappear');
       body.style.overflow = 'auto';

    } else {
       e.style.display = 'block';
       body.style.overflow = 'hidden';
       e.classList.add('disappear');
    }
}