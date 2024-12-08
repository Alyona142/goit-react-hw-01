import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
	<div className={styles.card}>
		<img src={avatar} alt='Avatar' width='48' />
		<p className={styles.cardTitle}>{name}</p>
		{isOnline ? (
			<p className={styles.online}>Online</p>
		) : (
			<p className={styles.offline}>Offline</p>
		)}
	</div>
);
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;


