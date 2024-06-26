interface TemplateProps {
  bgCSS: string;
  bgImg: string;
  imgCSS: string; 
  img: string;
}

const ImageLoad : React.FC<TemplateProps> = ({bgCSS, bgImg, imgCSS, img}) => {

  return (
    <div
      className={bgCSS}
      style={{
        backgroundImage: `url(${bgImg})`
      }}
    >
      <img
        src={img}
        alt="thumbnail"
        className={imgCSS}
      />
    </div>
  )
}

export default ImageLoad