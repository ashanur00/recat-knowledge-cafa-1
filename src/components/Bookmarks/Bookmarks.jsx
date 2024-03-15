import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 p-5 pt-4 bg-slate-400 rounded-lg ml-5 mt-10">
            <div className='text-center bg-purple-800 text-white  font-medium mb-5 p-4 rounded-xl'>
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>

            <h2 className="text-3xl text-center "> Bookmarked BLogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks:PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;