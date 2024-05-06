import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import './../../tiptap.css';
import Image from "@tiptap/extension-image";

export default function Editor({ blogContent }) {
  const extensions = [StarterKit, Image];

  const editor = useEditor({
    extensions,
    content: '',
    editable: false,
  });

  useEffect(() => {
    if (editor)
        editor.commands.setContent(blogContent);
  }, [editor, blogContent])

  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
}
