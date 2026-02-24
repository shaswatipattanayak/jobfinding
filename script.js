// document.addEventListener('DOMContentLoaded', function (){
//     // login modal
//     const loginBtn = document.getElementById('loginBtn');
//     const modal = document.getElementById('loginModal');
//     const closeModal = document.getElementById('closeModal');


//     if (loginBtn && modal && closeModal){
//         // open modal
//         loginBtn.addEventListener('click', (e) => {
//             e.preventDefault();
//             modal.classList.add('active');
//             document.body.style.overflow = 'hidden';
//        });

//         // close modal
//         const closeFn = () => {
//             modal.classList.remove('active');
//             document.body.style.overflow = '';
//         };

//         closeModal.addEventListener('click', closeFn);
//         modal.addEventListener('click', (e) => {
//             if (e.target === modal) closeFn();
//         });

//     // ESC Key 
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && modal.classList.container('active')) {
//             closeFn();
//         }
//     });
// }

// // mobile menu
// const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('nav');

// if (menuToggle && nav) {
//     menuToggle.addEventListener('click' , () => {
//         nav.classList.toggle('active');
//         menuToggle.innerHTML = nav.classList.contains('active') ? 'close' : 'menu';
//     });

//     document.querySelectorAll('nav a').forEach(link =>{
//         link.addEventListener('click', () => {
//             nav.classList.remove('active');
//              menuToggle.innerHTML ='menu' ;
//         });
//     });
// }
// console.log('Login Modal & Footer Fixed = working 100%');

// });




document.addEventListener('DOMContentLoaded', function () {


    // pagination working
const pages = document.querySelectorAll('.page');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentPage = 1;
const totalPages = pages.length;

function updatePagination() {
    pages.forEach(page => page.classList.remove('active'));
    pages[currentPage - 1].classList.add('active');
}

if (prevBtn && nextBtn) {

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });

    pages.forEach((page, index) => {
        page.addEventListener('click', () => {
            currentPage = index + 1;
            updatePagination();
        });
    });
}
// 
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');

    if (loginBtn && modal && closeModal) {

        // open modal
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // close function
        const closeFn = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeModal.addEventListener('click', closeFn);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeFn();
        });

        // ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeFn();
            }
        });
    }

    // mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.innerHTML = nav.classList.contains('active') ? 'Close' : 'Menu';
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.innerHTML = 'Menu';
            });
        });
    }

    console.log('Everything working correctly ✅');
});