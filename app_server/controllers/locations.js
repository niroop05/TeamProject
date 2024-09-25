/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
        title: 'Yeager Groceries',
        pageHeader: {
            title: 'Yeager Groceries',
            strapline: 'Hunt your grocery needs!'
        },
        locations: [
            {
                name: 'D-Mart',
                address: '128 High Street, Reading, RG9 1PS',
                rating: 3,
                products: ['Drinks', 'Grocery', 'Dairy'],
                distance: '100m',
                openingTimes: [
                    {
                        days: 'Monday - Friday',
                        opening: '7:00am',
                        closing: '9:00pm'
                    },
                    {
                        days: 'Sunday',
                        opening: '6:00am',
                        closing: '10:00pm'
                    },
                ],
                reviews: [
                    {
                        author: 'Simon Holmes',
                        rating: 5,
                        timestamp: '16 July 2013',
                        reviewText: 'What a great place. I can\'t say enough good things about it.'
                    },
                    {
                        author: 'Charlie Chaplin',
                        rating: 3,
                        timestamp: '16 June 2013',
                        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
                    }
                ]
            },
            {
                name: 'More',
                address: '135 High Street, Reading, RG6 1PS',
                rating: 4,
                products: ['Grocery & Staples', 'Daily Essentials'],
                distance: '200m',
                openingTimes: [
                    {
                        days: 'Monday - Friday',
                        opening: '7:00am',
                        closing: '9:00pm'
                    },
                    {
                        days: 'Sunday',
                        opening: '6:00am',
                        closing: '10:00pm'
                    },
                ],
                reviews: [
                    {
                        author: 'Simon Holmes',
                        rating: 5,
                        timestamp: '16 July 2013',
                        reviewText: 'What a great place. I can\'t say enough good things about it.'
                    },
                    {
                        author: 'Charlie Chaplin',
                        rating: 3,
                        timestamp: '16 June 2013',
                        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
                    }
                ]
            },
            {
                name: 'Ratnadeep',
                address: '125 High Street, Reading, RG1 1PS',
                rating: 2,
                products: ['Frozen Food', 'Grocery'],
                distance: '250m',
                openingTimes: [
                    {
                        days: 'Monday - Friday',
                        opening: '7:00am',
                        closing: '9:00pm'
                    },
                    {
                        days: 'Sunday',
                        opening: '6:00am',
                        closing: '10:00pm'
                    },
                ],
                reviews: [
                    {
                        author: 'Simon Holmes',
                        rating: 5,
                        timestamp: '16 July 2013',
                        reviewText: 'What a great place. I can\'t say enough good things about it.'
                    },
                    {
                        author: 'Charlie Chaplin',
                        rating: 3,
                        timestamp: '16 June 2013',
                        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
                    }
                ]
            }
        ]
    });
};

/* GET 'Location info' page */
const locationInfo = function(req, res) {
    res.render('location-info', {
      title: 'D-Mart',
      pageHeader: { title: 'D-Mart' },
      sidebar: {
        context: 'is part of Yeager Groceries because it offers a variety of products including grocery essentials.',
        callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
        name: 'D-Mart',
        address: '1256 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Drinks', 'Grocery', 'Dairy'],
        coords: { lat: 51.4545, lng: -0.9690 },  // Replace with actual coordinates
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '7:00am',
            closing: '9:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '8:00am',
            closing: '10:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            opening: '9:00am',
            closing: '8:00pm',
            closed: false
          }
        ],
        reviews: [
          {
            author: 'John Doe',
            rating: 4,
            timestamp: '10 August 2023',
            reviewText: 'Great selection of groceries and friendly staff!'
          },
          {
            author: 'Jane Smith',
            rating: 2,
            timestamp: '5 September 2023',
            reviewText: 'The prices are good, but the store is often crowded.'
          }
        ]
      }
    });
  };
  

/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};
