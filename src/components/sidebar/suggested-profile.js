import PropTypes, { string } from 'prop-types';
import useState from 'react';
import { Link } from 'react-router-dom';

const SuggestedProfile = ({ userDocId, username, profileId, userId }) => {
  const [followed, setFollowed] = useState(false);

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
        <div>
          <button
            className="text-xs font-bold text-blue-medium"
            type="button"
            onClick={() => console.log('follow this user')}
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default SuggestedProfile;

SuggestedProfile.propTypes = {
  userDocId: PropTypes.string,
  username: PropTypes.string,
  profileId: PropTypes.string,
  userId: PropTypes.string
};
