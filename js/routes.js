var routes=[ // Index page
  {
      path: '/', url: './index.html', name: 'home',
  }
  ,
  {
      path: '/about/', url: './pages/about.html', name: 'about',
  }
  ,
  {
      path: '/login/', componentUrl: './pages/login.html', name: 'login',
  }
  ,
  {
      path: '/register/', componentUrl: './pages/register.html', name: 'register',
  }
  ,
  {
      path: '/home/', componentUrl: './pages/home.html', name: 'user-home',
  }
  ,
  {
      path: '/requests/', componentUrl: './pages/requests.html', name: 'user-home',
  }
  ,
  {
      path: '/search/', componentUrl: './pages/search.html', name: 'user-home',
  }
  ,
  {
      path: '/forgot-password/', componentUrl: './pages/fp.html', name: 'forgot-password',
  }
  ,
  {
      path: '/profile/', componentUrl: './pages/profile.html', name: 'profile',
  }
  ,
  {
      path: '/view-book/', componentUrl: './pages/view-book.html', name: 'view_hotel',
  }
  ,
  {
      path: '/saved/', componentUrl: './pages/saved.html', name: 'saved_places',
  }
  ,
  {
      path: '/books/', componentUrl: './pages/books.html', name: 'books',
  }
  , // Default route (404 page). MUST BE THE LAST
  {
      path: '(.*)', url: './pages/404.html',
  }
  
  ];