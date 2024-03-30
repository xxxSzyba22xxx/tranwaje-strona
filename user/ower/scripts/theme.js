     function gotoPersonlization() {
        document.getElementById('firstscreen').style.display = 'none';
        document.getElementById('firstscreen2').style.display = 'block';
      }

      function dont() {
        // Handle case when user chooses not to personalize
        alert("Możesz zawsze wrócić i spersonalizować swój profil później! Na razie musisz spersonalizować!");
      }

      window.onload = function() {
        document.getElementById('changeBackgroundToBlack').addEventListener('change', function() {
          if (this.checked) {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
          } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
          }
        });

        document.getElementById('changeBackgroundToWhite').addEventListener('change', function() {
          if (this.checked) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
          } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = "'';
          }
        });
      };
