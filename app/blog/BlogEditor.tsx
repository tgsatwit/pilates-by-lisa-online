import React, { useMemo, useState, useCallback } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";

// Define custom types for our editor elements
type CustomElement = {
  type: 'paragraph'
  children: CustomText[]
}

type CustomText = {
  text: string
  bold?: boolean
  italic?: boolean
}

declare module 'slate' {
  interface CustomTypes {
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: 'Write your blog content here...' }],
  },
] as Descendant[]

export default function BlogEditor({
  onChange,
}: {
  onChange: (value: Descendant[]) => void;
}) {
  const [value, setValue] = useState<Descendant[]>(initialValue);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const handleChange = useCallback((newValue: Descendant[]) => {
    setValue(newValue);
    onChange(newValue);
  }, [onChange]);

  return (
    <Slate 
      editor={editor} 
      initialValue={value} 
      onChange={handleChange}
    >
      <Editable 
        className="border p-4 rounded min-h-[200px]" 
        placeholder="Start writing..." 
      />
    </Slate>
  );
}