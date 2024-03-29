import "bootstrap/dist/css/bootstrap.min.css";
import {Navigate, Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import {NewNote} from "./NewNote";
import {useLocalStorage} from "./useLocalStorage";
import {useMemo} from "react";

export type Note = {
    id: string
} & NoteData

type RawNote = {
    id: string
} & RawNoteData

type RawNoteData = {
    title: string,
    markdown: string,
    tagIds: string[]
}

export type NoteData = {
    title: string,
    markdown: string,
    tags: Tag[]
}

export type Tag = {
    id: string,
    label: string
}

function App(){
    const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
    const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

    const notesWithTags = useMemo(
        ()=>{
        return notes.map(note => {
            return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))}
        })
    }, [notes, tags])

    return(
        <Container className="my-4">
        <Routes>
        <Route path="/" element={<h1>Hi</h1>}></Route>
        <Route path="/new" element={<NewNote />}></Route>
        <Route path="/:id">
            <Route index element={<h1>Show</h1>} />
            <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
        </Container>
    )
}

export default App;