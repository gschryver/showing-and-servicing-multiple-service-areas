import { getPets } from "./database.js"

document.addEventListener(
    "click",  
    (clickEvent) => {
        
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("pet")) {


            const [,petId] = itemClicked.id.split("--")


            for (const petPrimaryKey of pets) {

                if (petPrimaryKey.id === parseInt(petId)) {
                    window.alert(`${petPrimaryKey.name} barks at you`)
                }
            }
        }
    }
)

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

