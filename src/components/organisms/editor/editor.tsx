import { useCallback, useEffect, useState } from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"
import { useParams } from "react-router-dom"

const SAVE_INTERVAL_MS = 2000
const TOOLBAR_OPTIONS = [
	[{ header: [1, 2, 3, 4, 5, 6, false] }],
	[{ font: [] }],
	[{ list: "ordered" }, { list: "bullet" }],
	["bold", "italic", "underline"],
	[{ color: [] }, { background: [] }],
	[{ script: "sub" }, { script: "super" }],
	[{ align: [] }],
	["image", "blockquote", "code-block"],
	["clean"],
]

export default function TextEditor() {
	const { id: documentId } = useParams()
	const [quill, setQuill] = useState()


	useEffect(() => {
		new Quill("#editor", { theme: "snow" })
			// quill.setContents(document)
			// quill.enable()
	}, [])
	// }, [quill, documentId])
	return <div id="editor"></div>
}


	/*

	useEffect(() => {
		if (quill == null) return

		const handler = delta => {
			quill.updateContents(delta)
		}

	}, [quill])

	useEffect(() => {
		if (quill == null) return

		quill.on("text-change", handler)

		return () => {
			quill.off("text-change", handler)
		}
	}, [quill])

	const wrapperRef = useCallback(wrapper => {
		if (wrapper == null) return

		wrapper.innerHTML = ""
		const editor = document.createElement("div")
		wrapper.append(editor)
		const q = new Quill(editor, {
			theme: "snow",
			modules: { toolbar: TOOLBAR_OPTIONS },
		})
		q.disable()
		q.setText("Loading...")
		setQuill(q)
	}, [])
	return <div className="container" ref={wrapperRef}></div>
} 
*/