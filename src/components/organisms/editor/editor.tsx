import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Delta as TypeDelta, Sources } from 'quill';
import 'react-quill/dist/quill.snow.css';
import './editor.scss';
import { modules } from './util';

export type EditorProps = {
  // handleSavePost: ({ value, valueHTML }: SavePostProps) => void;
  setValue: (deltaValue: TypeDelta) => void;
  value?: TypeDelta;
  setValueHTML: (strValue: string) => void;
};

export default function Editor({ setValue, setValueHTML, value }: EditorProps) {
  const onEditorChange = (
    value: string, // save this to db ?
    delta: TypeDelta, // not sure why this is useful
    source: Sources,
    editor: ReactQuill.UnprivilegedEditor,
  ) => {
    const contents = editor.getContents(); // get contents as Delta
    // console.log({ contents, delta });
    setValue(contents);
    setValueHTML(editor.getHTML());
    // console.log({ value, delta, source, editor });
    // console.log(editor.getHTML());
  };

  return (
    <div className=''>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={onEditorChange}
        modules={modules}
        className='editor-container bg-secondary'
      />
    </div>
  );
}
