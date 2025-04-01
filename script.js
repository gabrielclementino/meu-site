document.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    document.getElementById('fundo').style.transform = 'translate(' + x * 50 + 'px, ' + y * 50 + 'px)';
    document.getElementById('meio').style.transform = 'translate(' + x * 30 + 'px, ' + y * 30 + 'px)';
    document.getElementById('frente').style.transform = 'translate(' + x * 15 + 'px, ' + y * 15 + 'px)';
});
