import Dropzone from "react-dropzone"
import axiosInstance from "../utils/axios";
import { toast } from "react-toastify";

const FileUpload = ({onImageChange, images}) => {

  const handleDrop = async (files) => {
    let formData = new FormData();
    const config = {
      header: {'content-type': 'multipart/form-data'}
    }

    formData.append('file', files[0]);
    try{
      const res = await axiosInstance.post('/template/image', formData, config);
      console.log(res);
      if(res.status === 200) onImageChange([...images, res.data.fileName]);
      else throw Error('업로드 실패');
    }catch(err){
      return toast.info('업로드에 실패했습니다. 다시 시도해주세요.')
    }
  }

  const handleDelete = (image) => {
    const currentIndex = images.indexOf(image);
    let newImages = [...images];
    newImages.splice(currentIndex, 1);
    onImageChange(newImages);
  }
  console.log('images:', images);
  return (
    <div className="flex_col gap-4">
      <Dropzone onDrop={handleDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="border-4 border-primary-main text-emerald-600 text-lg border-dashed flex-center min-h-80">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>이미지를 여기에 드래그 하거나, <br/> 클릭해서 이미지를 업로드 하세요.</p>
            </div>
          </section>
        )}
      </Dropzone>
      <div className="border min-h-24 flex">
        {images.map(image => (
          <div key={image} onClick={() => handleDelete(image)}>
            <img 
              src={`${import.meta.env.VITE_SERVER_URL}/${image}`} 
              alt={image}
              className="h-full w-24 object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FileUpload