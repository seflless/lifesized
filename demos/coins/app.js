var lifesized = require('../../src/lifesized');

var coins = [
        // Sizes are from the US mint:
        // http://www.usmint.gov/about_the_mint/?action=coin_specifications
        { name: 'US Penny', image: 'penny.jpg', inches: 0.750 },
        { name: 'US Nickel', image: 'nickel.png', inches: 0.835 },
        { name: 'US Dime', image: 'dime.jpg', inches: 0.705 },
        { name: 'US Quarter', image: 'quarter.jpg', inches: 0.995 }
    ],
    table = document.getElementById('table');

// Display each coin at it's lifesized
coins.forEach(function(coin){
    var img = document.createElement('img');

    img.src = coin.image;
    img.style.width = Math.floor(lifesized.ppi()*coin.inches)+'px';
    img.style.height = Math.floor(lifesized.ppi()*coin.inches)+'px';

    table.appendChild(img);
})
