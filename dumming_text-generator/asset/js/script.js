let text = [
	`Lorem Ipsum is simply dummy text of the printing and typesetting
 industry. Lorem Ipsum has been the industry's standard dummy text ever
 since the 1500s, when an unknown printer took a galley of type and
 scrambled it to make a type specimen book. It has survived not only five
 centuries, but also the leap into electronic typesetting, remaining essentially
 unchanged.`,
 `It was popularised in the 1960s with the release of Letraset
 sheets containing Lorem Ipsum passages, and more recently with desktop
 publishing software like Aldus PageMaker including versions of Lorem Ipsum.
 It is a long established fact that a reader will be distracted by the readable
 content of a page when looking at its layout.`,
 `The point of using Lorem Ipsum
 is that it has a more-or-less normal distribution of letters, as opposed to
 using 'Content here, content here', making it look like readable English.
 Many desktop publishing packages and web page editors now use Lorem
 Ipsum as their default model text, and a search for 'lorem ipsum' will
 uncover many web sites still in their infancy.`,
 `Contrary to popular belief, Lorem Ipsum is not simply random text. It has
 roots in a piece of classical Latin literature from 45 BC, making it over 2000
 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
 in Virginia, looked up one of the more obscure Latin words, consectetur,
 from a Lorem Ipsum passage, and going through the cites of the word in
 classical literature, discovered the undoubtable source.`,
 `The standard chunk of Lorem Ipsum used since the 1500s is reproduced
below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
Bonorum et Malorum" by Cicero are also reproduced in their exact original
form, accompanied by English versions from the 1914 translation by H.
Rackham.`,
`
But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was
 born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who 
do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
`,
`Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, 
but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a 
trivial example, which of us ever undertakes laborious physical 
exercise, except to obtain some advantage from it? But who has any right to find fault with a man who 
chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces 
no resultant pleasure?`,
`On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by 
the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that 
are bound to ensue; and equal blame belongs to those who fail
 in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.`,
 `These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice
  is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to
  be welcomed and every pain avoided. But in certain circumstances and owing to
   the claims of duty or the obligations of business it will frequently 
   occur that pleasures have to be repudiated and annoyances
    accepted.`
]

const form = document.querySelector(".lorem-form");
const result = document.querySelector(".lorem-content");
let value = document.getElementById("amount")

//submit form
form.addEventListener("submit", function(e){
    //prevent default
    e.preventDefault()
    let amount = parseInt(value.value);
    let rand = Math.floor(Math.random()*text.length)
    if(isNaN(amount) || amount <= 0 || amount >= text.length){
        result.innerHTML = `<p class="result">${text[rand]}</p>`;
    }else{
        let paragraph = text.slice(0, amount);
        paragraph = paragraph.map((item)=>{
            return `<p class="result">${item}</p>`
        }).join("");
        result.innerHTML = paragraph;
    }
})
