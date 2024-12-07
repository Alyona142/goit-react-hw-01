import PropTypes from 'prop-types'; 
import styles from './Profile.module.css';


const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src={image} alt='User avatar' />
        <p className={styles.title}>{name}</p>
        <p className={styles.subTitle}>@{tag}</p>
        <p className={styles.subTitle}>{location}</p>
      </div>
      <ul className={styles.followers}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;