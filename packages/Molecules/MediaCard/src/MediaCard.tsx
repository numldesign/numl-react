import React from 'react';

function MediaCard(props) {
  const { src, ...otherProps } = props;
  return (
    <nu-card padding="2x" columns="1fr">
      <nu-img
        src="https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg"
        width="100%"
        height="9.875rem"
      ></nu-img>
      <nu-grid
        columns="auto 1fr"
        content="stretch end"
        items="stretch end"
        padding="2x 0x"
      >
        <nu-el text="bold">New product and the market</nu-el>
        <nu-icon align-self="end" name="ellipsis-horizontal-outline"></nu-icon>
      </nu-grid>
      <nu-grid columns="auto" gap>
        <nu-el row="1">Product details</nu-el>
        <nu-btn row="2" width="6.813rem">
          Learn More
        </nu-btn>
      </nu-grid>
    </nu-card>
  );
}

export default MediaCard;
