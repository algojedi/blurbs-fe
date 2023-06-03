import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Delta as TypeDelta, Sources, Delta } from 'quill';
// import Delta from "quill-delta";
import 'react-quill/dist/quill.snow.css';
import './editor.scss';

// const delta = (new Delta([
// 	{ insert: "Gandalf", attributes: { bold: true } },
// 	{ insert: " the " },
// 	{ insert: "Grey", attributes: { color: "#ccc" } },
// ]) as unknown) as TypeDelta;

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ size: [] }],
    [{ font: [] }],
    [{ align: ['right', 'center', 'justify'] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    [{ color: ['red', '#785412'] }],
  ],
};

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


  // const eraseme = JSON.parse(myValue);

  const handleSavePost = () => {
    console.log('Save post');
    console.log({ value, valueHTML });
    // send post request to server
    // const body = { value : JSON.stringify(value), valueHTML }
    // const reply = fetch('http://localhost:5000/api/posts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // });

  // const myValue = `<p><strong style="color: rgb(120, 84, 18);">hay</strong> hey the <span style="color: red;">darkness has</span> come</p>`;
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
      <div>
        <button className='btn btn-primary' onClick={handleSavePost}>SAVE</button>
      </div>
    </>
  );
}
