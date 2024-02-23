document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-drawer').addEventListener('submit', function(event) {
        event.preventDefault();
        let maxNumber = document.getElementById('max-number').value;
        maxNumber = parseInt(maxNumber);

        let drawerNumber = Math.random() * maxNumber;
        drawerNumber = Math.floor(drawerNumber + 1);

        document.getElementById('result-value').innerText = drawerNumber;
        document.querySelector('.result').style.display = ('block');
    })
})