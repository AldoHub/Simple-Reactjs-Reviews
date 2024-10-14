import PropTypes from 'prop-types';

const Card = ({title, content}) => {
    return(
        <div className="card">
            <img src="https://via.placeholder.com/150" alt="" />
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
}
  
export default Card;

