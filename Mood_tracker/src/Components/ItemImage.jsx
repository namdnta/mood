function ItemImage({ image, altText }) {
  return (
    <div className="item-image">
      <img src={image} alt={altText} />
    </div>
  );
}

export default ItemImage;