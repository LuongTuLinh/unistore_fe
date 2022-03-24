import React from 'react'
import ProductCard from './ProductCard'
import Pagination from './Pagination'

export default function ProductBody({data, handlePagination, addToCart}) {

  console.log(data);
  let productList;
  if(data.status === 'ok'){
    productList = (data.data).map((product, index) => {
      return <ProductCard data={product} key={index} addToCart={addToCart}/>
    });
  } else {
    productList = data.message;
  }

	return (
		<>
			<div className="container">
      <div className="row">
				{/* Filters */}
        <div className="col-sm-3 filter">
          <div className="item">
              <div className="title">
                  <a href="#clear" data-action="open" className="down"> <i className="ion-android-arrow-dropdown"></i> Open</a>
                  <a href="#clear" data-action="clear"> <i className="ion-ios-trash-outline"></i> Clear</a>
                  <h1 className="h4">Catalog</h1>
              </div>

              <div className="controls">
                <div className="checkbox-group">
                    <input type="checkbox" name="checkbox" id="all" defaultValue="" defaultChecked="checked" onClick={this}/>
										<label htmlFor="all" className="label">all</label>
                </div>
                <div className="checkbox-group">
                    {/* <div className="checkbox"><i className="ion-android-done"></i></div>
                    <div className="label" data-value="Laptops">MSI</div> */}
                    <input type="checkbox" name="checkbox" id="msi" defaultValue="msi" onClick={this} />
										<label htmlFor="msi" className="label">MSI</label>
                </div>

                <div className="checkbox-group" data-status="inactive">
                    {/* <div className="checkbox"><i className="ion-android-done"></i></div> */}
                    {/* <div className="label" data-value="Tablets">DELL</div> */}
                    <input type="checkbox" name="checkbox" id="dell" defaultValue="dell" onClick={this} />
										<label htmlFor="dell" className="label">DELL</label>
                </div>

                <div className="checkbox-group" data-status="inactive">
                    {/* <div className="checkbox"><i className="ion-android-done"></i></div>
                     <div className="label" data-value="Hybrid">Asus</div> */}
                    <input type="checkbox" name="checkbox" id="asus" defaultValue="asus" onClick={this} />
										<label htmlFor="asus" className="label">Asus</label>
                </div>
              </div>
          </div>

          <br/>

          <div className="item">
              <div className="title">
                  <a href="#clear" data-action="open" className="down"> <i className="ion-android-arrow-dropdown"></i> Open</a>
                  <a href="#clear" data-action="clear"> <i className="ion-ios-trash-outline"></i> Clear</a>
                  <h1 className="h4">Processor</h1>
              </div>

              <div className="controls grid">
                <div className="checkbox-group" data-status="inactive">
                    {/* <div className="checkbox"><i className="ion-android-done"></i></div> */}
                    <input type="checkbox" name="checkbox" defaultValue="" onClick={this} />
                    <div className="label" data-value="7 in">i5</div>
                </div>

                <div className="checkbox-group" data-status="inactive">
                    {/* <div className="checkbox"><i className="ion-android-done"></i></div> */}
                    <input type="checkbox" name="checkbox" defaultValue="" onClick={this} />
                    <div className="label" data-value="10 in">i7</div>
                </div>
              </div>
          </div>

          <br/>

        </div>
				{/*  */}

				{/* Products */}
        <div className="col-sm-9 products">

          <div className="row">
						{ productList }
          </div>

          <Pagination page={data.pagination} handlePagination={handlePagination}/>
        </div>
				{/*  */}

      </div>
    </div>
    <br/><br/><br/>

		</>
	)
}
