function get_offset(e,t){t=document.querySelector(t),t=window.getComputedStyle(t),Number(t.getPropertyValue("width").slice(0,-2));document.documentElement.clientHeight,document.documentElement.clientWidth;return 90}function scroll_lines(e,t,l){var o,r,n=document.querySelector(".page__colaborates-first"),s=document.querySelector(".page__colaborates-second");n.getBoundingClientRect().y<window.innerHeight&&(o=window.getComputedStyle(n),r=Number(o.getPropertyValue("left").slice(0,-2)),o=Number(o.getPropertyValue("right").slice(0,-2)),"down"===e?0<o+t?n.style.left=r-o+"px":o+t<0&&(n.style.left=r-t+"px"):"up"===e&&(n.style.left=0<r+t?r-r+"px":r+t+"px")),s.getBoundingClientRect().y<window.innerHeight&&(o=window.getComputedStyle(s),n=Number(o.getPropertyValue("left").slice(0,-2)),r=Number(o.getPropertyValue("right").slice(0,-2)),"down"===e?s.style.right=0<n+l?r-n+"px":r-l+"px":"up"===e&&(s.style.right=0<r+l?r-r+"px":r+l+"px"))}var last_scroll=0;window.addEventListener("scroll",()=>{var e=last_scroll-window.scrollY,t=get_offset(e,".page__colaborates-first"),e=get_offset(e,".page__colaborates-second");window.scrollY>last_scroll?scroll_lines("down",t,e):scroll_lines("up",t,e),last_scroll=window.scrollY});