/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

		const questionnaire = document.getElementById('questionnaire');
	const resultats = document.getElementById('resultats');

	questionnaire.addEventListener('submit', (e) => {
	  e.preventDefault();
	  
	  const reponses = new FormData(questionnaire);
	  const pourcentages = { v: 0, a: 0, k: 0 };
	  
	  for (const reponse of reponses.values()) {
	    pourcentages[reponse]++;
	  }
	  
	  const total = Object.values(pourcentages).reduce((acc, curr) => acc + curr);
	  
	  resultats.textContent = `Vous êtes ${Math.round(pourcentages.v / total * 100)}% visuel, ${Math.round(pourcentages.a / total * 100)}% auditif et ${Math.round(pourcentages.k / total * 100)}% kinesthésique.`;
	});


	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

})(jQuery);
