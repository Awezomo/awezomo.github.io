// Countdown Timer
var birthday = new Date("2024-04-10T00:00:00");
var countdownElement = document.getElementById('countdown-timer');

function updateCountdown() {
    var now = new Date();
    var currentYear = now.getFullYear();
    var birthdayYear = birthday.getFullYear();
    var isBirthday = now.getMonth() === birthday.getMonth() && now.getDate() === birthday.getDate();

    if (isBirthday) {
        // Today is the birthday
        countdownElement.innerHTML = "Alles Gute zum Geburtstag, Esther!";
    } else if (now > birthday) {
        // Calculate time since birthday
        var distance = now - birthday;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerHTML = "Esthers Geburtstag ist seit " + days + "d " + hours + "h " + minutes + "m " + seconds + "s vorbei!";
    } else {
        // Calculate time until birthday
        var distance = birthday - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerHTML = "Es sind noch " + days + "d " + hours + "h " + minutes + "m " + seconds + "s bis zu Esthers Geburtstag!";

        // Hide options container and continue button if current date is before birthday
        optionsContainer.style.display = 'none';
        continueButton.style.display = 'none';
    }
}
updateCountdown();
setInterval(updateCountdown, 1000);
