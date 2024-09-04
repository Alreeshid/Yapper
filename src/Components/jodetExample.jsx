import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import parser from 'html-react-parser';
import { Button } from 'jodit/esm/modules';

function Example() 
{
	const editor = useRef(null)
	
	const config = useMemo(() => ({
		readonly: false, // all options from https://xdsoft.net/jodit/docs/,
		placeholder: 'Write Here',
		toolbarButtonSize: 'middle',
		width: 600,

	}),
);
	const [content, setContent] = useState()
	return(
		<div>
			
			<JoditEditor 
				ref={editor} value={content} 
				onChange={(newContent) => setContent(newContent)}
				config={config}
			/>

			
				<div></div>
		</div>
	);
}


export default Example

