import React from 'react';
import { El } from '@numl-react/core';

function ProductCard(props: any) {
  const {
    width = '22',
    name,
    image,
    detail,
    price,
    color,
    currency,
    sizes,
    rating,
    ...otherProps
  } = props;
  return (
    <El.Grid
      columns="auto"
      row="auto"
      content="start"
      width={width}
      {...otherProps}
    >
      <El.Card padding="20px" radius="8px">
        <El.Image column="1" width="100%" src={image} fit="fill" />
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
          />
        </El.Block>
      </El.Card>
    </El.Grid>
  );
}

function ProductRating(props: any) {
  const { rating, ...otherProps } = props;
  let tempRating: number = rating.avgRating;

  /** Incase if rating is not provided, dont show ProductRating */

  if (!rating) return null;

  if (rating.avgRating > 5) rating.avgRating = 5;
  if (rating.avgRating < 0) rating.avgRating = 0;
  return (
    <El.Flex gap content="space-between" items="center" padding {...otherProps}>
      <El.Inline>
        {[0, 1, 2, 3, 4].map((a) => {
          if (tempRating > 0) {
            tempRating -= 1;
            return <El.Icon name="star" key={a} color="#special" />;
          }
          return <El.Icon name="star-outline" cursor="pointer" />;
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

/** *
 *
 */

function ProductColors(props: any): JSX.Element {
  const { color } = props;
  return (
    <El.Grid>
      <El.Block row="1" text="bold" size="14px 20px" padding="5px 0px">
        Colors
      </El.Block>
      <El.Flex row="2" gap items="center">
        {color &&
          color.map((color: string) => (
            <El.Circle size="3x" fill={color} key={color} cursor="pointer" />
          ))}
      </El.Flex>
    </El.Grid>
  );
}

/**
 * Inputs Sizes in form of array and shows in button
 * @param props
 * @returns
 */

function ProductSizes(props: any) {
  const { sizes } = props;

  if (!sizes) return null;

  return (
    <>
      <El.Block text="bold" size="14px 20px" padding="5px 0px">
        Sizes
      </El.Block>
      <El.Block>
        {sizes &&
          sizes.map((sizes: any) => (
            <El.Button toggle key={sizes} cursor="pointer" text="uppercase">
              {sizes}
            </El.Button>
          ))}
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
    <El.Flex gap content="space-between" items="center" padding="0.75 0">
      <El.Inline>
        <El.Button cursor="pointer">Add To Cart</El.Button>
      </El.Inline>
      <El.Inline size="1.25 1.5">
        {currency}
        {price}
      </El.Inline>
    </El.Flex>
  );
}

ProductCard.Landscape = function (props) {
  const {
    width = '280px',
    name,
    image,
    detail,
    price,
    color,
    sizes,
    currency,
    rating,
  } = props;
  return (
    <El.Flex gap content="space-between" items="center" padding>
      <El.Card padding="20px" radius="8px">
        <El.Grid columns="auto" row="auto" gap="3x" content="start">
          <El.Image column="1" width={width} src={image} fit="fill" />
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
            />
          </El.Block>
        </El.Grid>
      </El.Card>
    </El.Flex>
  );
};

const ProductDetail = (props: any) => {
  const { name, detail, price, color, sizes, currency, rating } = props;
  return (
    <>
      <ProductRating rating={rating} />
      <ProductTitle name={name} detail={detail} />
      {/* <ProductColors color={color} /> */}
      <ProductSizes sizes={sizes} />
      <AddToCart price={price} currency={currency} />
    </>
  );
};

export default ProductCard;
