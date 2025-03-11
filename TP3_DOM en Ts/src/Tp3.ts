document.addEventListener("DOMContentLoaded", () => {
    const tacheInput = document.getElementById("tacheInput") as HTMLInputElement;
    const ajouterBtn = document.getElementById("ajouterBtn") as HTMLButtonElement;
    const tachesListe = document.getElementById("tachesListe") as HTMLUListElement;
    const messageErreur = document.getElementById("messageErreur") as HTMLDivElement;
    
    function ajouterTache(): void {
      const texteTache = tacheInput.value.trim();
      if (texteTache === "") {
        messageErreur.textContent = "Veuillez entrer une tâche valide.";
        return;
      }
      messageErreur.textContent = "";
  
      const li = document.createElement("li");
      li.textContent = texteTache;
      
      const supprimerBtn = document.createElement("button");
      supprimerBtn.textContent = "Supprimer";
      supprimerBtn.addEventListener("click", () => {
        li.remove();
      });
      
      li.appendChild(supprimerBtn);
      tachesListe.appendChild(li);
      tacheInput.value = "";
    }
  
    ajouterBtn.addEventListener("click", ajouterTache);
  });
  