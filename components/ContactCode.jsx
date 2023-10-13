import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'varunsp.me',
    href: 'https://varunsp.me',
  },
  {
    social: 'email',
    link: 'spvarun47@gmail.com',
    href: 'mailto:varunsp@gmail.com',
  },
  {
    social: 'github',
    link: 'varunsp-163',
    href: 'https://github.com/varunsp-163',
  },
  {
    social: 'linkedin',
    link: 'Varun S P',
    href: 'https://www.linkedin.com/in/varun-s-p/',
  },
  {
    social: 'twitter',
    link: '@163Varun',
    href: 'https://www.twitter.com/163Varun',
  },
  {
    social: 'instagram',
    link: 'varun._.163',
    href: 'https://www.instagram.com/varun._.163',
  },
  // {
  //   social: 'telegram',
  //   link: 'iamnitinr',
  //   href: 'https://t.me/VarunSP',
  // },
  {
    social: 'LeetCode',
    link: 'spvarun47',
    href: 'https://leetcode.com/spvarun47/',
  },
  {
    social: 'CodingNinjas',
    link: 'Varunsp',
    href: 'https://www.codingninjas.com/studio/profile/Varunsp',
  },
  {
    social: 'Spotify',
    link: 'Spotifizzz',
    href: 'https://open.spotify.com/playlist/46PwtrMvjPmJ8qhfeJgrtS?si=38f79da712e94081',
  },
  
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
