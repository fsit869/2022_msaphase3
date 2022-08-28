/** NoteInterface.ts
 *  Contains an interface of a note
 *
 *  id: Database id
 *  title: Title of note
 *  description: String description
 *  date: Date displaed on note
 *  severity:
 *      0: Unranked
 *      1: Low
 *      2: Med
 *      3: High
 */
export default interface NoteInterface {
    id: string,
    title: string,
    description: string,
    date: string,
    severity: number,
}