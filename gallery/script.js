function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: 45, lng: -58}
    });
    const types = {
        Apple: 'apple',
        ArtMuseum: 'art-museum-2',
        Bar: 'bar',
        Facebook: 'facebook',
        Google: 'google',
        OfficeBuilding: 'office-building',
        Square: 'square',
        Taxiboat: 'taxiboat',
        Theater: 'theater',
        Twitter: 'twitter',
        Uber: 'uber'
    }
    let icons = {};
    for (let type in types) {
        icons[type] = {icon:
            {
                url: 'images/' + types[type] + '.png',
                scaledSize: new google.maps.Size(36, 36)
            }
        }
    };
    let features = [
        {
            position: new google.maps.LatLng(37.7756531, -122.4202815,17),
            type: 'Square',
            width: 395,
            height: 527,
            file: 'square',
            caption: 'Square is a fintech company that makes both hardware and software. They have all kinds of secure payment solutions. Their most well known product is Square Cash, which lets you transfer money to each other via mobile app.'
        },
        {
            position: new google.maps.LatLng(37.7764685, -122.4193891),
            type: 'Twitter',
            width: 395,
            height: 527,
            file: 'twitter2',
            caption: 'Second onsite: Software Engineer - Public Cloud Services. This was one of my best interview experiences and they even gave me a gift pack with a Twitter-branded water bottle!'
        },
        {
            position: new google.maps.LatLng(37.4040146, -122.057346),
            type: 'Google',
            width: 395,
            height: 527,
            file: 'google5',
            caption: 'Fourth onsite: Web Solutions Engineer - and my first onsite for a position that isn\'t SWE.'
        },
        {
            position: new google.maps.LatLng(37.4211056, -122.0794032),
            type: 'Google',
            width: 527,
            height: 395,
            file: 'google3',
            caption: 'Third onsite: Software Engineer. First time I made it to Hiring Committee and didn\'t get immediately rejected.'
        },
        {
            position: new google.maps.LatLng(37.485073, -122.1504711),
            type: 'Facebook',
            width: 456,
            height: 456,
            file: 'facebook',
            caption: 'Facebook has excellent noodles, a rooftop garden, and a hidden vintage car inside one of the buildings!'
        },
        {
            position: new google.maps.LatLng(37.3289491, -122.0315046),
            type: 'Apple',
            width: 395,
            height: 527,
            file: 'apple',
            caption: 'This is 1 Infinite Loop, the former headquarters, before it was replaced by Apple Park. I had an outdoor lunch in a nearby building, Mariana 3. Believe it or not, they serve more than just apples!'
        },
        {
            position: new google.maps.LatLng(40.7530803, -73.9892127),
            type: 'Uber',
            width: 395,
            height: 527,
            file: 'uber',
            caption: 'Uber is one of my favorite companies because they take care of the two chores I most dislike - driving and cooking.'
        },
        {
            position: new google.maps.LatLng(40.740727, -74.004256),
            type: 'Google',
            width: 395,
            height: 527,
            caption: 'Left: My first onsite ever! Right: Fourth onsite and the second time I\'ve made it to Hiring Committee. Both for Software Engineer.'
        },
        {
            position: new google.maps.LatLng(44.000000, -76.7073211),
            type: 'Taxiboat',
            width: 527,
            height: 395,
            file: 'thousand_islands',
            caption: 'Thousand Islands is an archipelago of 1,864 islands that straddles the Canada-U.S. border. There is a delicious salad dressing named after this place. I\'m here enjoying a boat tour on the Canada side.'
        },
        {
            position: new google.maps.LatLng(40.4944023, -74.444841),
            type: 'Bar',
            width: 395,
            height: 527,
            file: 'oktoberfest',
            caption: '2019 New Brunswick Oktoberfest! From left to right: New Brunswick Mayor James M. Cahill, me, First Lady of New Jersey Tammy Murphy.'
        },
        {
            position: new google.maps.LatLng(53.3442067, -6.242178),
            type: 'Theater',
            width: 527,
            height: 395,
            file: 'grand_canal_theatre',
            caption: 'We\'re in the Grand Canal Theatre, now renamed the Bord G\xE1is Energy Theatre. It\'s the largest theatre in Ireland. We watched a modern dance inside.'
        },
        {
            position: new google.maps.LatLng(48.8606111, 2.3354553),
            type: 'ArtMuseum',
            width: 563,
            height: 370,
            file: 'louvre',
            caption: 'Learning about the world at the Louvre! Fine art and French history!'
        },
        {
            position: new google.maps.LatLng(50.7450877, 6.1300231),
            type: 'OfficeBuilding',
            width: 519,
            height: 401,
            file: 'dressler',
            caption: 'My father brought me to meet Ulrich Hansen, the owner of Dressler. Dressler is a business that makes radio frequency generators. I took a tour of his company. A few years after meeting him and exploring his company, I developed a curiosity of how things work in nature, particularly things we cannot see.'
        },
    ];
    let markers = [];
    for (let i = 0; i < features.length; i++) {
        let marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map,
            content: '<figure><img src="images/' + features[i].file + '.jpg" width="' + features[i].width + '" height="' + features[i].height + '" /><figcaption>' + features[i].caption + '</figcaption></figure>'
        });
        if (i == 6) {
            marker.content = '<figure><img src="images/google1.jpg" width="269" height="359" style="display:inline-block"/><img src="images/google4.jpg" width="269" height="359" style="display:inline-block"/><figcaption style="top:359px">' + features[i].caption + '</figcaption></figure>';
        }
        markers.push(marker);
    };
    let infowindows = [];
    markers.forEach(function(marker) {
        var infowindow = new google.maps.InfoWindow({content: marker.content});
        marker.addListener('mouseover', function() {
            infowindows.forEach(function(iw) {iw.close()});
            infowindow.open(map, marker);
        });
        marker.addListener('click', function() {
            infowindows.forEach(function(iw) {iw.close()});
            infowindow.open(map, marker);
        });
        google.maps.event.addListener(marker, 'mouseout', function(e) {
            timeout = setTimeout(function() {infowindow.close()}, 5000);
        });
        infowindows.push(infowindow);
    })
    const markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
