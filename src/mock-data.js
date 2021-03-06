const mockData = {
  projects: [
    {
      id: 0,
      name: 'Chagg',
      role: 'Frontend Developer',
      description: 'Software solution for vehicle advanced connectivity by means of smart aggregation of multiple wireless network technologies (network bonding of LTE, 3G, WiFi).',
      roleDescription: 'I am responsible for the design and development process of a team in one of the applications of that project. And as a frontend engineer I develop this app with the following stack: React, Redux, Typescript, Styled Components.',
      category: ['web'],
      startDate: new Date('2016-05-10'),
      endDate: null,
      url: 'https://qoollo.com/products/chagg.html',
      images: [
        'https://storage.googleapis.com/portfolio-205915.appspot.com/chagg/Screenshot%202018-11-26%20at%2013.14.37.png',
        'https://storage.googleapis.com/portfolio-205915.appspot.com/chagg/Screenshot%202018-11-26%20at%2013.15.20.png',
        'https://storage.googleapis.com/portfolio-205915.appspot.com/chagg/Screenshot%202018-11-26%20at%2013.14.11.png',
        'https://storage.googleapis.com/portfolio-205915.appspot.com/chagg/Screenshot%202018-11-26%20at%2013.14.20.png'
      ]
    },
    {
      id: 1,
      name: 'Lobster',
      role: 'UX/UI Designer & Frontend Developer',
      description: 'AI-powered platform which enables brands, agencies and the press to license over 30 billions images and videos directly from social media users and cloud platforms.',
      roleDescription: 'I’ve prototyped, designed and implemented frontend of all base features of the application using Sketch as a prototyping and designing tool and Patternlab (atomic design framework) to create static pages.',
      category: ['design','web'],
      startDate: new Date('2016-05-10'),
      endDate: new Date('2017-11-10'),
      url: 'http://lobster.media/',
      images: [
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-05-29%20at%2000.00.14.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/lob1.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/lob2.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/lob3.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/lob4.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-05-29%20at%2000.04.30.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-06-06%20at%2017.05.54.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-05-29%20at%2000.05.11.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-05-29%20at%2000.05.37.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-05-29%20at%2000.05.57.png',
      ]
    },
    {
      id: 2,
      name: 'Plazma',
      role: 'Frontend Developer & UX/UI Designer',
      description: 'Cloud based collaboration tool for professionals in media industry. It helps users to keep their media structured, communicate with their team and collegues in a more effective way.',
      roleDescription: 'I researched user behaviour, created prototypes and implemented them in React.js (+ Redux). During the work on this project I had a very strong front-end mentor thanks to whom I aquired strong knowledge of this library.',
      category: ['design','web'],
      startDate: new Date('2018-12-17'),
      endDate: new Date('2018-12-27'),
      url: 'https://app.plazma.io/',
      images: [
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-06-04%20at%2017.48.10.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-06-06%20at%2017.27.43.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-06-06%20at%2017.27.37.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-06-06%20at%2017.20.50.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-06-06%20at%2017.22.31.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-06-06%20at%2017.28.23.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-06-06%20at%2017.25.17.png'
      ]
    },
    {
      id: 3,
      name: 'Focus',
      role: 'UX/UI Designer & Tech Team Manager',
      description: 'We spend too much time on checking instagram photos, facebook feed, new tweets when we could actually make a better use of our time. This mobile application blocks social media to let you be with your friends, work better, spend your time happier.',
      roleDescription: 'I am co-founder of this project that we built with two of my friends. I was in charge of making the UX research and leading the tech and design team.',
      category: ['mobile', 'design'],
      startDate: new Date('2018-03-01'),
      endDate: new Date('2018-05-01'),
      url: '',
      images: [
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/main_1_1.jpg',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/main_2_1.jpg',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/main_2_2.jpg',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/main_3_1.jpg',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/main_3_2.jpg',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/main_4_1.jpg',
      ]
    },
    {
      id: 4,
      name: 'Berhasm',
      role: 'UX/UI Designer & Frontend Developer & Tech Team Manager',
      description: 'Berhasm is a fashion and arts collective based in moscow, russia. It was founded in 2018 as a digital club where market trash meets the techno and pop cultures. Berhasm is a place where fashion, modern underground art and music meet together since none of them can exist without another.',
      roleDescription: 'I fully handled the digital part of this project: the concept and idea of the website, UX/UI and backend structure with two backend developers.',
      category: ['web', 'design'],
      startDate: new Date('2018-03-01'),
      endDate: new Date('2018-05-01'),
      // url: 'https://berhasm.com/',
      images: [
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/catalog.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/item-page.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/cart-modal.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/auth.png',
      ]
    },
    {
      id: 5,
      name: 'Exerica',
      role: 'Frontend Developer',
      description: 'Exerica is a unique financial analysis solution for investors and investment professionals. Developed by a team of outstanding financial analysts and computer scientists to take financial analysis capacity to the next generation, Exerica will make manual data entry redundant.',
      roleDescription: 'I made the structure and designed all the mockups. Then implemented them using Gulp, Sass, JS.',
      category: ['web', 'design'],
      startDate: new Date('2018-03-01'),
      endDate: new Date('2018-05-01'),
      url: 'https://exerica.com/',
      images: [
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-06-05%20at%2013.46.26.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/Screen%20Shot%202018-06-05%20at%2013.47.18.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/ex1.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/exerica6.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/exerica8.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/exerica1.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/exerica4.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/exerica5.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/exerica2.png',
        'https://storage.googleapis.com/sergeychuvayevportfolioimages/exerica3.png',
      ]
    },
    {
      id: 6,
      name: 'Sublime EP',
      role: 'Musician',
      description: 'Sublime is a two-track EP by Russian producer Sergei August. Both tracks are deep progressive house with chilled melodies. This release appeared on the best 2016 year tracks compilation.',
      roleDescription: '',
      category: ['music'],
      startDate: new Date('2018-03-01'),
      endDate: new Date('2018-05-01'),
      url: 'http://www.morphosisrecords.com/release/morph112.php',
      iframes: ['<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/248825605&color=%23414141&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>']
    },
    {
      id: 7,
      name: 'Lykke Manue EP',
      role: 'Musician',
      description: 'Lykke Manue EP characterized by melancholic melodies and slow beats, a deep journey into electronic music by Russian producer Sergei August.',
      roleDescription: '',
      category: ['music'],
      startDate: new Date('2018-11-02'),
      endDate: new Date('2018-11-02'),
      url: 'http://www.morphosisrecords.com/release/morph137.php',
      iframes: [
        '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/635909754&color=%23414141&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>'
      ]
    },
  ],
  categories: ['web', 'design', 'music', 'mobile']
}

export default mockData;
