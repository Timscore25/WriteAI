    function SwitchImputs () {
      const email = document.getElementById('email');
      const article = document.getElementById('article');
      const essay = document.getElementById('essay');
      const anything = document.getElementById('anything');

      const emailIsActive = email.classList.contains('is-active');
      const articleIsActive = article.classList.contains('is-active');
      const essayIsActive = essay.classList.contains('is-active');
      const anythingIsActive = anything.classList.contains('is-active');

        if(emailIsActive) {
          email.getElementsByClassName('emailInput').style.display = 'block';
          console.log('email is active');
        } else if(articleIsActive); {
          article.getElementsByClassName('articleInput').style.display = 'block';
          console.log('article is active');
        }
    }

export default SwitchImputs;