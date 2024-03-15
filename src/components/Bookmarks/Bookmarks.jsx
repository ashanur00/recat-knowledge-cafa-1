import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 p-5 pt-4 bg-slate-400 rounded-lg ml-5 mt-10">
            <h2 className="text-3xl text-center "> Bookmarked BLogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks:PropTypes.array
}
export default Bookmarks;