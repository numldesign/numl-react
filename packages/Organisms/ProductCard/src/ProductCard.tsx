import React from 'react';

function ProductCard(props) {
  let { width = '350px', name, image, detail, price, color, currency, sizes, rating, ...otherProps } = props;
  return (
    <El.Grid columns="auto" row="auto" content="start" width={width} {...otherProps}>
      <nu-card padding="20px" radius="8px">
        <nu-img column="1" width="100%" src={image} fit="fill"></nu-img>
        <El.Block>
          <ProductDetail
            name={name}
            rating={rating}
            image={image}
            detail={detail}
            price={price}
            color={color}
            currency={currency}
            sizes={sizes}
          ></ProductDetail>
        </El.Block>
      </nu-card>
    </El.Grid>
  );
}

function ProductRating(props) {
  let { rating, ...otherProps } = props;

  /** Incase if rating is not provided, dont show ProductRating */
  if (!rating) return null;

  if (rating.avgRating > 5) rating.avgRating = 5;
  if (rating.avgRating < 0) rating.avgRating = 0;
  let tempRating = rating.avgRating;
  return (
    <El.Flex gap content="space-between" items="center" padding>
      <nu-in>
        {[0, 1, 2, 3, 4].map(function () {
          if (tempRating > 0) {
            tempRating--;
            return <El.Icon name="star" color="#special"></El.Icon>;
          }
          return <El.Icon name="star-outline" cursor="pointer"></El.Icon>;
        })}
        <nu-in padding>({rating.count})</nu-in>
      </nu-in>
      <nu-in border="bg" radius="4x" padding="5px 15px" size="12px 16px">
        Neutral
      </nu-in>
    </El.Flex>
  );
}

function ProductTitle(props) {
  const { name, detail } = props;
  return (
    <>
      {name ? (
        <El.Block size="16px 24px" text="bold" cursor="pointer">
          {name}
        </El.Block>
      ) : (
        ''
      )}
      {detail ? (
        <El.Block size="14px 20px" cursor="pointer">
          {detail}
        </El.Block>
      ) : (
        ''
      )}
    </>
  );
}

/***
 *
 */
function ProductColors(props: { color: any }) {
  const { color } = props;
  return color && color.length > 0 ? (
    <El.Grid>
      <El.Block row="1" text="bold" size="14px 20px" padding="5px 0px">
        Colors
      </El.Block>
      <El.Flex row="2" gap items="center">
        {color &&
          color.map(function (color) {
            return <nu-circle size="3x" fill={color} cursor="pointer"></nu-circle>;
          })}
      </El.Flex>
    </El.Grid>
  ) : null;
}

/**
 * Inputs Sizes in form of array and shows in button
 * @param props
 * @returns
 */
function ProductSizes(props) {
  let { sizes } = props;

  if (!sizes) return null;

  return (
    <>
      <El.Block text="bold" size="14px 20px" padding="5px 0px">
        Sizes
      </El.Block>
      <El.Block>
        {sizes &&
          sizes.map(function (sizes) {
            return (
              <nu-btn toggle cursor="pointer" text="uppercase">
                {sizes}
              </nu-btn>
            );
          })}
      </El.Block>
    </>
  );
}

/**
 * Displays Add to card Button and Product Price
 * @param props
 * @returns React.FC<AddToCart>
 */
function AddToCart(props) {
  const { price, currency } = props;
  return (
    <El.Flex gap content="space-between" items="center" padding="14px 0px">
      <nu-in>
        <nu-btn cursor="pointer">Add To Cart</nu-btn>
      </nu-in>
      <nu-in size="20px 28px">
        {currency}
        {price}
      </nu-in>
    </El.Flex>
  );
}

function ProductDetail(props) {
  let { name, detail, price, color, sizes, currency, rating } = props;
  return (
    <>
      <ProductRating rating={rating}></ProductRating>
      <ProductTitle name={name} detail={detail}></ProductTitle>
      <ProductColors color={color}></ProductColors>
      <ProductSizes sizes={sizes}></ProductSizes>
      <AddToCart price={price} currency={currency}></AddToCart>
    </>
  );
}

ProductCard.Landscape = function (props) {
  let { width = '280px', name, image, detail, price, color, sizes, currency, rating, ...otherProps } = props;

  return (
    <El.Flex gap content="space-between" items="center" padding>
      <nu-card padding="20px" radius="8px">
        <El.Grid columns="auto" row="auto" gap="3x" content="start">
          <nu-img column="1" width={width} src={image} fit="fill"></nu-img>
          <El.Block column="2">
            <ProductDetail
              currency={currency}
              name={name}
              rating={rating}
              image={image}
              detail={detail}
              price={price}
              color={color}
              sizes={sizes}
            ></ProductDetail>
          </El.Block>
        </El.Grid>
      </nu-card>
    </El.Flex>
  );
};

export default ProductCard;
