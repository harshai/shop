webpackJsonp([2],{273:function(e,r,t){"use strict";function i(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function n(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var l=t(5),o=t.n(l),s=t(6),u=t.n(s),d=t(275),c=t(60),p=t(8),m=t(112),h=function(){function e(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(r,t,i){return t&&e(r.prototype,t),i&&e(r,i),r}}(),f=function(e){function r(){return i(this,r),a(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return n(r,e),h(r,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentWillUnmount",value:function(){this.props.fetchProductDetails()}},{key:"fetchData",value:function(){var e=this;t.i(d.a)().then(function(r){var i=r.products,a=t.i(c.c)(parseInt(e.props.match.params.id,10),i);e.props.fetchProductDetails(a,!1)})}},{key:"render",value:function(){var e=this;return this.props.isFetchingProductDetails?o.a.createElement(m.a,{isLoading:!0,pastDelay:!0}):0===Object.keys(this.props.productDetails).length?o.a.createElement(p.d,{to:"/not-found"}):o.a.createElement("section",{className:"product-details"},o.a.createElement("div",null,o.a.createElement("dl",null,Object.keys(this.props.productDetails).map(function(r){return[o.a.createElement("dt",null,r),o.a.createElement("dd",null,e.props.productDetails[r])]})),o.a.createElement("button",{onClick:this.props.addToCart.bind(null,this.props.productDetails.id)},"Add to Cart")))}}]),r}(l.Component);f.propTypes={match:u.a.object.isRequired,addToCart:u.a.func.isRequired,isFetchingProductDetails:u.a.bool.isRequired,productDetails:u.a.object.isRequired},r.default=f},275:function(e,r,t){"use strict";var i=t(276),a=t.n(i);r.a=function(){return new Promise(function(e,r){setTimeout(function(){e(a.a)},1500*Math.random()|1)})}},276:function(e,r){e.exports={filters:[{name:"brand",values:["NutriWell","MARIGOLD","Marigold","Meiji"]},{name:"price",values:["0-0.99","1-1.99","2-2.99"]}],products:[{name:"NutriWell Barley",id:1,price:"2.25",brand:"NutriWell",desc:"F&N NutriWell Barley is freshly brewed from a special home recipe using carefully selected pearl barley and dried winter melon strips. Barley, a grain full of pure goodness, is commonly used in home-brews, to make that familiar barley drink or in soups. All natural, with no added preservatives and reduced in sugar, F&N NutriWell Barley is the great-tasting, 'healthier-choice' convenient beverage to cool you down in this tropical climate. Make drinking F&N NutriWell a daily enjoyment.",measurement:"1L",image:"product1.jpg"},{name:"NutriWell LemonGrass With Ginger",id:2,price:"2.35",brand:"NutriWell",desc:"F&N NutriWell Barley is freshly brewed from a special home recipe using carefully selected pearl barley and dried winter melon strips. Barley, a grain full of pure goodness, is commonly used in home-brews, to make that familiar barley drink or in soups. All natural, with no added preservatives and reduced in sugar, F&N NutriWell Barley is the great-tasting, 'healthier-choice' convenient beverage to cool you down in this tropical climate. Make drinking F&N NutriWell a daily enjoyment.",measurement:"1L",image:"product2.jpg"},{name:"NutriWell Water Chestnut And Sugar Cane",id:3,price:"1.25",brand:"NutriWell",desc:"F&N NutriWell Barley is freshly brewed from a special home recipe using carefully selected pearl barley and dried winter melon strips. Barley, a grain full of pure goodness, is commonly used in home-brews, to make that familiar barley drink or in soups. All natural, with no added preservatives and reduced in sugar, F&N NutriWell Barley is the great-tasting, 'healthier-choice' convenient beverage to cool you down in this tropical climate. Make drinking F&N NutriWell a daily enjoyment.",measurement:"500ml",image:"product3.jpg"},{name:"NutriWell Chrysanthemus With Wolfberry",id:4,price:"2.25",brand:"NutriWell",desc:"F&N NutriWell Barley is freshly brewed from a special home recipe using carefully selected pearl barley and dried winter melon strips. Barley, a grain full of pure goodness, is commonly used in home-brews, to make that familiar barley drink or in soups. All natural, with no added preservatives and reduced in sugar, F&N NutriWell Barley is the great-tasting, 'healthier-choice' convenient beverage to cool you down in this tropical climate. Make drinking F&N NutriWell a daily enjoyment.",measurement:"1L",image:"product4.jpg"},{name:"Marigold Uji Cha - Yuzu Green Tea",id:5,price:"2.05",brand:"Marigold",desc:"MARIGOLD UJI CHA is the first ready-to-drink pasteurised Japanese green tea in Singapore. Harvested from the cool, misty hills of Uji, Kyoto, premium green tea in MARIGOLD UJI CHA hails from the finest of tea-growing regions. The first exciting flavour, Yuzu Green Tea, is made with pure squeezed yuzu juice, a rare citrus from Japan. MARIGOLD UJI CHA Yuzu Green tea, carefully blended for the most delicate tea drinking experience. Taste the artisan tea that refreshes your senses.",measurement:"1L",image:"product5.jpg"},{name:"Marigold Uji Cha Momo Green Tea",id:6,price:"2.25",brand:"MARIGOLD",desc:"MARIGOLD UJI CHA is the first ready-to-drink pasteurised Japanese green tea in Singapore. Harvested from the cool, misty hills of Uji, Kyoto, premium green tea in MARIGOLD UJI CHA hails from the finest of tea-growing regions. The first exciting flavour, Yuzu Green Tea, is made with pure squeezed yuzu juice, a rare citrus from Japan. MARIGOLD UJI CHA Yuzu Green tea, carefully blended for the most delicate tea drinking experience. Taste the artisan tea that refreshes your senses.",measurement:"1L",image:"product6.jpg"},{name:"NutriWell LemonGrass With Ginger",id:7,price:"1.50",brand:"NutriWell",desc:"F&N NutriWell Barley is freshly brewed from a special home recipe using carefully selected pearl barley and dried winter melon strips. Barley, a grain full of pure goodness, is commonly used in home-brews, to make that familiar barley drink or in soups. All natural, with no added preservatives and reduced in sugar, F&N NutriWell Barley is the great-tasting, 'healthier-choice' convenient beverage to cool you down in this tropical climate. Make drinking F&N NutriWell a daily enjoyment.",measurement:"475ml",image:"product7.jpg"},{name:"NutriWell Barley",id:8,price:"0.50",brand:"NutriWell",desc:"F&N NutriWell Barley is freshly brewed from a special home recipe using carefully selected pearl barley and dried winter melon strips. Barley, a grain full of pure goodness, is commonly used in home-brews, to make that familiar barley drink or in soups. All natural, with no added preservatives and reduced in sugar, F&N NutriWell Barley is the great-tasting, 'healthier-choice' convenient beverage to cool you down in this tropical climate. Make drinking F&N NutriWell a daily enjoyment.",measurement:"475ml",image:"product8.jpg"}]}}});
//# sourceMappingURL=2.e8472ae4.chunk.js.map