class Guideline {
    constructor(id, title, description = '', successCriteria = [], quiz = null) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.successCriteria = successCriteria; // SuccessCriterion[]
        this.quiz = quiz;                       // Quiz | null
    }
}
export default Guideline;
