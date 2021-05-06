import React from 'react';
import { El } from '../../../Core';
function ProductCard(props: any) {
  let { width = '350px', name, image, detail, price, color, currency, sizes, rating, ...otherProps } = props;
  return (
    <El.Grid columns="auto" row="auto" content="start" width={width} {...otherProps}>
      <El.Card padding="20px" radius="8px">
        <El.Image column="1" width="100%" src={image} fit="fill"></El.Image>
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
      </El.Card>
    </El.Grid>
  );
}

function ProductRating(props: any) {
  let { rating, ...otherProps } = props;

  /** Incase if rating is not provided, dont show ProductRating */
  if (!rating) return null;

  if (rating.avgRating > 5) rating.avgRating = 5;
  if (rating.avgRating < 0) rating.avgRating = 0;
  let tempRating = rating.avgRating;
  return (
    <El.Flex gap content="space-between" items="center" padding {...otherProps}>
      <El.Inline>
        {[0, 1, 2, 3, 4].map(function () {
          if (tempRating > 0) {
            tempRating--;
            return <El.Icon name="star" color="#special"></El.Icon>;
          }
          return <El.Icon name="star-outline" cursor="pointer"></El.Icon>;
        })}
        <El.Inline padding>({rating.count})</El.Inline>
      </El.Inline>
      <El.Inline border="bg" radius="4x" padding="5px 15px" size="12px 16px">
        Neutral
      </El.Inline>
    </El.Flex>
  );
}

function ProductTitle(props: any) {
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
          color.map(function (color: string) {
            return <El.Circle size="3x" fill={color} cursor="pointer"></El.Circle>;
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
function ProductSizes(props: any) {
  let { sizes } = props;

  if (!sizes) return null;

  return (
    <>
      <El.Block text="bold" size="14px 20px" padding="5px 0px">
        Sizes
      </El.Block>
      <El.Block>
        {sizes &&
          sizes.map(function (sizes: any) {
            return (
              <El.Button toggle cursor="pointer" text="uppercase">
                {sizes}
              </El.Button>
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
function AddToCart(props: any) {
  const { price, currency } = props;
  return (
    <El.Flex gap content="space-between" items="center" padding="14px 0px">
      <El.Inline>
        <El.Button cursor="pointer">Add To Cart</El.Button>
      </El.Inline>
      <El.Inline size="20px 28px">
        {currency}
        {price}
      </El.Inline>
    </El.Flex>
  );
}

function ProductDetail(props: any) {
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

ProductCard.Landscape = function (props: any) {
  let { width = '280px', name, image, detail, price, color, sizes, currency, rating, ...otherProps } = props;

  return (
    <El.Flex gap content="space-between" items="center" padding>
      <El.Card padding="20px" radius="8px">
        <El.Grid columns="auto" row="auto" gap="3x" content="start">
          <El.Image column="1" width={width} src={image} fit="fill"></El.Image>
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
      </El.Card>
    </El.Flex>
  );
};

export default ProductCard;
