const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
    .typeString('Centro Biotecnología Agropecuaria')
    .pauseFor(200)
    .start();