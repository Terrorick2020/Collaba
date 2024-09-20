// const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
// accordionItemHeaders.forEach(accordionItemHeader => {
//   accordionItemHeader.addEventListener("click", event => {
//     accordionItemHeader.classList.toggle("active");
//     const accordionItemBody = accordionItemHeader.nextElementSibling;
//     if(accordionItemHeader.classList.contains("active")) {
//       accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
//     }
//     else {
//       accordionItemBody.style.maxHeight = 0;
//     }
    
//   });
// });
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
accordionItemHeaders.forEach(accordionItemHeader => { accordionItemHeader.addEventListener("click", event => {
    // Закрываем все остальные блоки, кроме текущего
    accordionItemHeaders.forEach(otherHeader => {      if (otherHeader !== accordionItemHeader && otherHeader.classList.contains("active")) {
        otherHeader.classList.remove("active");
        const otherBody = otherHeader.nextElementSibling;
        otherBody.style.maxHeight = 0;
      }
    });

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});