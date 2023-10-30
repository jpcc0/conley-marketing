<div class="screen-content py-8 px-4">
  <div class="max-w-lg mx-auto">
      <h2 class="text-secondary text-4xl font-extrabold pb-4 text-center pirata-font underline decoration-lime-600">
          Contact Me
      </h2>
      <form id="contactForm" class="space-y-4" method="POST">
        <input type="text" id="name" name="name" placeholder="Name" class="w-full p-2 pirata-font text-base bg-white border border-gray-300 focus:border-lime-600 rounded transition duration-300">
          <input type="email" id="email" name="email" placeholder="Email" class="w-full p-2 pirata-font text-base bg-white border border-gray-300 focus:border-lime-600 rounded transition duration-300">
          <textarea id="message" name="message" placeholder="Message" rows="5" class="w-full p-2 pirata-font text-base bg-white border border-gray-300 focus:border-lime-600 rounded transition duration-300"></textarea>
          <button type="submit" class="w-full py-2 px-4 pirata-font bg-lime-600 hover:bg-lime-700 text-secondary text-[18px] md:text-2xl font-light border decoration-lime-600 rounded transition duration-300 transform hover:scale-105">Send Message</button>
      </form>
  </div>
</div>

<script>
  import { onMount } from 'svelte';

  onMount(() => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
      };

      fetch('/.netlify/functions/contact', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
          alert('Message sent successfully.');
      })
      .catch((error) => {
          console.error('Error:', error);
          alert('Error sending message.');
      });
    });
  });
</script>

<style>
  .screen-content {
    min-height: calc(100vh - (py-4 * 2));
  }

  .hero {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(
      80% - (py-4 * 2)
    ); 
    overflow: hidden;
    position: relative;
  }

  .pirata-font {
    font-family: "Pirata One", sans-serif;
  }
  .nav-link {
    text-decoration: none;
    color: #f6f8e2; 
    transition: color 300ms ease;
  }

  .nav-link:hover {
    color: #9ccd62; 
  }
</style>