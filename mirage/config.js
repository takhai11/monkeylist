export default function() {
  this.get('/monkeys', function() {
    return {
      data: [{
        type: 'monkeys',
        id: 1,
        attributes: {
          title: 'Saimiri_sciureus',
          city: 'Paramaribo',
          type: 'smart',
          image: 'http://2.bp.blogspot.com/_UVfkYlocoCY/SNzcN3vgBrI/AAAAAAAAAAM/MhWwNbYVTD4/s400/monkeylrg.jpg'
        }
      }, {
        type: 'monkeys',
        id: 2,
        attributes: {
          title: 'Veruca',
          city: 'Coronie',
          type: 'talented',
          image: 'http://cdn03.cdn.justjaredjr.com/wp-content/uploads/headlines/2015/04/monkey-king-clip.jpg'
        }
      }, {
        type: 'monkeys',
        id: 3,
        attributes: {
          title: 'BonnetMacaque',
          city: 'Saramacca',
          type: 'banana eater',
          image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/000/211/2af/3fdbc6f.jpg'
          
        }
      }]
    };
  });
}



