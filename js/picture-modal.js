const bigPicture = document.querySelector('.big-picture');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');

const renderBigPicture = (picture) => {
	const commentsListFragment = document.createDocumentFragment();

	bigPicture.querySelector('.big-picture__img img').src = picture.url;
	bigPicture.querySelector('.likes-count').textContent = picture.likes;
	bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
	bigPicture.querySelector('.social__caption').textContent = picture.description;

 	picture.comments.forEach(({avatar, message, name}) => {
		const commentElement = commentTemplate.cloneNode(true);

		commentElement.querySelector('.social__picture').src = avatar;
		commentElement.querySelector('.social__picture').alt = name;
		commentElement.querySelector('.social__text').textContent = message;	
		commentsListFragment.appendChild(commentElement);
	});

 	commentsList.appendChild(commentsListFragment);
};

const clearBigPicture = () => {
  commentsList.innerHTML = '';
};

export {renderBigPicture, clearBigPicture};