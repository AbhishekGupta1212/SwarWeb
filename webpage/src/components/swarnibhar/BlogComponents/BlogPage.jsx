import React from 'react';
import BlogHeader from './BlogHeader';
import BlogPost from './BlogPost';
import styles from './BlogPage.module.css';

const blogPosts = [
  {
    author: { name: 'Amit Das', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7ff1ef6de8843a25c8c0d90309ee52e5a8e0688fbd619f74130f7fdde8005198?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca' },
    date: '4 days ago',
    title: 'Revolutionize Your Corporate Training with the Best LMS',
    content: 'In the current scenario, organizations must consider corporate training as an integral tool to educate and upskill their employees, staff, partners, stakeholders, and customers. If employees are considered the most valuable asset for an organization, then you can wonder how effective employee training can unlock the potential to deliver better results with the best of...',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7f3be3d2f3c56a249f00d4e7107f1c7a6ab2db21694858635f2763fdca392318?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    comments: 48,
    views: 200
  },
  {
    author: { name: 'Eric Smith', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/609daf39be4d827a8fc6b657facf0359a9a685c8286c6b6683663f531ade70b8?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca' },
    date: '4 days ago',
    title: 'Importance of an Employee Training LMS in the Workplace',
    content: 'The industrial transformation with rising inflation disrupted the global supply chain, and mass resignation has wreaked havoc on the global economy. It brought the attention of companies to address rising concerns towards mass resignation. Unhappy employees with stagnant careers tend to look for better workplaces to skill up and grow. Helping them with an employee...',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bdc169c38f9524a50fa7461e61bcd6aa439b9fa8d7b9e60ded11f1a51b923cda?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    comments: 418,
    views: 506
  },
  {
    author: { name: 'Brad Merrill', avatar: 'https://cdn.builder.io/api/v1/image/assets/TEMP/353add2b02826522186ffcdde0c3e102ec79510448d60406ca9489c1a750c47d?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca' },
    date: '4 days ago',
    title: 'How to boost Learning for Communities using an Association LMS?',
    content: 'Bring Learning Closer to your Association Communities Associations thrive when their communities are well taken care of. Learning helps in the professional growth of associations or community members. Integrating communities into an LMS is crucial. The COVID-19 pandemic has proved how important it is to get virtually together. Then why not use your association LMS...',
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5d435dfbc99b6299079555a7b151ae0ef30fe174737ce15d933e2edef03a1dad?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca',
    comments: 250,
    views: 300
  }
];

const BlogPage = () => {
  return (
    <main className={styles.blogPage}>
      {/* <BlogHeader /> */}
      <section className={styles.content}>
        {blogPosts.map((post, index) => (
          <React.Fragment key={index}>
            <BlogPost {...post} />
            {index < blogPosts.length - 1 && <div className={styles.divider} />}
          </React.Fragment>
        ))}
      </section>
    </main>
  );
};

export default BlogPage;