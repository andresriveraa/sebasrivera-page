import React from 'react';

const PostHeader = ({ title, coverImage, date, author }) => {
  return <div><p>{title}, {coverImage}, {date}, {author}</p></div>;
};

export default PostHeader;
