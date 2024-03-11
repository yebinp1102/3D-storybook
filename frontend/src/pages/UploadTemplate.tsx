import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useUploadNewTemplate } from "../lib/queriesAndMutations";
import FileUpload from "../components/FileUpload";

const INITIAL_TEMPLATE = {
  title: '',
  description: '',
  price: 0,
  images: []
}

const UploadTemplate = () => {
  const navigate = useNavigate();
  const [template, setTemplate] = useState(INITIAL_TEMPLATE);
  const {mutateAsync: uploadTemplate} = useUploadNewTemplate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setTemplate(prevState => ({
      ...prevState,
      [name] : value
    }));
  }

  const handleImages = (newImages) => {
    setTemplate((prevState) => ({
      ...prevState,
      images: newImages
    }))
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const body = {
      ...template
    }

    uploadTemplate(body)
    navigate('/explore');

  }

  return (
    <section className="max-w-7xl mx-auto px-4 my-20">
      <h1 className="text-2xl font-bold text-emerald-600 p-4 white-shadow-box border-b-primary-main">템플릿 업로드 페이지</h1>

      {/* title, description, price, images */}
      <form className="flex gap-8 mt-8 px-8 py-12 white-shadow-box">
        {/* img upload */}
        <div className="flex-1">
          <FileUpload images={template.images} onImageChange={handleImages} />
        </div>

        {/* fields */}
        <div className="flex-1 m-4 flex_col gap-10">
          <div className="flex_col">
            <p className="font-semibold mb-2 text-lg ml-2">제목 <span className="text-sm text-slate-500 font-medium">(title)</span></p>
            <input onChange={handleChange} name="title" value={template.title} className="w-full border py-2 rounded-lg px-3"/>
          </div>

          <div className="flex_col">
            <p className="font-semibold mb-2 text-lg ml-2">상세설명 <span className="text-sm text-slate-500 font-medium">(description)</span></p>
            <textarea onChange={handleChange} name="description" value={template.description} className="w-full border py-2 rounded-lg px-3 min-h-32"/>
          </div>

          <div className="flex justify-between gap-12">
            <div className="flex_col flex-1">
              <p className="font-semibold mb-2 text-lg ml-2">가격 <span className="text-sm text-slate-500 font-medium">(price)</span></p>
              <input onChange={handleChange} name="price" placeholder="0" value={template.price} className="w-full border py-2 rounded-lg px-3" type="number"/>
            </div>

            <button onClick={handleSubmit} className="bg-primary-main self-end h-fit w-fit px-8 py-2 text-white rounded-lg shadow-md">업로드</button>
          </div>

        </div>
      </form>
    </section>
  )
}

export default UploadTemplate