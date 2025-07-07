// close drawer item click
document.querySelectorAll('#mobileNav a').forEach(el=>{
  el.addEventListener('click', ()=>
    bootstrap.Offcanvas.getInstance('#mobileNav')?.hide()
  );
});
