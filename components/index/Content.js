import React, { useRef, useState } from "react";
import styles from "./Content.module.css";
import Image from "next/image";
import { FaRegPlusSquare, FaTimes } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserProfileImage } from "@/redux/features/user/userSlice";
const Content = () => {
  const dispatch = useDispatch();
  const fileInput = useRef();
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const fileInputChangeHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
      setSelectedFile(file);
    }
    fileInput.current.value = null;
  };
  const hanleUploadImage = async () => {
    if (!selectedFile) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("postedImage", selectedFile);
      const { data } = await axios.post("/api/image", formData);
      dispatch(setUserProfileImage(data.fileName));
    } catch (error) {}
    setSelectedImage("");
    setSelectedFile(null);
    setUploading(false);
  };
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.uploadContainer}`}>
        <label>
          <input
            ref={fileInput}
            type="file"
            accept="image/*"
            hidden
            onChange={fileInputChangeHandler}
          />
          <div className={`${styles.selectImageBox}`}>
            {selectedImage ? (
              <Image
                width={190}
                height={190}
                src={selectedImage}
                alt="user profile pic"
                className={`${styles.borderRadius}`}
              />
            ) : (
              <FaRegPlusSquare size={25} />
            )}
          </div>
        </label>

        <span
          className={
            !uploading ? `${styles.button}` : `${styles.buttonDisabled}`
          }
          onClick={!uploading ? hanleUploadImage : null}
        >
          {!uploading ? "آپلود" : "لطفا شکیبا باشید ..."}
        </span>
      </div>
    </div>
  );
};

export default Content;
