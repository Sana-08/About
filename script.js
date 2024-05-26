// document.addEventListener('DOMContentLoaded', function() {
//     const allIndicator = document.querySelectorAll('.indicator li');
//     const allContent = document.querySelectorAll('.content li');

//     allIndicator.forEach(item => {
//         item.addEventListener('click', function() {
//             const content = document.querySelector(this.dataset.target);

//             allIndicator.forEach(i => {
//                 i.classList.remove('active');
//             });

//             allContent.forEach(i => {
//                 i.classList.remove('active');
//             });

//             content.classList.add('active');
//             this.classList.add('active');
//         });
//     });
// });




document.addEventListener('DOMContentLoaded', function() {
    const allIndicator = document.querySelectorAll('.indicator li');
    const allContent = document.querySelectorAll('.content li');

    allIndicator.forEach(item => {
        item.addEventListener('click', function() {
            const contentId = this.getAttribute('data-target');
            const content = document.querySelector(contentId);

            allIndicator.forEach(i => {
                i.classList.remove('active');
            });

            allContent.forEach(i => {
                i.classList.remove('active');
            });

            content.classList.add('active');
            this.classList.add('active');
        });
    });
});
