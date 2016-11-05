'use strict';
var reviews = [{
  'author': {
    'name': 'Иванов Иван',
    'picture': 'img/user-1.jpg'
  },
  'review_usefulness': 10,
  'rating': 2,
  'description': 'Плохая игра: слишком сильно затягивает и невозможно оторваться. Я потерял работу, учебу, девушку и дар речи, но продолжаю играть. Это призыв о помощи: спасите.'
}, {
  'author': {
    'name': 'Ксения Собчак',
    'picture': 'img/user-3.png'
  },
  'review_usefulness': 6,
  'rating': 5,
  'description': 'Все хорошо, мне нравится.'
}, {
  'author': {
    'name': 'Ксюша Бородина',
    'picture': 'img/user-2.png'
  },
  'review_usefulness': 3,
  'rating': 1,
  'description': 'Все плохо, мне не нравится'
}, {
  'author': {
    'name': 'Мария Антуанетта',
    'picture': 'img/user-1.jpg'
  },
  'review_usefulness': 4,
  'rating': 3,
  'description': 'Невероятно чумовая игра. Пендальф-синий — мой герой)))) Он такой милашка. Благодаря ему я наконец нацчилась отвлекаться от работы и учёбы.'
}, {
  'author': {
    'name': 'Дмитрий Карпов',
    'picture': 'img/user-3.png'
  },
  'review_usefulness': 20,
  'rating': 4,
  'description': 'Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди.'
}, {
  'author': {
    'name': 'Максим Шаровары',
    'picture': 'img/user-1.jpg'
  },
  'review_usefulness': 115,
  'rating': 2,
  'description': 'Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди.'
}, {
  'author': {
    'name': 'Зулейха Валиева',
    'picture': 'img/user-3.png'
  },
  'review_usefulness': 10,
  'rating': 4,
  'description': 'Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди.'
}, {
  'author': {
    'name': 'Федор Непомнящих',
    'picture': 'img/user-2.png'
  },
  'review_usefulness': 10,
  'rating': 3,
  'description': 'Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди.'
}, {
  'author': {
    'name': 'Макаронный Монстр',
    'picture': 'img/user-1.jpg'
  },
  'review_usefulness': -3,
  'rating': 5,
  'description': 'Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди.'
}, {
  'author': {
    'name': 'Миклухо Маклай',
    'picture': 'img/user-3.png'
  },
  'review_usefulness': 0,
  'rating': 2,
  'description': 'Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди.'
}, {
  'author': {
    'name': 'Муравьев Апостол',
    'picture': 'img/user-2.png'
  },
  'review_usefulness': 0,
  'rating': 1,
  'description': 'Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди.'
}, {
  'author': {
    'name': 'Максим Горький',
    'picture': 'img/user-3.png'
  },
  'review_usefulness': 8,
  'rating': 3,
  'description': 'Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди.'
}, {
  'author': {
    'name': 'Аноним',
    'picture': 'img/ijwdoq'
  },
  'review_usefulness': 102,
  'rating': 3,
  'description': 'Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди.'
}, {
  'author': {
    'name': 'Иван Иванов',
    'picture': 'img/user-1.jpg'
  },
  'review_usefulness': 5,
  'rating': 4,
  'description': 'Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди.'
}, {
  'author': {
    'name': 'Василиса Васильева',
    'picture': 'img/user-2.png'
  },
  'review_usefulness': 0,
  'rating': 4,
  'description': 'Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди.'
}, {
  'author': {
    'name': 'Хороший Человек',
    'picture': 'img/user-2.png'
  },
  'review_usefulness': 24,
  'rating': 3,
  'description': 'Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди.'
}, {
  'author': {
    'name': 'Гейб Ньюэлл',
    'picture': 'img/dwjiqo9'
  },
  'review_usefulness': 10,
  'rating': 5,
  'description': 'Игра очень интересная. Нравится возможность выбирать между героями, а самое крутое, что есть альтернативные концовки в игре. Она точно стоит своих денег.'
}];


var reviewsFilterBlock = document.querySelector('.reviews-filter'),
  reviewsList = document.querySelector('.reviews-list'),
  tpl = document.getElementById('review-template'),
  tplContainer = 'content' in tpl ? tpl.content : tpl;
var IMAGE_LOAD_TIMEOUT = 3000;

initializeReviews();

function toggleFilterBlock(action) {
  if (action === 'hide') {
    reviewsFilterBlock.classList.add('invisible');
  } else if (action === 'show') {
    reviewsFilterBlock.classList.remove('invisible');
  }
}

function getReviewItem(item) {
  var reviewItem = tplContainer.querySelector('.review').cloneNode(true);
  reviewItem.querySelector('.review-rating').textContent = item.rating;
  reviewItem.querySelector('.review-text').textContent = item.description;

  var img = new Image(),
    imgTimeout = null;
  img.onload = function(e) {
    clearTimeout(imgTimeout);
    var reviewImg = reviewItem.querySelector('.review-author');

    reviewImg.style.width = reviewImg.style.height = 124;
    reviewImg.setAttribute('src', e.target.src);
    reviewItem.querySelector('.review-author').setAttribute('title', item.author.name);
  };
  img.onerror = function() {
    reviewItem.classList.add('review-load-failure');
  };
  img.src = item.author.picture;

  imgTimeout = setTimeout(function() {
    img.src = '';
    reviewItem.classList.add('review-load-failure');
  }, IMAGE_LOAD_TIMEOUT);

  return reviewItem;
}

function renderReviews(items) {
  if (Array.isArray(items)) {
    items.forEach(function(item) {
      reviewsList.appendChild(getReviewItem(item));
    });
    if (reviewsList.children.length > 0) {
      toggleFilterBlock('show');
    } else {
      showNoReviewsMessage();
    }
  } else {
    showNoReviewsMessage();
  }
}

function showNoReviewsMessage() {
  reviewsList.style.textAlign = 'center';
  reviewsList.textContent = 'К этой классной игре пока никто не оставил ни одного отзыва :(';
}

function initializeReviews() {
  toggleFilterBlock('hide');
  renderReviews(reviews);
}
