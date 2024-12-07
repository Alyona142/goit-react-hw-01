import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.card}>
    <span className={isOnline ? styles.online : styles.offline} />
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.cardTitle}>{name}</p>
  </div>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;