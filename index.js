import "https://unpkg.com/navigo"  //Will create the global Navigo object used below

import { setActiveLink, loadTemplate, renderTemplate, adjustForMissingHash } from "./utils.js"
import { candidateHandlers } from "./candidates/candidates.js"


window.addEventListener("load", async () => {
  const templateCandidate = await loadTemplate("./candidates/candidate.html")
  const templateEdit = await loadTemplate("./edit/edit.html")


  const router = new Navigo("/", { hash: true });
  adjustForMissingHash()
  router
    .hooks({
      before(done, match) {
        setActiveLink("menu", match.url)
        done()
      }
    })

    .on("/", () => {
      renderTemplate(templateHome, "content")
    })


      .on("/candidates", (match) => {
      renderTemplate(templateCandidate, "content")
      router.updatePageLinks()
      candidateHandlers()

    })

    
    .on("/edit", (match) => {
      renderTemplate(templateEdit, "content")


  })

    });   

  window.onerror = (e) => alert(e)