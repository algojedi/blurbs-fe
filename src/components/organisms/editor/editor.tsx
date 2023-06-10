import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Delta as TypeDelta, Sources } from 'quill';
// import Delta from "quill-delta";
import 'react-quill/dist/quill.snow.css';
import './editor.scss';
import { API_URL } from '../../../api/api';
import { modules } from './util';

export default function Editor() {
  const [value, setValue] = useState<TypeDelta>();
  const [valueHTML, setValueHTML] = useState<string>();

  const onEditorChange = (
    value: string,
    delta: TypeDelta, // not sure why this is useful
    source: Sources,
    editor: ReactQuill.UnprivilegedEditor,
  ) => {
    const contents = editor.getContents(); // get contents as Delta
    // console.log({ contents, delta });
    setValue(contents);
    setValueHTML(editor.getHTML());
    // console.log({ value, delta, source, editor });
    // const foo = editor.getHTML();
    // console.log(foo);
  };

  const handleSavePost = () => {
    console.log('Save post');
    console.log({ value, valueHTML });
    // send post request to server
    const body = {
      userId: 1,
      quillContent: JSON.stringify(value),
      htmlContent: valueHTML,
    };
    const reply = fetch(`${API_URL}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    // TODO: navigate to posts page on success  
  
  };

  return (
    <>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={onEditorChange}
        modules={modules}
        className='container bg-secondary'
      />
      <div className='d-flex justify-content-end px-4 mb-4 mt-1'>
        <button className='btn btn-primary' onClick={handleSavePost}>
          SAVE
        </button>
      </div>
    </>
  );
}
