import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Delta as TypeDelta, Sources, Delta } from 'quill';
// import Delta from "quill-delta";
import 'react-quill/dist/quill.snow.css';

// const delta = (new Delta([
// 	{ insert: "Gandalf", attributes: { bold: true } },
// 	{ insert: " the " },
// 	{ insert: "Grey", attributes: { color: "#ccc" } },
// ]) as unknown) as TypeDelta;

const modules = {
  toolbar: [
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[{ size: [] }],
			[{ font: [] }],
			[{ align: ["right", "center", "justify"] }],
			[{ list: "ordered" }, { list: "bullet" }],
			["link", "image"],
			[{ color: ["red", "#785412"] }],
			[{ background: ["red", "#785412"] }]
  ],
};

export default function Editor() {
  const [value, setValue] = useState<TypeDelta>();
  const onEditorChange = (
    value: string,
    delta: TypeDelta,
    source: Sources,
    editor: ReactQuill.UnprivilegedEditor,
  ) => {
    setValue(editor.getContents());
  console.log({ value, delta, source, editor });
  const foo = editor.getHTML();
  console.log(foo);
  };

  const myValue =`<p><strong style="color: rgb(120, 84, 18);">hay</strong> hey the <span style="color: red;">darkness has</span> come</p>`

  // const eraseme = JSON.parse(myValue);

  return (
    <>
    <ReactQuill
      theme='snow'
      value={myValue}
      onChange={onEditorChange}
      modules={modules}
    />
    {/* <div>{eraseme}</div> */}
    </>
  );
}
