import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/UpdateProfilePics";
import useAppContext from "../store/appContext";
import { BsFillCameraFill } from "react-icons/bs";

const defaultImage =
  "https://res.cloudinary.com/dhgkcwsdz/image/upload/c_scale,h_75/v1656253655/jobtify-app/user-solid_1_lgh5ar.jpg";

const UpdateProfilePics = () => {
  const [emptyFile, setEmptyFile] = useState(true);
  const { user, changeUserPicture, isLoading } = useAppContext();
  const [image, setImage] = useState(user.image || defaultImage);
  const [imageName, setImageName] = useState("");

  const handleImageChange = (event) => {
    setImageName(event.target.files[0].name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fileObj = event.target[0].files[0];
    if (!fileObj) {
      setEmptyFile(false);
      setTimeout(() => {
        setEmptyFile(true);
      }, 1000);
      return;
    }
    const formData = new FormData();
    formData.append("userImg", fileObj);

    changeUserPicture(formData);
  };

  useEffect(() => {
    setImage(user.image);
    setImageName("");
  }, [user.image]);

  return (
    <Wrapper>
      <h3 className="divTitle">Edit Profile Picture</h3>
      {!emptyFile && (
        <div className={`alert alert-danger`}>
          <p>Kindly select an image</p>
        </div>
      )}
      <div className="userImgDiv">
        <img src={image} alt="" className="userImg" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label htmlFor="inputTag" className="imgLabel">
            Upload Image
            <BsFillCameraFill />
            <input
              type="file"
              id="inputTag"
              className="imgInput"
              onChange={handleImageChange}
            />
            <span className="imgName">{imageName}</span>
          </label>
        </div>
        <button type="submit" className="submitImgBtn" disabled={isLoading}>
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default UpdateProfilePics;
