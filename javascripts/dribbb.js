var callback = function (shot) {
            var html = '';

            html += '<a href="' + shot.url + '" target="_blank">';
	        html += '<img src="' + shot.image_url + '" ';
	        html += 'alt="' + shot.title + '"></a>';

            document.getElementById('#drib').innerHTML = html;
        };

        jribbble.getShotById('914651', callback);