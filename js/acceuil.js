
    // Fonctionnalité de navigation au clavier
    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowRight') {
          nextSlide(); // Passe à la diapositive suivante
          resetTimer(); // Réinitialise le minuteur d'auto-avancement
      } else if (event.key === 'ArrowLeft') {
          showSlide(slideIndex - 1); // Passe à la diapositive précédente
          resetTimer(); // Réinitialise le minuteur d'auto-avancement
      }
  });
  
  let slideIndex = 0;
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');
  
  function showSlide(index) {
      if (index >= slides.length) {
          slideIndex = 0;
      } else if (index < 0) {
          slideIndex = slides.length - 1;
      } else {
          slideIndex = index;
      }
  
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${(-slideIndex * 100)}%)`;
          dots[i].classList.remove('active');
      });
      dots[slideIndex].classList.add('active');
  }
  
  function currentSlide(index) {
      showSlide(index);
      resetTimer();
  }
  
  function nextSlide() {
      showSlide(slideIndex + 1);
  }
  
  let slideTimer = setInterval(nextSlide, 10000);
  
  function resetTimer() {
      clearInterval(slideTimer);
      slideTimer = setInterval(nextSlide, 10000);
  }
  
  // Initial display
  showSlide(slideIndex);
  
// js pour le block numero 3

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  const speed = 200; // Adjust the speed of the counter animation

  const updateCount = (counter) => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      // Determine increment based on the target
      let increment;
      if (target < 10) {
          increment = 1;
      } else {
          increment = target / speed;
      }

      if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(() => updateCount(counter), target < 10 ? 500 : 10);
      } else {
          counter.innerText = target;
      }
  };

  const resetCount = (counter) => {
      counter.innerText = '0';
  };

  const handleIntersect = (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const counter = entry.target;
              resetCount(counter); // Reset the count to 0
              updateCount(counter); // Start the count animation
          }
      });
  };

  const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1 // Trigger when 10% of the element is visible
  });

  counters.forEach(counter => {
      observer.observe(counter);
  });
});


// js pour presenter les formations 
document.addEventListener("DOMContentLoaded", function() {
    const formations = document.querySelectorAll('.formation');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 });

    formations.forEach((formation, index) => {
        observer.observe(formation);
        // Add delay based on the index
        formation.style.transitionDelay = `${index * 0.2}s`;
    });
});





  
  // code pour NO OBJECTIFS


  document.addEventListener("DOMContentLoaded", () => {
    const objectives = document.querySelectorAll(".objective");

    const handleIntersect = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(50px)';
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    objectives.forEach(objective => {
        observer.observe(objective);
    });
});

  
  // equipe pedagogique

  document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll(".team-member");

    const handleIntersect = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0; // Récupérer le délai d'animation défini sur l'élément
                entry.target.style.transitionDelay = delay + 'ms';
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.1 // Déclencher lorsque 10% de l'élément est visible
    });

    teamMembers.forEach(member => {
        observer.observe(member);
    });
});
  // Actualite sur le campus

  
  document.addEventListener("DOMContentLoaded", function() {
    const section = document.querySelector('.actualites-section');
    const title = document.querySelector('.section-title');
    const images = document.querySelectorAll('.image-wrapper');
    const moreNewsButton = document.querySelector('.more-news-button');

    // Fonction pour déclencher les animations
    function triggerAnimations() {
        section.style.opacity = 1;
        title.style.opacity = 1;
        images.forEach((image, index) => {
            setTimeout(() => {
                image.style.opacity = 1;
            }, 500 * (index + 1));
        });
        setTimeout(() => {
            moreNewsButton.style.opacity = 1;
        }, 500 * (images.length + 1));
    }

    // Fonction pour réinitialiser les animations
    function resetAnimations() {
        section.style.opacity = 0;
        title.style.opacity = 0;
        images.forEach(image => {
            image.style.opacity = 0;
        });
        moreNewsButton.style.opacity = 0;
    }

    // Intersection Observer pour vérifier la visibilité de la section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                triggerAnimations();
            } else {
                resetAnimations();
            }
        });
    }, { threshold: 0.5 }); // La section est considérée comme visible si 50% de son contenu est visible

    observer.observe(section);
});


// Video de presentation 


// Chargement de l'API YouTube
document.addEventListener("DOMContentLoaded", function() {
    const videoSection = document.querySelector('.video-section');
    const videoContainer = document.getElementById('video-container');

    // Fonction pour charger la vidéo YouTube
    function loadYouTubeVideo(videoId) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        videoContainer.appendChild(iframe);
    }

    // Appeler la fonction pour charger la vidéo avec l'ID spécifié
    const videoId = extractYouTubeId("https://www.youtube.com/watch?v=Yr3WwRsEoU8&t=2s");
    if (videoId) {
        loadYouTubeVideo(videoId);
    } else {
        // Gérer le cas où l'ID de la vidéo n'est pas valide ou n'a pas été trouvé
        videoSection.innerHTML = "<p>Erreur lors du chargement de la vidéo.</p>";
    }
    
    // Fonction pour extraire l'ID de la vidéo YouTube à partir de l'URL
    function extractYouTubeId(url) {
        const regex = /[?&]v=([^&]+)/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }
});


