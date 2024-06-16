import Dropzone from "react-dropzone"
import axiosInstance from "../utils/axios";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "./Spinner";

type Props = {
  onImageChange: any,
  images: any
}

const FileUpload = ({onImageChange, images}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 이미지 확장자 제한
  const imgValidation = ['image/jpeg', 'image/jpg', 'image/png'];

  const handleDrop = async (files: any) => {
    // 이미지 확장자 검증
    if(!imgValidation.find(type => type === files[0].type)){
      return toast.error('jpg, jpeg, png 파일만 업로드 가능합니다.');
    }

    let formData = new FormData();
    formData.append('image', files[0]);

    const config = {
      headers: {'content-type': 'multipart/form-data'}
    }
    
    try{
      setIsLoading(true);
      const res = await axiosInstance.post('/template/image', formData, config);
      if(res.status === 200){
        onImageChange([...images, res.data.location]);
      }else throw Error('업로드 실패');
      setIsLoading(false);
    }catch(err){
      return toast.error('업로드에 실패했습니다. 다시 시도해주세요.')
    }
  }

  const handleDelete = (image: any) => {
    const currentIndex = images.indexOf(image);
    let newImages = [...images];
    newImages.splice(currentIndex, 1);
    onImageChange(newImages);
  }
  
  return (
    <div className="flex_col gap-4">
      <Dropzone onDrop={handleDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="border-4 border-primary-main text-emerald-600 text-lg border-dashed flex-center min-h-80">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isLoading ? (
                <div className="flex gap-4">
                  <Spinner /> 이미지를 업로드 중입니다. . .</div>
              ): (
                <p>이미지를 여기에 드래그 하거나, <br/> 클릭해서 이미지를 업로드 하세요.</p>
              )}
            </div>
          </section>
        )}
      </Dropzone>
      <div className="border min-h-24 flex">
        {images.map((image: any) => (
          <div key={image} onClick={() => handleDelete(image)}>
            <img 
              src={image} 
              alt={image.split('/')[3]}
              className="h-full w-24 object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FileUpload