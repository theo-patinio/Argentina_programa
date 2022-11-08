(()=>{
  let contact_edit = document.querySelector(".contact_edit");
  let btn_edit_contact = document.getElementById("btn_edit_contact");
  let acerca_edit = document.querySelector(".acerca_edit");
  let btn_edit_acerca = document.getElementById("btn_edit_acerca");
  let btn_enviar_text = document.getElementById("btn_enviar_text");
  let acerca_text = document.getElementById("acerca_text")



   btn_edit_contact.addEventListener("click", mostrar_edit_contact);
   btn_edit_acerca.addEventListener("click", mostrar_edit_acerca);
   btn_enviar_text.addEventListener("click", editar_text_acerca);

   function mostrar_edit_contact() {
       contact_edit.classList.toggle("contact_edit");
    }
   function mostrar_edit_acerca() {
    acerca_edit.classList.toggle("acerca_edit");
    }

    function editar_text_acerca() {
      acerca_text.innerText = "hola";
    }




})();
