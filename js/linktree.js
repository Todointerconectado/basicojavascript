document.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM document has been fully loaded.');
});

let gender = document.getElementById('gender');
let man = document.getElementById('man');
let women = document.getElementById('women');
let profileImg = document.getElementById('profileImg');

function selectGender(event) {

    let etiqueta = event.target.tagName;
    let id  = event.target.value;

    if(event.target && etiqueta === 'INPUT') {
        
        if(id === 'man' && women.classList.value === 'btnGender btnGenderSwitchedOn'){
            women.classList.remove('btnGenderSwitchedOn');
            profileImg.setAttribute('src', '../images/linktree/avatar-ej1.png');
        }
        if(id === 'women' && man.classList.value === 'btnGender btnGenderSwitchedOn'){
            man.classList.remove('btnGenderSwitchedOn');
            profileImg.setAttribute('src', '../images/linktree/avatar-ej2.png');
        }

        event.target.classList.add('btnGenderSwitchedOn');
    }
}

gender.addEventListener('click', selectGender);



