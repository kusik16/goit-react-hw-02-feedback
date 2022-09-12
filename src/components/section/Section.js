import PropTypes from 'prop-types';

import section from './Section.module.css';

const Section = ({ title, children }) => {
	return (
		<>
			<div className={section.title}>{title}</div>
			{children}
		</>
	);
};

export default Section;

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
