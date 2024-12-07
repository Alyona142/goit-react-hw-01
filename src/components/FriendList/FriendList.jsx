import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';


const FriendList = ({ friends }) => {
  return (
   <ul className={styles.friendList}>
  {friends.map(({ id, avatar, name, isOnline }) => (
    <li key={id} className={styles.friendItem}>
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
    </li>
  ))}
    </ul>
  )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
