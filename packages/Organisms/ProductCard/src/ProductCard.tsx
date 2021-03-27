import React from 'react';

function ProductCard() {
  return (
    <nu-grid columns="auto" row="auto" content="start">
      <nu-card padding="20px" radius="8px">
        <nu-img
          row="1"
          src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          fit="fill"
        ></nu-img>
        <nu-block>
          <ProductDetail></ProductDetail>
        </nu-block>
      </nu-card>
    </nu-grid>
  );
}

function ProductRating(props) {
  let { rating, count = 0, ...otherProps } = props;
  if (rating > 5) rating = 5;
  if (rating < 0) rating = 0;
  let tempRating = rating;
  return (
    <span>
      <nu-flex gap content="space-between" items="center" padding>
        <nu-in>
          {[0, 1, 2, 3, 4].map(function () {
            if (tempRating > 0) {
              tempRating--;
              return <nu-icon name="star" color="#special"></nu-icon>;
            }
            return <nu-icon name="star-outline" cursor="pointer"></nu-icon>;
          })}
          <nu-in padding>({count})</nu-in>
        </nu-in>
        <nu-in border="bg" radius="4x" padding="5px 15px" size="12px 16px">
          Neutral
        </nu-in>
      </nu-flex>
    </span>
  );
}

function ProductTitle(props) {
  return (
    <>
      <nu-block size="16px 24px" text="bold" cursor="pointer">
        New Product and the market
      </nu-block>
      <nu-block size="14px 20px" cursor="pointer">
        Product Details
      </nu-block>
    </>
  );
}

function ProductColors(props) {
  var tempRating: any[] = [
    '#8AF5F5',
    '#8AF5F5',
    '#8AF5F5',
    '#8AF5F5',
    '#8AF5F5',
  ];
  return (
    <nu-grid>
      <nu-block row="1" text="bold" size="14px 20px" padding="5px 0px">
        Colors
      </nu-block>
      <nu-flex row="2" gap items="center">
        {tempRating &&
          tempRating.map(function (color) {
            return (
              <nu-circle size="3x" fill={color} cursor="pointer"></nu-circle>
            );
          })}
      </nu-flex>
    </nu-grid>
  );
}

function ProductSizes(props) {
  var tempRating: any[] = ['XS', 'SM', 'MD', 'l', 'XL'];
  return (
    <>
      <nu-block text="bold" size="14px 20px" padding="5px 0px">
        Sizes
      </nu-block>
      <nu-block>
        {tempRating &&
          tempRating.map(function (sizes) {
            return (
              <nu-btn toggle cursor="pointer" text="uppercase">
                {sizes}
              </nu-btn>
            );
          })}
      </nu-block>
    </>
  );
}
function AddToCart(props) {
  return (
    <nu-flex gap content="space-between" items="center" padding="14px 0px">
      <nu-in>
        <nu-btn cursor="pointer">Add To Cart</nu-btn>
      </nu-in>
      <nu-in size="20px 28px">70,000$</nu-in>
    </nu-flex>
  );
}

function ProductDetail() {
  return (
    <>
      <ProductRating
        rating="3"
        count="15"
        content="space-between"
        column="1"
      ></ProductRating>
      <ProductTitle></ProductTitle>
      <ProductColors></ProductColors>
      <ProductSizes></ProductSizes>
      <AddToCart></AddToCart>
    </>
  );
}
// https://images.unsplash.com/photo-1615516042934-3324d4c9f928?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80
// https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80
export default ProductCard;
