document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Sidebar Drawer Toggle
    const sidebar = document.getElementById('sidebar');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

    const openSidebar = () => {
        sidebar.classList.add('mobile-active');
    };

    const closeSidebar = () => {
        sidebar.classList.remove('mobile-active');
    };

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openSidebar);
    }

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }

    // Close sidebar menu drawer on clicking any sidebar navigation link (useful for mobile)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });


    // 2. Scroll Spy Navigation (Toggle Active Navigation State)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

    const scrollSpyOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -40% 0px"
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, scrollSpyOptions);

    sections.forEach(section => {
        scrollSpyObserver.observe(section);
    });


    // 3. Scroll Reveal Sections Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });


    // 4. Skills Section animation logic removed (progress bars were replaced with a clean list of tools)


    // 5. Contact Form simulation handler removed (contact section was removed from HTML)
});
