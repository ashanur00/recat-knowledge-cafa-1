import PropTypes from 'prop-types';
import { IoBookmark } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover_img, author, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-lg' src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex '>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={handleAddToBookmark}
                        className='ml-3 text-2xl text-red-600'><IoBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl mb-3">{title}</h2>
            <p className=''>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)

                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;