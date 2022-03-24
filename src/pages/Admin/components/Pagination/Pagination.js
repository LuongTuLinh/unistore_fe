import React from 'react'
import PageItem from './PageItem';

export default function Pagination({page, handlePagination}) {
	
	const pageNumbers = [];

	for(var i = 1; i <= page.totalPage; i++) {
		pageNumbers.push(i);
	}
	let flag = false;

	const list = pageNumbers.map((number, index) => {

		if (number===1 || number===page.totalPage || (number>(page.page-3) && number<(page.page+3)) ) {
			flag = false;

			if(number === page.page) {
				return <PageItem key={index} number={number} isActive={true} />
			}
			else { 
				return <PageItem key={index} number={number} isActive={false} handlePagination={handlePagination} />
			}
		} 
		else {
			if (flag === false) {
				flag = true;
				return <li>...</li>;
			}
		}
		return null;
	})
	


	return (
		<>
			<nav>
				<ul className="pagination">
					<li className={page.page===1?"disabled":""}>
						<a href={"#page"+(page.page-1)} aria-label="Previous"
							title={page.page - 1}
							onClick={e => {
								handlePagination(e.target.title)
							}}
						>
							<span aria-hidden="false"><i className="ion-ios-arrow-left" title={page.page - 1}></i></span>
						</a>
					</li>
					
					{/* Get list page */}
					{list}

					<li className={page.page===page.totalPage?"disabled":""}>
						<a href={"#page"+(page.page+1)} aria-label="Next"
							title={page.page + 1}
							onClick={e => {
								handlePagination(e.target.title)
							}}
						>
							<span aria-hidden="true"><i className="ion-ios-arrow-right" title={page.page + 1}></i></span>
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}
