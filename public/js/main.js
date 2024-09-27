document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
    });

    // Initialize Feather Icons
    feather.replace();

    const factContainer = document.getElementById('fact-container');

    if (factContainer) {
        // Did You Know? facts rotation
        const facts = [
            "The US has over 4 million miles of public roads.",
            "About 42% of major urban highways are congested.",
            "The average American spends 54 hours a year in traffic delays.",
            "Public transportation saves the US 4.2 billion gallons of gasoline annually.",
            "There are over 617,000 bridges in the United States.",
            "The US freight system moves about 50 million tons of goods worth $53 billion each day.",
            "The American Society of Civil Engineers gave US infrastructure a C- grade in 2021.",
            "The US has over 87,000 dams, with an average age of 56 years.",
            "About 43% of public roads are in poor or mediocre condition.",
            "The US power grid has more than 9,200 electric generating units connected to 600,000 miles of transmission lines.",
            "The US has 926 ports handling 2.3 billion tons of cargo annually.",
            "There are approximately 140,000 miles of railroads in the United States.",
            "The US has more than 3,000 public-use airports and 252 air traffic control facilities.",
            "About 7.6% of bridges in the US are considered structurally deficient.",
            "The US drinking water system loses an estimated 6 billion gallons of treated water per day due to leaks."
        ];

        let currentFactIndex = 0;

        function rotateFact() {
            factContainer.style.opacity = 0;
            setTimeout(() => {
                factContainer.textContent = facts[currentFactIndex];
                factContainer.style.opacity = 1;
                currentFactIndex = (currentFactIndex + 1) % facts.length;
            }, 500);
        }

        setInterval(rotateFact, 10000); // Rotate every 10 seconds
        rotateFact(); // Initial fact display
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
