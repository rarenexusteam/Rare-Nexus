// ==========================
// Menu da Conta
// ==========================

const accountMenu = document.getElementById("accountMenu");
const profileButton = document.querySelector('a[href="login.html"]');

if (profileButton && accountMenu) {

    profileButton.addEventListener("click", function (e) {
        e.preventDefault();
        accountMenu.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {

        if (
            !accountMenu.contains(e.target) &&
            !profileButton.contains(e.target)
        ) {
            accountMenu.classList.remove("active");
        }

    });

}
