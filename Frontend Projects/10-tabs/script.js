function openTab(event, tab) {
    let tabsContent = document.querySelectorAll('.tab-content');
    tabsContent.forEach(content => content.classList.remove('active'));

    let tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.classList.remove('active');
        link.setAttribute('aria-selected', 'false');  // Desmarcar las pestañas como no activas
    });

    document.getElementById(tab).classList.add('active');
    event.currentTarget.classList.add('active');
    event.currentTarget.setAttribute('aria-selected', 'true');  // Marcar la pestaña actual como activa
}