
// navbar menu button
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  });

// typewriter effect
    const words = ["Computer Engineering Graduate"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {
      currentWord = words[i];
      if (isDeleting) {
        document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
        j--;
        if (j == 0) {
          isDeleting = false;
          i++;
          if (i == words.length) {
            i = 0;
          }
        }
      } else {
        document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
        j++;
        if (j == currentWord.length) {
          isDeleting = true;
        }
      }
      setTimeout(type, 300);
    }

    type();

//expanding card
    const cards = document.querySelectorAll('.card');
  let activeIndex = -1;

  function expandCard(index) {
    if (activeIndex === index) {
      cards.forEach(card => card.style.flex = '1'); // reset
      activeIndex = -1;
    } else {
      cards.forEach((card, i) => {
        card.style.flex = i === index ? '5' : '1';
      });
      activeIndex = index;
    }
  }

  // Hover expand
  cards.forEach((card, i) => {
    card.addEventListener('mouseenter', () => {
      if (activeIndex === -1) {
        cards.forEach((c, j) => c.style.flex = j === i ? '5' : '1');
      }
    });
    card.addEventListener('mouseleave', () => {
      if (activeIndex === -1) {
        cards.forEach(c => c.style.flex = '1');
      }
    });
  });

//download pdf
    document.querySelector('#downloadRes').addEventListener('click', ()=>{
                // URL of the PDF file
                const pdfUrl = 'LARIBA_RESUME.pdf'; // Replace with your PDF URL
                const fileName = 'Lariba_Resume.pdf';

                const link = document.createElement('a');
                link.href = pdfUrl;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })


//toggle details for skills
    
    function toggleDetails(id) {
    // Close all other open sections
    document.querySelectorAll('[id^="details"]').forEach(section => {
        if (section.id !== id) {
            section.classList.add('max-h-0');
            section.classList.remove('max-h-96');
        }
    });

    // Toggle the clicked one
    const content = document.getElementById(id);
    content.classList.toggle('max-h-0');
    content.classList.toggle('max-h-96');
}

