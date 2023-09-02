import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { stateToHTML } from 'draft-js-export-html';

// Load the Editor component dynamically
const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor), {
  ssr: false, // Disable server-side rendering for the Editor component
});

function RichTextEditor() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Your initializations or side-effects that require the window object
    }
  }, []);

  const handleEditorChange = (newEditorState: any) => {
    setEditorState(newEditorState);
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const contentHtml = stateToHTML(contentState);
    // Rest of your code
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
      />
      <button onClick={handleSave}>שמירה</button>
    </div>
  );
}

export default RichTextEditor;
