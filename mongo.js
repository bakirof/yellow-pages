db.place.update(
  {placeName: "New York"},
  {
    $set: {
      placeName: "New York",
      category: "Кофейня",
      adres: "ул. Родионова, д. 187",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequatur corporis dolorum minus neque nostrum nulla tempora. Autem consequuntur impedit totam voluptatem? Atque magnam nesciunt nulla placeat ratione, suscipit.",
      imageUrl: "images/images-place/img4.jpg",
      rating: "4",
      hours: "с 09:00 до 18:00",
      reviews: [
        {
          id: "1234567",
          name: "Lorem ipsum2",
          image: "images/images-place/img3.jpg",
          rating: "4",
          comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequatur corporis dolorum minus neque!",
          data: '20.02.2015',
          time: '12:27',
          like: true
        },
        {
          id: "1234567",
          name: "Adipisicing2",
          image: "images/images-place/img4.jpg",
          rating: "5",
          comment: "Assumenda consectetur consequatur corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequatur corporis dolorum minus neque!",
          data: '20.02.2015',
          time: '12:41',
          like: true
        },
        {
          id: "1234567",
          name: "Adipisicing2",
          image: "images/images-place/img4.jpg",
          rating: "5",
          comment: "Assumenda consectetur consequatur corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequatur corporis dolorum minus neque!",
          data: '20.02.2015',
          time: '12:41',
          like: true
        },
        {
          id: "1234567",
          name: "Adipisicing2",
          image: "images/images-place/img4.jpg",
          rating: "5",
          comment: "Assumenda consectetur consequatur corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequatur corporis dolorum minus neque!",
          data: '20.02.2015',
          time: '12:41',
          like: true
        },
        {
          id: "1234567",
          name: "Adipisicing2",
          image: "images/images-place/img4.jpg",
          rating: "5",
          comment: "Assumenda consectetur consequatur corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequatur corporis dolorum minus neque!",
          data: '20.02.2015',
          time: '12:41',
          like: true
        },
        {
          id: "1234567",
          name: "Adipisicing2",
          image: "images/images-place/img4.jpg",
          rating: "5",
          comment: "Assumenda consectetur consequatur corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequatur corporis dolorum minus neque!",
          data: '20.02.2015',
          time: '12:41',
          like: true
        }
      ]
    },
    $currentDate: {lastModified: true}
  });

db.user.insert(
  {
    userName: "Rem Ipsum",
    userEmail: "a@a",
    userPW: "a"
  }
);

db.user.update(
  {userEmail: "a@a"},
  {
    $set: {
      userName: "Lorem Ipsum",
      userEmail: "z@z",
      userPW: "z",
      userImage: "images/user/img02.jpg",
      userLikePlace: [
        {id: "54e5aace02e39033b2544f3d"}
      ],
      userReviews: [
        {
          placeId: "54e5aa0302e39033b2544f3c",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae earum eveniet excepturi hic id illo labore laudantium maiores necessitatibus nobis numquam optio perspiciatis, praesentium quae rem tenetur voluptas voluptatibus!",
          rating:"5"
        }
      ]
    },
    $currentDate: {lastModified: true}
  }
);


db.user.remove({});



db.review.insert(
  {
    userId: "Rem Ipsum",
    userPlaceId: "a@a",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    rating:"4",
    date:"02.03.2015",
    time:"9:28"
  }
);
