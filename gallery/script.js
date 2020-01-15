function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
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
            url: 'https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/71642827_10217310758293629_5058504832168493056_n.jpg?_nc_cat=103&_nc_ohc=XsfsMD93rfEAX8yik2v&_nc_ht=scontent.fewr1-6.fna&oh=714dc4d7fd724cb02680b805762ee07d&oe=5EAF1260',
            caption: 'Square is a fintech company that makes both hardware and software. They have all kinds of secure payment solutions. Their most well known product is Square Cash, which lets you transfer money to each other via mobile app.'
        },
        {
            position: new google.maps.LatLng(37.7764685, -122.4193891),
            type: 'Twitter',
            width: 395,
            height: 527,
            url: 'https://scontent.fewr1-3.fna.fbcdn.net/v/t1.0-9/p720x720/50396403_10215461031411613_935406893105414144_o.jpg?_nc_cat=109&_nc_ohc=DB3KjXGw5qYAX_7MG6z&_nc_ht=scontent.fewr1-3.fna&_nc_tp=1&oh=6cfe5a95eee20574285de82fda7e5b05&oe=5EDB131D',
            caption: 'Second onsite.<br>Software Engineer - Public Cloud Services. This was one of my best interview experiences and they even gave me a gift pack with a Twitter-branded water bottle!'
        },
        {
            position: new google.maps.LatLng(37.4211056, -122.0794032),
            type: 'Google',
            width: 527,
            height: 395,
            url: 'https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/70747394_10217273813770039_8665028289829535744_n.jpg?_nc_cat=102&_nc_ohc=vJZ7AFgNpxYAX_1BB9i&_nc_ht=scontent.fewr1-6.fna&oh=6f1146ac076e165cbf73cc0231acdaca&oe=5EA766BF',
            caption: 'Third onsite. Software Engineer. First time I made it to Hiring Committee and didn\'t get immediately rejected.'
        },
        {
            position: new google.maps.LatLng(37.485073, -122.1504711),
            type: 'Facebook',
            width: 456,
            height: 456,
            url: 'https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-9/51099673_10215472065807466_8222625393958453248_n.jpg?_nc_cat=111&_nc_ohc=nrHgcaUW5CEAX_tTmPg&_nc_ht=scontent.fewr1-2.fna&oh=ea9a877ba16410a1fd051c6e3ffd0084&oe=5EACFDB7',
            caption: 'Facebook has excellent noodles, a rooftop garden, and a hidden vintage car inside one of the buildings!'
        },
        {
            position: new google.maps.LatLng(37.3289491, -122.0315046),
            type: 'Apple',
            width: 395,
            height: 527,
            url: 'https://scontent.fewr1-5.fna.fbcdn.net/v/t1.0-9/p720x720/72570633_10217344842945724_7030427749164515328_o.jpg?_nc_cat=105&_nc_ohc=gzL2obhHS20AX9GpT6O&_nc_ht=scontent.fewr1-5.fna&_nc_tp=1&oh=8bfcb05d15b5ae77f66ec3b826407dee&oe=5EDC0A3C',
            caption: 'This is 1 Infinite Loop, the former headquarters, before it was replaced by Apple Park. I had an outdoor lunch in a nearby building, Mariana 3. Believe it or not, they serve more than just apples!'
        },
        {
            position: new google.maps.LatLng(40.7530803, -73.9892127),
            type: 'Uber',
            width: 395,
            height: 527,
            url: 'https://scontent.fewr1-1.fna.fbcdn.net/v/t1.0-9/69152639_10216998929658108_1009356497546641408_n.jpg?_nc_cat=100&_nc_ohc=EkJu4OYMT7AAX9QxARX&_nc_ht=scontent.fewr1-1.fna&oh=d43133dfc6be7b24b19734fb836b7c5e&oe=5EAC7376',
            caption: 'Uber is one of my favorite companies because they take care of the two chores I most dislike to do - driving and cooking.'
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
            url: 'https://scontent.fewr1-2.fna.fbcdn.net/v/t1.0-9/428973_3802844502299_212849733_n.jpg?_nc_cat=111&_nc_ohc=hemaSLVOJ-gAX9a0CBa&_nc_ht=scontent.fewr1-2.fna&oh=2db8f13e717710c9a164c611c2e5f93c&oe=5E8EAB15',
            caption: 'Thousand Islands is an archipelago of 1,864 islands that straddles the Canada-U.S. border. There is a delicious salad dressing named after this place. I\'m here enjoying a boat tour on the Canada side.'
        },
        {
            position: new google.maps.LatLng(40.4944023, -74.444841),
            type: 'Bar',
            width: 395,
            height: 527,
            url: 'https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/72781131_10217359313027467_1822678949558222848_n.jpg?_nc_cat=102&_nc_ohc=dBAaObHyDr8AX8U2qoY&_nc_ht=scontent.fewr1-6.fna&oh=a53628030bfcbc74646d9ccf9f64bccf&oe=5E8D6579',
            caption: '2019 New Brunswick Oktoberfest! From left to right: New Brunswick Mayor James M. Cahill, me, New Jersey First Lady Tammy Murphy.'
        },
        {
            position: new google.maps.LatLng(53.3442067, -6.242178),
            type: 'Theater',
            width: 527,
            height: 395,
            url: 'https://scontent.fewr1-5.fna.fbcdn.net/v/t1.0-9/528604_3814406071331_603515262_n.jpg?_nc_cat=107&_nc_ohc=yxGSW-P6XYMAX9uQcpu&_nc_ht=scontent.fewr1-5.fna&oh=7666f79ad67cd6b1268851fb9a81e13c&oe=5E9D831E',
            caption: 'We\'re in the Grand Canal Theatre, now renamed the Bord G\xE1is Energy Theatre. It\s the largest theatre in Ireland. We watched a modern dance inside.'
        },
        {
            position: new google.maps.LatLng(48.8606111, 2.3354553),
            type: 'ArtMuseum',
            width: 563,
            height: 370,
            url: 'https://scontent.fewr1-6.fna.fbcdn.net/v/t31.0-8/1557164_10201930037425220_384809430_o.jpg?_nc_cat=101&_nc_ohc=pbmF0ESCAlsAX_56X47&_nc_ht=scontent.fewr1-6.fna&oh=7cb77451294595040a639fac8a13fa28&oe=5E92BB3D',
            caption: 'Learning about the world at the Louvre! Fine art and French history!'
        },
        {
            position: new google.maps.LatLng(50.7450877, 6.1300231),
            type: 'OfficeBuilding',
            width: 519,
            height: 401,
            url: 'https://scontent.fewr1-3.fna.fbcdn.net/v/t1.15752-9/54432952_272131870348107_3414548435393576960_n.jpg?_nc_cat=109&_nc_ohc=F9GorXD6ZkMAX-QIKPK&_nc_ht=scontent.fewr1-3.fna&oh=e2ecbc2b25a6f1ddc8c2ce8672fa5e60&oe=5E9EE132',
            caption: 'My father brought me to meet Ulrich Hansen, the owner of Dressler. Dressler is a business that makes radio frequency generators. I took a tour of his company. A few years after meeting him and exploring his company, I developed a curiosity of how things work in nature, particularly things we cannot see.'
        },
    ];
    let markers = [];
    for (let i = 0; i < features.length; i++) {
        let marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map,
            content: '<figure><img src="' + features[i].url + '" width="' + features[i].width + '" height="' + features[i].height + '" /><figcaption>' + features[i].caption + '</figcaption></figure>'
        });
        if (i == 6) {
            const attributes = ' width="269" height="359" style="display:inline-block"/>'
            marker.content = '<figure><img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/p720x720/39961508_10214361719129493_8619784387073933312_o.jpg?_nc_cat=103&_nc_ohc=xYIU9DJtgiYAX_qXQVa&_nc_ht=scontent-iad3-1.xx&_nc_tp=1002&oh=ed4f6ad6ab234de13c273ebfcffd7525&oe=5EA1E8A0"' + attributes + '<img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/72673881_10217465305397210_8692131646591205376_n.jpg?_nc_cat=102&_nc_ohc=4UHiE4hf3RoAX95Dh1y&_nc_ht=scontent-iad3-1.xx&oh=7c098a574ba9df195c61c843e400425a&oe=5E92A188"' + attributes + '<figcaption style="top:359px">' + features[i].caption + '</figcaption></figure>';
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
