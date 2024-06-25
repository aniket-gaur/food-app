"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [previewimage, setpreviewimage] = useState();

  const imageinput = useRef();
  const handlebuttonclick = () => {
    imageinput.current.click();
  };

  const handleimagechange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setpreviewimage(null);
      return;
    }
    //taken from mdn file reader docs
    //this filereader works asychronously
    const filereader = new FileReader();
    filereader.onload = () => {
      setpreviewimage(filereader.result);
    };
    filereader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        {/* conditional component  */}
        <div className={classes.preview}>
          {!previewimage && <p>No image is Picked </p>}
          {previewimage && (
            <Image src={previewimage} alt="this is the image choosen " fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png image/jpeg"
          name={name}
          ref={imageinput}
          onChange={handleimagechange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlebuttonclick}
        >
          Pick a Image
        </button>
      </div>
    </div>
  );
}
