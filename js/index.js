function selectHero() {
    var heroes = document.getElementById('heroes').value
    document.getElementById('hero').src = "img/" + heroes + ".jpg"
}