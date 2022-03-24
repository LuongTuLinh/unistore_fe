import React from 'react'
import PropTypes from 'prop-types'

PageItem.prototype = {
	handlePagination: PropTypes.func,
}
PageItem.defaultProps = {
	handlePagination: null,
}

function PageItem({number, isActive, handlePagination}) {
	return (
		<li key={number} className={isActive ? 'active':""}>
			<a href={"#page"+number}
				title={number}
				onClick={
					!isActive ?
					(e) => {
					handlePagination(e.target.title)
					}
					: null
				}
			>
					{number}
			</a>
		</li>
	);
}

export default PageItem;
