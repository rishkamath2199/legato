const sideNav = () => {
    const burger = document.querySelector(".burger");
    burger.addEventListener('click', function () {
        document.getElementById("nav-linking").classList.toggle("active");
    });
}
sideNav();