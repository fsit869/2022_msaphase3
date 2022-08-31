import axios from 'axios';

export type NoteKeys = {
    id: string;
    title: string;
    date: string;
    description: string;
    severity: number;
};

const ENDPOINT = "https://msa-notes-backend.herokuapp.com"

export function getAllNotes(
    setData: React.Dispatch<any>,
    // setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    // setError: React.Dispatch<React.SetStateAction<boolean>>
) {
    axios.get<NoteKeys>(ENDPOINT + "/notes").then((res) => {
        // Successful fetch
        console.log(res)
        setData(res.data);
        // setLoading(false);
        // setError(false);
    }).catch((error) => {
        // Failed fetch
        console.log(error);
        // setLoading(false);
        // setError(true);
    })
}

export function getCertainNote(
    noteID: string,
    setData: React.Dispatch<any>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>
) {
    axios.get<NoteKeys>(ENDPOINT + "/notes/" + noteID).then((res) => {
        // Successful fetch
        console.log(res)
        setData(res.data);
        setLoading(false);
        setError(false);
    }).catch((error) => {
        // Failed fetch
        console.log(error);
        setLoading(false);
        setError(true);
    })
}

export function saveNewNote(
    title: string,
    description: string,
    date: string,
    severity: number,
    updateMethod: any
) {
    axios.post(ENDPOINT + "/notes", {
        title: title,
        date: date,
        description: description,
        severity: severity
    }).then((res)=> {
        updateMethod()
    }).catch((error) => {

    })
}

export function deleteNote(
    noteID: string,
    updateMethod: any
) {
    axios.delete(ENDPOINT + "/notes/" + noteID)
    .then((res)=> {
        updateMethod()
    }).catch((error) => {

    })
}