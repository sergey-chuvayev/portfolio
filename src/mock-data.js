const mockData = {
  projects: [
    {
      id: 1,
      name: 'Lobster',
      role: 'UX/UI Designer & Frontend Developer',
      description: 'AI-powered platform which enables brands, agencies and the press to license over 30 billions images and videos directly from social media users and cloud platforms.',
      roleDescription: 'I’ve prototyped, designed and implemented frontend of all base features of the application using Sketch as a prototyping and designing tool and Patternlab (atomic design framework) to create static pages.',
      category: 'Web',
      startDate: new Date('2016-05-00'),
      endDate: new Date('2017-11-00')
    },
    {
      id: 2,
      name: 'Plazma',
      role: 'UX/UI Designer & Frontend Developer',
      description: 'Cloud based collaboration tool for professionals in media industry. Helps users keep their media structured, communicate with team and collegues in a propper way.',
      roleDescription: 'Researching user behaviour, creating prototypes and implementing them in React.js (+ Redux). Having a big experience as the only frontend developer in the team.',
      category: 'Web',
      startDate: new Date('2018-12-17'),
      endDate: new Date('2018-12-27')
    },
  ],
  categories: ['Web', 'Design', 'Music']
}

export default mockData;
