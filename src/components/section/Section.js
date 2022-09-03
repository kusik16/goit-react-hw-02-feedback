import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
	return (
		<>
			<div className="title">{title}</div>
			{children}
		</>
	);
};

export default Section;

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
